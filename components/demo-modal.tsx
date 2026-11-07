"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Mail, Send } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function DemoModal({ isOpen, onClose, defaultService }: DemoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService || "Website Development");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container: Visible Charcoal Obsidian Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-gradient-to-b from-[#24242a] via-[#1a1a20] to-[#141418] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.45)]"
          >
            {/* Top specular reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent"
            />
            {/* Upper soft white reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[92%] h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.14)_45%,transparent_75%)] blur-2xl"
            />
            {/* Inner rim reflection ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.14]"
            />
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-lg p-1.5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center relative z-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.08] border border-white/20 text-white">
                  <CheckCircle2 className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Inquiry Received
                </h3>
                <p className="mt-2 text-sm text-zinc-300 max-w-sm leading-relaxed">
                  Thank you, {name || "there"}. We have received your inquiry and will review it. Expect a response at{" "}
                  <span className="text-white font-semibold">{email}</span> within 1–2 business days.
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleReset}
                    className="rounded-full border border-white/20 bg-[#24242a] px-5 py-2 text-xs font-semibold text-white hover:bg-[#2c2c34] hover:border-white/40 transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                    Contact Us
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                    Book a Free Project Consultation
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Tell us about your requirements and we will follow up with technical recommendations.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Sharma"
                      className="w-full rounded-xl border border-white/16 bg-[#18181e] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl border border-white/16 bg-[#18181e] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-xl border border-white/16 bg-[#18181e] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-white/40"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-commerce Development">E-commerce Development</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Briefly describe your goals, timeline, or requirements..."
                      className="w-full rounded-xl border border-white/16 bg-[#18181e] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/40 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-[0.98] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href="mailto:inquiries@craftedminds.studio"
                      className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                      <span>Or email us directly at inquiries@craftedminds.studio</span>
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
