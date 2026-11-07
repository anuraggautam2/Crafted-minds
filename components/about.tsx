"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface AboutProps {
  onOpenDemo: () => void;
}

export function About({ onOpenDemo }: AboutProps) {
  const principles = [
    {
      icon: Code2,
      title: "Architectural Purity",
      desc: "Clean Next.js App Router architecture, strict TypeScript typing, and modular code with zero bloat.",
    },
    {
      icon: Sparkles,
      title: "Tactile Interaction",
      desc: "Pixel-accurate Figma prototypes translated into fluid, high-converting digital interfaces.",
    },
    {
      icon: Zap,
      title: "Extreme Velocity",
      desc: "Rapid delivery with direct engineer collaboration—no account managers or communication bottlenecks.",
    },
    {
      icon: Shield,
      title: "Production Hardened",
      desc: "Sub-second load speeds, 99+ Core Web Vitals, enterprise SEO, and resilient reliability.",
    },
  ];

  const metrics = [
    { label: "Direct Engineer Access", value: "100%" },
    { label: "Target Load Time", value: "< 0.8s" },
    { label: "Core Web Vitals", value: "99+" },
    { label: "Core Specialists", value: "4" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#000000]">
      {/* Top Specular Divider Beam & Ambient Light Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22)_0%,transparent_75%)] blur-2xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            About The Collective
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineering Digital Experiences with Architectural Precision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Traditional agencies hand your vision down to junior contractors behind layers of account
            management. At CRAFTED MINDS, you work directly with seasoned specialists who write the code,
            design the systems, and take personal responsibility for every detail.
          </p>
        </div>

        {/* 4 Core Pillars in Glossy Charcoal Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="h-full"
              >
                <GlassCard className="h-full p-6 flex flex-col justify-between group">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08] text-white mb-4 transition-colors group-hover:border-white/40 group-hover:bg-white/[0.14]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Full-Width Metrics Showcase in Glossy Obsidian Glass */}
        <GlassCard className="p-6 sm:p-8 hover:translate-y-0" hoverEffect={false}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {metrics.map((m) => (
              <div key={m.label} className="p-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {m.value}
                </div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.12] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-zinc-300 font-normal text-center sm:text-left">
              Ready to collaborate directly with our engineering core?
            </span>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] cursor-pointer"
            >
              <span>Schedule a Technical Brief</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
