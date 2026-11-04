"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Sparkles, Clock, ArrowRight } from "lucide-react";
import { GlassButton } from "./ui/glass-button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function DemoModal({ isOpen, onClose, defaultService }: DemoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(defaultService || "Website Development");
  const [timeline, setTimeline] = useState("1-3 Months");
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
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setCompany("");
    setNotes("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0d]/95 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Top specular edge reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />

            {/* Ambient subtle back glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-white/5 blur-3xl rounded-full"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/10"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/20 text-white shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Free Demo Request Confirmed
                </h3>
                <p className="mt-2 text-sm text-zinc-400 max-w-md leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name || "there"}</span>. One of our lead architects will review your project and get in touch within 24 hours with an interactive walkthrough plan.
                </p>
                <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                  <Clock className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Expect a calendar invite at {email || "your email"}</span>
                </div>
                <div className="mt-8">
                  <GlassButton onClick={handleReset} variant="secondary" size="md">
                    Return to CRAFTED MINDS
                  </GlassButton>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono uppercase tracking-widest text-zinc-300">
                    <Sparkles className="h-3 w-3 text-white" />
                    Bespoke Discovery
                  </div>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    Book Your Free Demo
                  </h2>
                  <p className="mt-1.5 text-sm text-zinc-400">
                    Discuss your project scope, architecture, and timeline with our engineering and design leads.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name <span className="text-zinc-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/30 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Work Email <span className="text-zinc-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/30 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Company or Project
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Inc."
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/30 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Primary Service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#121216] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="E-commerce Development">E-commerce Development</option>
                        <option value="Website Maintenance">Website Maintenance</option>
                        <option value="Custom Architecture">Custom Architecture</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Target Launch Window
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["< 1 Month", "1-3 Months", "Flexible"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTimeline(item)}
                          className={`rounded-xl border px-3 py-2 text-xs font-medium transition cursor-pointer ${
                            timeline === item
                              ? "border-white/40 bg-white/10 text-white"
                              : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Tell us about your vision (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Key goals, current challenges, or desired aesthetics..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-white/30 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <GlassButton
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? (
                        <span>Processing request...</span>
                      ) : (
                        <>
                          <Calendar className="h-4 w-4" />
                          <span>CONFIRM FREE DEMO RESERVATION</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </>
                      )}
                    </GlassButton>
                  </div>

                  <p className="text-center text-[11px] text-zinc-500 pt-1">
                    No obligations. 30-minute high-fidelity walkthrough with our technical architects.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
