"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Palette, ShoppingBag, Wrench } from "lucide-react";

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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="relative w-full max-w-4xl mx-auto mt-12 md:mt-14"
    >
      {/* Soft background light diffusion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-52 bg-white/[0.02] blur-3xl rounded-full"
      />

      {/* Main Smoky Glass Frame */}
      <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#16171e]/75 via-[#0e0f14]/80 to-[#08080c]/90 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.15)]">
        {/* Specular top reflection line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
        {/* Inner rim reflection ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.04]"
        />

        {/* Window Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/25" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <span className="ml-2 text-xs font-mono text-zinc-400">
              craftedminds.studio
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">
            Digital Engineering
          </span>
        </div>

        {/* Studio Capabilities Overview (4 Consistent Tiles) */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="h-full rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] group/tile"
              >
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 mb-2.5 transition-colors group-hover:text-white group-hover:border-white/20">
                    <Icon className="h-3.5 w-3.5" />
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
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
          <span className="text-[11px] text-zinc-500 font-mono">Core Stack:</span>
          <div className="flex flex-wrap items-center gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
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
