import nodemailer from "nodemailer";

export interface ContactLeadData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessCategory: string;
  service: string;
  projectDescription: string;
}

function getTransporter() {
  const user = process.env.GMAIL_USER?.trim();
  const rawPass = process.env.GMAIL_APP_PASSWORD?.trim();
  // Google App Passwords are strictly 16 alpha characters (e.g. 4 blocks of 4 letters)
  const cleaned = rawPass ? rawPass.replace(/[^a-zA-Z]/g, "") : "";
  const pass = cleaned.length >= 16 ? cleaned.slice(0, 16) : cleaned;

  if (!user || !pass) {
    throw new Error(
      "GMAIL_USER or GMAIL_APP_PASSWORD is not configured in environment variables."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Escapes HTML characters to prevent HTML injection in email bodies
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Send notification email to the agency inbox
 */
export async function sendLeadNotificationEmail(lead: ContactLeadData) {
  const transporter = getTransporter();
  const agencyEmail = "craftedmindsinfo@gmail.com";
  const senderUser = process.env.GMAIL_USER?.trim() || agencyEmail;

  // Clean phone number for WhatsApp link
  const cleanPhone = lead.phone.replace(/[^0-9+]/g, "").replace(/^\+/, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0b0c10; color: #ffffff; margin: 0; padding: 24px; }
    .card { max-width: 620px; margin: 0 auto; background: linear-gradient(180deg, #181920 0%, #0e0f14 100%); border: 1px solid rgba(255,255,255,0.18); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
    .header { padding: 28px; border-bottom: 1px solid rgba(255,255,255,0.12); background: #121319; }
    .badge { display: inline-block; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1.5px; color: #10b981; background: rgba(16,185,129,0.12); padding: 4px 10px; border-radius: 9999px; border: 1px solid rgba(16,185,129,0.3); }
    .title { margin: 12px 0 0; font-size: 22px; font-weight: 700; color: #ffffff; }
    .content { padding: 28px; }
    .field-row { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-bottom: 4px; }
    .field-val { font-size: 15px; color: #f3f4f6; font-weight: 500; }
    .field-val-desc { font-size: 14px; line-height: 1.6; color: #e5e7eb; background: #08090c; padding: 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); white-space: pre-wrap; }
    .btn { display: inline-block; background: #ffffff; color: #000000; text-decoration: none; padding: 10px 20px; font-size: 13px; font-weight: 700; border-radius: 9999px; margin-right: 12px; margin-top: 6px; }
    .btn-wa { background: #25D366; color: #ffffff; }
    .footer { padding: 20px 28px; background: #0a0b0e; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="badge">● New Lead Received</span>
      <h1 class="title">Crafted Minds Consultation Inquiry</h1>
    </div>
    <div class="content">
      <div class="field-row">
        <div class="field-label">Full Name</div>
        <div class="field-val">${escapeHtml(lead.fullName)}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Business / Brand Name</div>
        <div class="field-val">${escapeHtml(lead.businessName)}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Email Address</div>
        <div class="field-val"><a href="mailto:${escapeHtml(lead.email)}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(lead.email)}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Phone / WhatsApp</div>
        <div class="field-val"><a href="tel:${escapeHtml(lead.phone)}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(lead.phone)}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Business Category</div>
        <div class="field-val">${escapeHtml(lead.businessCategory)}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Requested Service</div>
        <div class="field-val" style="color: #a78bfa; font-weight: 600;">${escapeHtml(lead.service)}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Project Description</div>
        <div class="field-val-desc">${escapeHtml(lead.projectDescription)}</div>
      </div>
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
        <a href="mailto:${escapeHtml(lead.email)}" class="btn">Reply via Email</a>
        ${cleanPhone ? `<a href="${whatsappUrl}" target="_blank" class="btn btn-wa">Open WhatsApp Chat</a>` : ""}
      </div>
    </div>
    <div class="footer">
      Delivered directly to ${agencyEmail} via Crafted Minds Server API.
    </div>
  </div>
</body>
</html>
  `;

  await transporter.sendMail({
    from: `"Crafted Minds Inquiries" <${senderUser}>`,
    to: agencyEmail,
    replyTo: lead.email,
    subject: `New Lead: ${lead.fullName} (${lead.businessName}) - ${lead.service}`,
    text: `New Lead from Crafted Minds Contact Form:\n\nName: ${lead.fullName}\nBusiness: ${lead.businessName}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCategory: ${lead.businessCategory}\nService: ${lead.service}\n\nDescription:\n${lead.projectDescription}`,
    html,
  });
}

/**
 * Send confirmation email to the prospective client
 */
export async function sendClientConfirmationEmail(lead: ContactLeadData) {
  const transporter = getTransporter();
  const agencyEmail = "craftedmindsinfo@gmail.com";
  const agencyPhone = "+91 7392029603";
  const senderUser = process.env.GMAIL_USER?.trim() || agencyEmail;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0b0c10; color: #ffffff; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #181920 0%, #0e0f14 100%); border: 1px solid rgba(255,255,255,0.18); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
    .header { padding: 32px 28px 24px; border-bottom: 1px solid rgba(255,255,255,0.12); background: #121319; text-align: center; }
    .monogram { display: inline-block; font-size: 13px; font-weight: 800; letter-spacing: 3px; color: #ffffff; text-transform: uppercase; }
    .title { margin: 14px 0 0; font-size: 22px; font-weight: 700; color: #ffffff; }
    .content { padding: 28px; line-height: 1.6; color: #d1d5db; font-size: 14px; }
    .summary-box { background: #0c0d12; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0; }
    .summary-row { margin-bottom: 10px; font-size: 13px; }
    .summary-row:last-child { margin-bottom: 0; }
    .summary-lbl { color: #9ca3af; font-family: monospace; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; display: block; margin-bottom: 2px; }
    .summary-val { color: #f3f4f6; font-weight: 500; }
    .contact-card { background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.15); border-radius: 10px; padding: 16px; margin-top: 24px; }
    .footer { padding: 20px 28px; background: #0a0b0e; border-top: 1px solid rgba(255,255,255,0.08); font-size: 11px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="monogram">CRAFTED MINDS</div>
      <h1 class="title">We've Received Your Inquiry</h1>
    </div>
    <div class="content">
      <p style="margin-top: 0;">Hi <strong>${escapeHtml(lead.fullName)}</strong>,</p>
      <p>
        Thank you for getting in touch with Crafted Minds. We have successfully logged your project inquiry for <strong>${escapeHtml(lead.businessName)}</strong>.
      </p>
      <p>
        Our engineering team is currently reviewing your project scope. You can expect a personalized technical response and follow-up consultation within <strong>24 hours</strong>.
      </p>

      <div class="summary-box">
        <div class="summary-row">
          <span class="summary-lbl">Requested Service</span>
          <span class="summary-val">${escapeHtml(lead.service)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-lbl">Business Category</span>
          <span class="summary-val">${escapeHtml(lead.businessCategory)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-lbl">Project Overview</span>
          <span class="summary-val" style="display: block; margin-top: 4px; font-size: 13px; color: #9ca3af; white-space: pre-wrap;">${escapeHtml(lead.projectDescription)}</span>
        </div>
      </div>

      <div class="contact-card">
        <div style="font-weight: 600; color: #ffffff; margin-bottom: 6px;">Need immediate assistance?</div>
        <div style="font-size: 13px; color: #9ca3af;">
          Direct Email: <a href="mailto:${agencyEmail}" style="color: #ffffff; text-decoration: underline;">${agencyEmail}</a><br>
          WhatsApp / Phone: <a href="https://wa.me/917392029603" style="color: #ffffff; text-decoration: underline;">${agencyPhone}</a>
        </div>
      </div>
    </div>
    <div class="footer">
      © 2026 Crafted Minds Studio • Bangalore, India • High-Performance Web Engineering & UI/UX Design
    </div>
  </div>
</body>
</html>
  `;

  await transporter.sendMail({
    from: `"Crafted Minds Studio" <${senderUser}>`,
    to: lead.email,
    replyTo: agencyEmail,
    subject: `We've received your inquiry | Crafted Minds`,
    text: `Hi ${lead.fullName},\n\nThank you for reaching out to Crafted Minds! We have received your inquiry for ${lead.businessName} regarding ${lead.service}.\n\nOur engineering team will review your requirements and follow up within 24 hours.\n\nDirect contact:\nEmail: ${agencyEmail}\nPhone/WhatsApp: ${agencyPhone}\n\nWarm regards,\nCrafted Minds Studio`,
    html,
  });
}
