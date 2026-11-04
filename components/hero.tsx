"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowDown, Sparkles } from "lucide-react";
import { GlassButton } from "./ui/glass-button";
import { HeroGlassComposition } from "./hero-glass-composition";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Background radial gradient highlights for depth without neon colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07)_0%,rgba(20,20,25,0.4)_45%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-white/[0.02] blur-[140px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Eyebrow / Agency Status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
            <span className="text-xs font-mono font-medium tracking-[0.18em] uppercase text-zinc-300">
              Bespoke Digital Agency
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
            <span className="text-[11px] font-mono text-zinc-400">
              CRAFTED MINDS
            </span>
          </div>
        </motion.div>

        {/* Large Bold Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-white leading-[1.08]">
            Ideas Crafted Into{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              Digital Experiences.
            </span>
          </h1>
        </motion.div>

        {/* Short Professional Agency Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          We engineer high-performance web applications, bespoke UI/UX interfaces,
          and robust e-commerce architectures tailored for modern brands that
          refuse to settle for ordinary.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA: "BOOK YOUR FREE DEMO NOW" */}
          <GlassButton
            onClick={onOpenDemo}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-semibold tracking-wider text-xs sm:text-sm px-8 py-4 uppercase"
          >
            <Calendar className="h-4 w-4" />
            <span>BOOK YOUR FREE DEMO NOW</span>
          </GlassButton>

          {/* Secondary CTA: "Explore Our Work" */}
          <GlassButton
            href="#work"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-xs sm:text-sm px-7 py-4 tracking-wide text-zinc-200"
          >
            <span>Explore Our Work</span>
            <ArrowDown className="h-4 w-4 text-zinc-400 group-hover:translate-y-0.5 transition-transform" />
          </GlassButton>
        </motion.div>

        {/* Key Agency Attributes (Strictly real principles, no fake client logos or fake stats) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-center"
        >
          {[
            { label: "Bespoke Code", desc: "No generic templates" },
            { label: "Sub-Second Latency", desc: "Optimized performance" },
            { label: "Glassmorphism UI", desc: "Precision aesthetics" },
            { label: "End-to-End Delivery", desc: "Design through launch" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3 backdrop-blur-md"
            >
              <div className="text-xs font-semibold text-white tracking-wide">
                {item.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Premium Glassmorphism Visual Composition */}
        <HeroGlassComposition />
      </div>
    </section>
  );
}
