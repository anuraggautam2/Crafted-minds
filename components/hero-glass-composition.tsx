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
      {/* Large Visible Charcoal Glossy Glass Panel (#151515 to #242424) */}
      <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-gradient-to-b from-[#24242a] via-[#1a1a20] to-[#141418] p-5 sm:p-7 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/35">
        {/* Precision Specular Top Reflection Line (Razor 1.5px Silver Edge) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent transition-opacity duration-300 group-hover:via-white"
        />

        {/* Strong, Wide, Soft White/Silver Blurred Reflection across TOP portion (Visibly Bright) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[92%] h-60 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.18)_40%,transparent_75%)] blur-2xl opacity-95 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Secondary Curved Top Glass Reflection Band */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/[0.24] via-white/[0.07] to-transparent [mask-image:radial-gradient(ellipse_at_top,white_55%,transparent_90%)] transition-opacity duration-300 group-hover:from-white/[0.32]"
        />

        {/* Inset Rim Refraction Ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.14]"
        />

        {/* Panel Window Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.12]">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="ml-2 text-xs font-mono text-zinc-200 tracking-wider font-medium">
              craftedminds.studio
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-300 uppercase tracking-widest hidden sm:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-semibold text-zinc-200">Digital Engineering Collective</span>
          </div>
        </div>

        {/* Studio Capabilities Overview (4 Glossy Charcoal Sub-Cards) */}
        <div className="relative z-10 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/16 bg-gradient-to-b from-[#2c2c34] via-[#222228] to-[#18181e] p-4 flex flex-col justify-between transition-all duration-300 hover:border-white/35 hover:from-[#32323c] hover:via-[#26262e] hover:to-[#1c1c22] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.35)] group/tile"
              >
                {/* Mini Top Specular Highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-opacity group-hover/tile:via-white"
                />

                {/* Mini Top Soft White Reflection */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.30)_0%,transparent_75%)] blur-md"
                />

                {/* Inner Ring */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/[0.10]"
                />

                <div className="relative z-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08] text-white mb-3 transition-colors group-hover/tile:border-white/40 group-hover/tile:bg-white/[0.14]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white tracking-tight">
                    {cap.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-zinc-300 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Footer */}
        <div className="relative z-10 mt-5 pt-4 border-t border-white/[0.12] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-mono font-medium">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span>Core Production Stack:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/18 bg-white/[0.06] px-3 py-1 text-[10px] font-mono font-medium text-white backdrop-blur-md transition-colors hover:border-white/35 hover:bg-white/[0.12]"
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
