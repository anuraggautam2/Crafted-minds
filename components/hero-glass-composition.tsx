"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Palette, ShoppingBag, Wrench, ShieldCheck, Zap } from "lucide-react";

export function HeroGlassComposition() {
  const capabilities = [
    {
      icon: Globe,
      title: "Websites",
      desc: "Fast, responsive web applications engineered with Next.js.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Intuitive user flows, design systems, and Figma prototypes.",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      desc: "Storefronts with seamless catalog browsing and secure checkout.",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      desc: "Regular updates, performance audits, and technical support.",
    },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-full max-w-4xl mx-auto mt-14 md:mt-16"
    >
      {/* Background celestial ambient light behind panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-4/5 h-64 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] blur-3xl rounded-full"
      />

      {/* Large Charcoal-Black Glossy Glass Panel */}
      <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.13] bg-gradient-to-b from-[#14151b]/90 via-[#0b0c10]/92 to-[#040407]/97 p-5 sm:p-7 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.28)] transition-all duration-300 hover:border-white/[0.22]">
        {/* Crisp 1px Top Specular Reflection Edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-opacity duration-300 group-hover:via-white/70"
        />

        {/* Strong, Soft, Blurred White Reflection Near Upper Edge (Signature Glossy Finish) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-4/5 h-52 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_45%,transparent_75%)] blur-2xl opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Inset Rim Refraction Ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.08]"
        />

        {/* Panel Window Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/30" />
            <div className="h-2 w-2 rounded-full bg-white/12" />
            <div className="h-2 w-2 rounded-full bg-white/12" />
            <span className="ml-2 text-xs font-mono text-zinc-300 tracking-wider">
              craftedminds.studio
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest hidden sm:flex">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span>Digital Engineering Collective</span>
          </div>
        </div>

        {/* Studio Capabilities Overview (4 Glossy Obsidian Sub-panels) */}
        <div className="relative z-10 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-4 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] group/tile"
              >
                {/* Mini Top Specular Highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-opacity group-hover/tile:via-white/50"
                />

                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 bg-white/[0.04] text-zinc-300 mb-3 transition-colors group-hover/tile:text-white group-hover/tile:border-white/25 group-hover/tile:bg-white/[0.08]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-semibold text-white tracking-tight">
                    {cap.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-zinc-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Footer */}
        <div className="relative z-10 mt-5 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
            <Zap className="h-3 w-3 text-amber-400" />
            <span>Core Production Stack:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.10] bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-zinc-300 backdrop-blur-md transition-colors hover:border-white/25 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
