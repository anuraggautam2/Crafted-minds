import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";
import {
  sendLeadNotificationEmail,
  sendClientConfirmationEmail,
  ContactLeadData,
} from "@/lib/email-server";

// In-memory rate limiting and duplicate submission prevention
interface SubmissionRecord {
  timestamp: number;
}
const recentSubmissions = new Map<string, SubmissionRecord>();

// Clean up stale entries every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleSubmissions() {
  const now = Date.now();
  if (now - lastCleanup > CLEANUP_INTERVAL) {
    for (const [key, record] of recentSubmissions.entries()) {
      if (now - record.timestamp > 60 * 1000) {
        recentSubmissions.delete(key);
      }
    }
    lastCleanup = now;
  }
}

export async function POST(request: NextRequest) {
  try {
    cleanupStaleSubmissions();

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const {
      fullName,
      businessName,
      email,
      phone,
      businessCategory,
      service,
      projectDescription,
      website, // Honeypot field for bot trapping
    } = body;

    // 1. Honeypot spam check
    // If a bot filled out the hidden 'website' field, silently succeed without processing
    if (website && typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Inquiry received successfully." },
        { status: 200 }
      );
    }

    // 2. Strict Field Validations
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Full Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (
      !businessName ||
      typeof businessName !== "string" ||
      businessName.trim().length < 2
    ) {
      return NextResponse.json(
        { error: "Business Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== "string" ||
      !emailRegex.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { error: "A valid phone / WhatsApp number is required." },
        { status: 400 }
      );
    }

    if (
      !businessCategory ||
      typeof businessCategory !== "string" ||
      businessCategory.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Business Category is required." },
        { status: 400 }
      );
    }

    if (
      !service ||
      typeof service !== "string" ||
      service.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Required Service is required." },
        { status: 400 }
      );
    }

    if (
      !projectDescription ||
      typeof projectDescription !== "string" ||
      projectDescription.trim().length < 10
    ) {
      return NextResponse.json(
        { error: "Project Description is required (minimum 10 characters)." },
        { status: 400 }
      );
    }

    const leadData: ContactLeadData = {
      fullName: fullName.trim(),
      businessName: businessName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      businessCategory: businessCategory.trim(),
      service: service.trim(),
      projectDescription: projectDescription.trim(),
    };

    // 3. Duplicate Submission / Rate Limit Guard (within 30 seconds)
    const clientKey = `${leadData.email}_${leadData.service.toLowerCase()}`;
    const previous = recentSubmissions.get(clientKey);
    const now = Date.now();
    if (previous && now - previous.timestamp < 30 * 1000) {
      return NextResponse.json(
        {
          error:
            "A duplicate submission was recently received. Please wait at least 30 seconds before sending another message.",
        },
        { status: 429 }
      );
    }
    recentSubmissions.set(clientKey, { timestamp: now });

    // 4. Supabase Database Insertion
    // Verify client connection and insert into public.leads with automatic single retry for transient network hiccups
    let supabaseResult = null;
    try {
      const supabase = getSupabaseServerClient();
      const insertPayload = {
        full_name: leadData.fullName,
        business_name: leadData.businessName,
        email: leadData.email,
        phone: leadData.phone,
        business_category: leadData.businessCategory,
        service: leadData.service,
        project_description: leadData.projectDescription,
      };

      let { data, error } = await supabase
        .from("leads")
        .insert([insertPayload])
        .select();

      // If transient network/fetch failure occurred, retry once after 500ms
      if (
        error &&
        (error.message?.includes("fetch failed") ||
          error.details?.includes("ENOTFOUND"))
      ) {
        console.warn(
          "Transient Supabase network error encountered, retrying once...",
          error.message
        );
        await new Promise((res) => setTimeout(res, 500));
        const retry = await supabase
          .from("leads")
          .insert([insertPayload])
          .select();
        data = retry.data;
        error = retry.error;
      }

      if (error) {
        console.error("Supabase error inserting into public.leads:", error);
        const isNetworkError =
          error.message?.includes("fetch failed") ||
          error.details?.includes("ENOTFOUND") ||
          error.details?.includes("getaddrinfo");

        const userFriendlyMessage = isNetworkError
          ? "Network connection to Supabase failed. Please verify internet connectivity and DNS resolution."
          : `Database error: ${error.message}`;

        return NextResponse.json(
          {
            error: userFriendlyMessage,
          },
          { status: 500 }
        );
      }
      supabaseResult = data;
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown database connection error";
      console.error("Database connection exception:", errorMessage);
      return NextResponse.json(
        {
          error: `Database configuration error: ${errorMessage}`,
        },
        { status: 500 }
      );
    }

    // 5. Email Notification to Agency and Confirmation to Client
    try {
      await Promise.all([
        sendLeadNotificationEmail(leadData),
        sendClientConfirmationEmail(leadData),
      ]);
    } catch (mailError: unknown) {
      const mailMsg =
        mailError instanceof Error ? mailError.message : "Email dispatch failed";
      console.error("Email dispatch failed:", mailMsg);
      // Lead was saved to DB, but email failed: honestly report status
      return NextResponse.json(
        {
          error: `Inquiry saved to database, but notification email dispatch failed: ${mailMsg}. Please verify Gmail credentials.`,
          savedLeadId: supabaseResult?.[0]?.id || null,
        },
        { status: 500 }
      );
    }

    // Honest complete success
    return NextResponse.json(
      {
        success: true,
        message:
          "Your inquiry has been successfully received and recorded. A confirmation email has been dispatched to your inbox.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg =
      error instanceof Error ? error.message : "Internal Server Error";
    console.error("Unhandled contact API error:", errorMsg);
    return NextResponse.json(
      { error: `Internal server error: ${errorMsg}` },
      { status: 500 }
    );
  }
}
