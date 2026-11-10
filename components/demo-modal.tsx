"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Mail, Send, AlertCircle, Phone, Building, Briefcase, FileText, User } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const BUSINESS_CATEGORIES = [
  "SaaS / Software & Technology",
  "E-Commerce & Retail",
  "Healthcare & Wellness",
  "Finance & FinTech",
  "Real Estate & Architecture",
  "Education & EdTech",
  "Agency & Professional Services",
  "Enterprise & Manufacturing",
  "Other Industry",
];

const SERVICE_OPTIONS = [
  "Website Development",
  "UI/UX Design Systems",
  "E-Commerce Storefronts",
  "Full-Stack Web Applications",
  "Technical Maintenance & Optimization",
  "Technical Consultation",
];

export function DemoModal({ isOpen, onClose, defaultService }: DemoModalProps) {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessCategory, setBusinessCategory] = useState(BUSINESS_CATEGORIES[0]);
  const [service, setService] = useState(defaultService || SERVICE_OPTIONS[0]);
  const [projectDescription, setProjectDescription] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  if (defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    setService(defaultService || SERVICE_OPTIONS[0]);
  }

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          businessName,
          email,
          phone,
          businessCategory,
          service,
          projectDescription,
          website: honeypot, // Honeypot field
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error occurred";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFullName("");
    setBusinessName("");
    setEmail("");
    setPhone("");
    setBusinessCategory(BUSINESS_CATEGORIES[0]);
    setService(defaultService || SERVICE_OPTIONS[0]);
    setProjectDescription("");
    setHoneypot("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Deep obsidian blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container: Polished Obsidian Glass */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-desc"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl my-auto max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-white/[0.22] bg-gradient-to-b from-[#242632]/98 via-[#161720]/98 to-[#0c0d12]/98 p-5 sm:p-8 backdrop-blur-3xl shadow-[0_35px_90px_rgba(0,0,0,0.98),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.7)]"
          >
            {/* Top specular reflection line */}
            <div
              aria-hidden="true"
              className="pointer-events-none sticky inset-x-0 -top-5 sm:-top-8 -mt-5 sm:-mt-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent z-20"
            />
            {/* Upper soft white reflection aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.12)_45%,transparent_75%)] blur-2xl"
            />
            {/* Diagonal sheen */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-80"
            />
            {/* Inner rim reflection ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.14]"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 rounded-full p-2 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/10"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {isSubmitted ? (
              <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-10 text-center relative z-10">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.08] border border-white/25 text-white shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Inquiry Logged & Confirmed
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1.5">
                  Thank You, {fullName || "there"}
                </h3>
                <p className="mt-3 text-sm text-zinc-300 max-w-md leading-relaxed">
                  Your project consultation request for{" "}
                  <span className="text-white font-semibold">{businessName}</span> has been securely recorded.
                  A confirmation summary has been sent to{" "}
                  <span className="text-white font-semibold">{email}</span>.
                </p>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-zinc-400 font-mono">
                  Response SLA: Senior engineers will reply within 24 hours.
                </div>
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="rounded-full border border-white/25 bg-gradient-to-b from-[#242632] to-[#121318] px-7 py-2.5 text-xs font-semibold text-white hover:border-white/45 hover:from-[#2e303d] hover:to-[#181920] transition cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.6)]"
                  >
                    Done
                  </button>
                  <a
                    href="https://wa.me/917392029603"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-6 py-2.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/25 transition cursor-pointer"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Direct Engineering Intake</span>
                  </div>
                  <h3 id="contact-modal-title" className="text-2xl font-bold text-white tracking-tight mt-2.5">
                    Start Your Project Consultation
                  </h3>
                  <p id="contact-modal-desc" className="text-xs sm:text-sm text-zinc-300 mt-1">
                    Fill out your project details. We review every submission directly and follow up with tailored technical recommendations.
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div role="alert" aria-live="assertive" className="mb-5 flex items-start gap-2.5 rounded-xl border border-rose-500/40 bg-rose-950/40 p-3.5 text-xs text-rose-200">
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
                    <div className="flex-1 leading-relaxed">{errorMessage}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from legitimate users) */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="website">Website (Leave blank)</label>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* 2-Column Responsive Layout for Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                        <span className="inline-flex items-center gap-1">
                          <User className="h-3 w-3 text-zinc-400" />
                          <span>Full Name</span>
                        </span>
                        <span className="text-rose-400 ml-0.5">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Alex Sharma"
                        className="w-full rounded-xl border border-white/20 bg-[#121318]/90 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/50 focus:ring-1 focus:ring-white/25"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                        <span className="inline-flex items-center gap-1">
                          <Building className="h-3 w-3 text-zinc-400" />
                          <span>Business / Brand Name</span>
                        </span>
                        <span className="text-rose-400 ml-0.5">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Apex Studio"
                        className="w-full rounded-xl border border-white/20 bg-[#121318]/90 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/50 focus:ring-1 focus:ring-white/25"
                      />
                    </div>
                  </div>

                  {/* 2-Column Responsive Layout for Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                        <span className="inline-flex items-center gap-1">
                          <Mail className="h-3 w-3 text-zinc-400" />
                          <span>Email Address</span>
                        </span>
                        <span className="text-rose-400 ml-0.5">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/20 bg-[#121318]/90 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/50 focus:ring-1 focus:ring-white/25"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                        <span className="inline-flex items-center gap-1">
                          <Phone className="h-3 w-3 text-zinc-400" />
                          <span>Phone / WhatsApp</span>
                        </span>
                        <span className="text-rose-400 ml-0.5">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/20 bg-[#121318]/90 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/50 focus:ring-1 focus:ring-white/25"
                      />
                    </div>
                  </div>

                  {/* 2-Column Responsive Layout for Category & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                        <span className="inline-flex items-center gap-1">
                          <Briefcase className="h-3 w-3 text-zinc-400" />
                          <span>Business Category</span>
                        </span>
                        <span className="text-rose-400 ml-0.5">*</span>
                      </label>
                      <select
                        required
                        value={businessCategory}
                        onChange={(e) => setBusinessCategory(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-[#121318] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-white/50"
                      >
                        {BUSINESS_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat} className="bg-[#121318] text-white">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                        <span className="inline-flex items-center gap-1">
                          <FileText className="h-3 w-3 text-zinc-400" />
                          <span>Required Service</span>
                        </span>
                        <span className="text-rose-400 ml-0.5">*</span>
                      </label>
                      <select
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-[#121318] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-white/50"
                      >
                        {SERVICE_OPTIONS.map((srv) => (
                          <option key={srv} value={srv} className="bg-[#121318] text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                      <span>Project Description</span>
                      <span className="text-rose-400 ml-0.5">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Briefly describe your goals, required features, timeline, and any specific preferences..."
                      className="w-full rounded-xl border border-white/20 bg-[#121318]/90 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/50 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-xs sm:text-sm font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_28px_rgba(255,255,255,0.45)] active:scale-[0.98] cursor-pointer shadow-[0_4px_18px_rgba(255,255,255,0.22)] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Logging & Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Submit Project Consultation</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] text-zinc-400">
                    <a
                      href="mailto:craftedmindsinfo@gmail.com"
                      className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3 text-zinc-400" />
                      <span>craftedmindsinfo@gmail.com</span>
                    </a>
                    <span className="hidden sm:inline text-zinc-600">•</span>
                    <a
                      href="https://wa.me/917392029603"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <Phone className="h-3 w-3 text-zinc-400" />
                      <span>+91 7392029603</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
