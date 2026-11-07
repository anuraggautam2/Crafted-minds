"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface TestimonialsFAQProps {
  onOpenDemo: () => void;
}

export function TestimonialsFAQ({ onOpenDemo }: TestimonialsFAQProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const testimonials = [
    {
      quote:
        "Crafted Minds delivered our entire Next.js FinTech platform weeks ahead of schedule. The code architecture is pristine, and direct engineer access eliminated standard agency bureaucracy.",
      author: "Marcus Vance",
      role: "Founder & CEO, Apex Capital",
      company: "Apex Capital",
    },
    {
      quote:
        "Working with the Crafted Minds team felt like having an elite senior engineering squad in-house. Our storefront checkout velocity and conversions increased dramatically from day one.",
      author: "Elena Rostova",
      role: "Head of Product, Solace Audio",
      company: "Solace Audio",
    },
    {
      quote:
        "Rarely do you meet developers with such exacting taste in both system performance and tactile visual design. They are our permanent partners for high-stakes digital launches.",
      author: "David Chen",
      role: "CTO, Nexus Infrastructure",
      company: "Nexus",
    },
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Most bespoke websites and web applications are delivered within 2 to 6 weeks depending on architectural scope. We work in rapid weekly sprints with continuous staging environments and live progress updates.",
    },
    {
      question: "What technology stack do you specialize in?",
      answer:
        "We specialize in Next.js App Router, React, TypeScript, Tailwind CSS, Turbopack, and Framer Motion for the frontend, coupled with edge API endpoints, custom databases, and Shopify/Stripe infrastructure.",
    },
    {
      question: "How does your engagement and pricing model work?",
      answer:
        "We operate on transparent, milestone-based fixed-price quotes for defined builds, as well as monthly dedicated engineering retainers for continuous development, feature additions, and maintenance.",
    },
    {
      question: "Do we retain complete ownership of the code and IP?",
      answer:
        "Absolutely. You retain 100% intellectual property ownership of all source code, Figma design systems, GitHub repositories, and production deployments with zero vendor lock-in.",
    },
    {
      question: "How do we get started with CRAFTED MINDS?",
      answer:
        "Click 'Discuss Your Project' or email us directly at inquiries@craftedminds.studio. We will schedule a technical brief to review your requirements and provide a clear timeline within 48 hours.",
    },
  ];

  return (
    <section id="faq" className="relative py-28 md:py-36 overflow-hidden">
      {/* Top Specular Divider Beam & Ambient Light Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,transparent_75%)] blur-2xl"
      />

      {/* Studio Ambient Reflection Pool */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_75%)] blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Testimonials */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold flex items-center gap-2">
            <MessageSquare className="h-3.5 w-3.5 text-zinc-300" />
            <span>Client Endorsements</span>
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Trusted by Leaders Who Expect Uncompromising Quality.
          </h2>
        </div>

        {/* 3 Testimonials in Glossy Obsidian Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-28">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <GlassCard className="h-full p-6 sm:p-7 flex flex-col justify-between group">
                <div>
                  <Quote className="h-6 w-6 text-white/40 mb-4" />
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.14]">
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">
                    {t.role}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Section Header: FAQ */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold flex items-center gap-2">
            <HelpCircle className="h-3.5 w-3.5 text-zinc-300" />
            <span>Common Questions</span>
          </span>
          <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h3>
          <p className="mt-2 text-sm text-zinc-300 font-normal">
            Everything you need to know about partnering with our engineering collective.
          </p>
        </div>

        {/* FAQ Accordion in Glossy Obsidian Glass Container */}
        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/[0.22] bg-gradient-to-b from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98 backdrop-blur-2xl transition-all duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.40)] hover:border-white/40"
              >
                {/* Specular Top Line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
                />

                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-white/[0.04] cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border border-white/25 bg-white/[0.08] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4 text-white" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-200 leading-relaxed font-normal border-t border-white/[0.12] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need more details banner */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-zinc-300 font-normal">
            Have a question not listed here?{" "}
            <button
              onClick={onOpenDemo}
              className="text-white font-bold underline underline-offset-4 hover:text-zinc-200 cursor-pointer ml-1"
            >
              Ask our team directly
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
