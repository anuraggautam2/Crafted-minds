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
      {/* Upper atmospheric celestial glow behind hero headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] bg-[radial-gradient(ellipse_70%_400px_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.015)_45%,transparent_75%)]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Eyebrow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] backdrop-blur-xl px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-zinc-300 shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Digital Agency</span>
          </div>
        </motion.div>

        {/* Oversized, Bold White Hero Typography with tight leading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[6.75rem] font-bold tracking-tight text-white leading-[0.96]">
            Ideas Crafted Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
              Digital Experiences.
            </span>
          </h1>
        </motion.div>

        {/* Concise, Sophisticated Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 text-center text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          We design and build modern websites, intuitive interfaces, and dependable
          e-commerce solutions for businesses looking for clean, reliable digital execution.
        </motion.p>

        {/* Premium Black-and-White Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          {/* Primary Pill Button: Pure White with black text & specular glow */}
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] active:scale-[0.98] cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Secondary Pill Button: Translucent Obsidian Glass */}
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.035] backdrop-blur-2xl px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            <span>View Services</span>
            <ArrowDown className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        </motion.div>

        {/* Large Glossy Charcoal-Black Glass Capabilities Panel */}
        <HeroGlassComposition />
      </div>
    </section>
  );
}
