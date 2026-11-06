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
      className="relative min-h-[90vh] pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Gentle ambient light diffusion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-[radial-gradient(ellipse_60%_350px_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-1 text-xs font-mono tracking-widest uppercase text-zinc-400">
            Digital Agency
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Ideas Crafted Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
              Digital Experiences.
            </span>
          </h1>
        </motion.div>

        {/* Clear, Honest Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          We design and build modern websites, intuitive interfaces, and dependable
          e-commerce solutions for businesses looking for clean, reliable digital execution.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          {/* Primary CTA */}
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-black transition-all hover:bg-zinc-200 active:scale-[0.98] shadow-sm cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            <span>View Services</span>
            <ArrowDown className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        </motion.div>

        {/* Clean Glass Capabilities Frame */}
        <HeroGlassComposition />
      </div>
    </section>
  );
}
