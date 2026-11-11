"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle Studio Overhead Light Reflection behind Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] bg-[radial-gradient(ellipse_75%_400px_at_50%_0%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.02)_50%,transparent_80%)] blur-2xl opacity-90"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Eyebrow Pill Badge - Simple & Calm */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.22] bg-gradient-to-b from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-zinc-200 shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.45)]">
            <span className="font-semibold text-zinc-100">Digital Engineering Studio</span>
          </div>
        </motion.div>

        {/* Hero Headline Typography */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-white leading-[1.02]">
            Ideas Crafted Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300">
              Digital Experiences.
            </span>
          </h1>
        </motion.div>

        {/* Clear, Honest Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          We design and build custom websites, user interfaces, and digital products
          with modern architecture, clean code, and direct communication.
        </motion.p>

        {/* Clear Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-black transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-[0.97] shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.22] bg-gradient-to-b from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/[0.45] hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015] active:scale-[0.97] shadow-[0_6px_20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.45)]"
          >
            <span>Our Services</span>
            <ArrowDown className="h-3.5 w-3.5 text-zinc-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
