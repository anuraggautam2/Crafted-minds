"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { HeroGlassComposition } from "./hero-glass-composition";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Dramatic Studio Overhead Light Reflection behind Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[620px] bg-[radial-gradient(ellipse_75%_450px_at_50%_0%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.03)_50%,transparent_80%)] blur-2xl opacity-90"
      />

      {/* Subtle Specular Sheen Crossing the Hero Environment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 studio-sheen-diagonal opacity-60"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Eyebrow Pill Badge - Polished Obsidian Glass */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-gradient-to-b from-[#242630]/90 to-[#101116]/95 backdrop-blur-2xl px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-white shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-zinc-100">Digital Engineering Collective</span>
          </div>
        </motion.div>

        {/* Oversized, Bold White Hero Typography with Reflective Specular Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] xl:text-[7rem] font-extrabold tracking-tight text-white leading-[0.95]">
            Ideas Crafted Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-300">
              Digital Experiences.
            </span>
          </h1>
        </motion.div>

        {/* Crisp High-Contrast Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 text-center text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          We design and build modern websites, intuitive interfaces, and dependable
          e-commerce solutions for businesses looking for clean, reliable digital execution.
        </motion.p>

        {/* Premium Black-and-White Pill Buttons with Glossy Reflections */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Pill Button: Pure White with black text & specular glow */}
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-black transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] active:scale-[0.98] cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Secondary Pill Button: Polished Obsidian Glass */}
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-gradient-to-b from-[#242630]/90 to-[#121318]/95 backdrop-blur-2xl px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/45 hover:from-[#2e303d] hover:to-[#181920] hover:shadow-[0_12px_30px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.4)] active:scale-[0.98] shadow-[0_4px_16px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)]"
          >
            <span>View Services</span>
            <ArrowDown className="h-3.5 w-3.5 text-zinc-300" />
          </a>
        </motion.div>

        {/* Large Glossy Obsidian Glass Capabilities Showcase */}
        <HeroGlassComposition />
      </div>
    </section>
  );
}
