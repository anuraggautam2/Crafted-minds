"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowDown, ArrowRight, ShieldCheck, Zap, Layers, Cpu } from "lucide-react";
import { HeroGlassComposition } from "./hero-glass-composition";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient background soft light diffusion (pure luxury monochrome/charcoal) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(ellipse_60%_480px_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.01)_45%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-48 w-[500px] h-[500px] bg-zinc-800/[0.12] blur-[160px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-48 w-[550px] h-[550px] bg-zinc-700/[0.08] blur-[160px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Refined Eyebrow / Studio Status */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="group relative inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.025] px-4 py-1.5 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition hover:border-white/20 hover:bg-white/[0.04]">
            {/* Top specular micro-line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-[11px] font-mono font-medium tracking-[0.22em] uppercase text-zinc-300">
              Bespoke Digital Agency
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
              CRAFTED MINDS
            </span>
          </div>
        </motion.div>

        {/* Refined Bold Headline with Editorial Glass Aesthetics */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-[-0.035em] text-white leading-[1.04]">
            Ideas Crafted Into{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
                Digital Experiences.
              </span>
              {/* Soft underlying specular light diffusion */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-2 inset-y-0 blur-2xl bg-white/[0.06] -z-10 select-none"
              />
            </span>
          </h1>
        </motion.div>

        {/* Short Professional Agency Description with Generous Spacing */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-center text-base sm:text-lg md:text-[1.125rem] text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed tracking-[-0.01em]"
        >
          We engineer high-performance web applications, bespoke UI/UX interfaces,
          and robust e-commerce architectures tailored for modern brands that
          refuse to settle for ordinary.
        </motion.p>

        {/* Action Buttons: High-Impact Glass Primary & Subtle Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Prominent Primary CTA: "BOOK YOUR FREE DEMO NOW" with Luxury Light & Glass Treatment */}
          <button
            onClick={onOpenDemo}
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-black transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_35px_rgba(255,255,255,0.22),0_12px_36px_rgba(0,0,0,0.8)] cursor-pointer"
          >
            {/* Specular top flare line */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
            />
            {/* Soft inner perimeter highlight */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-white/50"
            />
            <Calendar className="h-4 w-4 text-black transition-transform group-hover:scale-110" />
            <span>BOOK YOUR FREE DEMO NOW</span>
            <ArrowRight className="h-4 w-4 text-black/70 transition-transform group-hover:translate-x-1 group-hover:text-black" />
          </button>

          {/* Subtle Secondary CTA: "Explore Our Work" */}
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-xs sm:text-sm font-medium tracking-wide text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
          >
            <span>Explore Our Work</span>
            <ArrowDown className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-zinc-300" />
          </a>
        </motion.div>

        {/* Refined Architectural Glass Ribbon (Replaces generic feature boxes) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-full border border-white/10 bg-white/[0.02] p-2.5 sm:p-2 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            {/* Top specular subtle edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-0 sm:divide-x sm:divide-white/10">
              {[
                {
                  label: "Bespoke Code",
                  sub: "Zero templates",
                  icon: Cpu,
                },
                {
                  label: "Sub-Second Latency",
                  sub: "<0.4s edge render",
                  icon: Zap,
                },
                {
                  label: "Optical Precision",
                  sub: "Pure glassmorphism",
                  icon: Layers,
                },
                {
                  label: "Direct Lead Access",
                  sub: "Concept to launch",
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-1.5 transition-colors group/item"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 group-hover/item:text-white group-hover/item:border-white/20 transition-colors">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-zinc-200 tracking-tight truncate group-hover/item:text-white transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-500 truncate">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Premium Glassmorphism Visual Composition */}
        <HeroGlassComposition />
      </div>
    </section>
  );
}
