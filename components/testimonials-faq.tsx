"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export function TestimonialsFAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Most websites and web applications are delivered within 2 to 6 weeks depending on architectural scope and requirements. We work in structured weekly milestones with clear deliverables.",
    },
    {
      question: "What technology stack do you specialize in?",
      answer:
        "We build primarily with Next.js, React, TypeScript, and Tailwind CSS for the frontend, combined with modern API routes and Shopify or Stripe for e-commerce needs.",
    },
    {
      question: "How does project pricing work?",
      answer:
        "We provide transparent, milestone-based fixed quotes for defined project scopes, as well as monthly technical retainers for continuous maintenance and updates.",
    },
    {
      question: "Who owns the code and intellectual property?",
      answer:
        "You retain 100% ownership of all source code, design files, and repository assets upon project completion with zero vendor lock-in.",
    },
    {
      question: "How do we get in touch to discuss a project?",
      answer:
        "Reach out directly via email at craftedmindsinfo@gmail.com or through WhatsApp at +91 7392029603 with a brief description of your project. We typically respond within one business day.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Top Specular Divider Beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold flex items-center gap-2">
            <HelpCircle className="h-3.5 w-3.5 text-zinc-300" />
            <span>Common Questions</span>
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
            Straightforward details on how we engage, our tech stack, and what to expect.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.22] hover:border-white/[0.45] bg-gradient-to-b from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98 backdrop-blur-2xl transition-all duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.40)]"
              >
                {/* Specular Top Line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
                />

                <button
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-all active:scale-[0.995] hover:bg-white/[0.04] cursor-pointer"
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
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal border-t border-white/[0.12] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-300 font-normal">
            Have a question not covered here?{" "}
            <a
              href="mailto:craftedmindsinfo@gmail.com"
              className="text-white font-semibold underline underline-offset-4 hover:text-zinc-200 transition-colors ml-1"
            >
              Email us directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
