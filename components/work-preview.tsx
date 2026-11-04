"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { GlassButton } from "./ui/glass-button";

type FilterType = "all" | "engineering" | "commerce" | "systems";

interface WorkPreviewProps {
  onOpenDemo: () => void;
}

export function WorkPreview({ onOpenDemo }: WorkPreviewProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  const projects = [
    {
      id: "aetheria",
      title: "Aetheria Platform",
      tagline: "High-Performance Financial Intelligence & Portfolio Engine",
      category: "engineering",
      categoryLabel: "Full-Stack Web App",
      stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Real-Time Telemetry"],
      metrics: {
        latency: "<24ms",
        accessibility: "100%",
        architecture: "Server Components",
      },
      description:
        "An enterprise-tier portfolio management interface featuring real-time market data streaming, customizable frosted glass widgets, and instant sub-page navigation.",
    },
    {
      id: "kroma",
      title: "Kroma Studio",
      tagline: "Spatial Architecture & Industrial Design Archive",
      category: "systems",
      categoryLabel: "UI/UX & Brand System",
      stack: ["Design System", "Framer Motion", "Typography System", "Responsive Grid"],
      metrics: {
        speed: "0.38s FCP",
        interaction: "60 FPS Springs",
        colorway: "Obsidian / Silver",
      },
      description:
        "A minimalist digital flagship showcasing physical architecture. Engineered with fluid micro-interactions, subtle glass overlays, and uncompromising editorial typography.",
    },
    {
      id: "vanguard",
      title: "Vanguard Commerce",
      tagline: "Direct-to-Consumer Headless Horology Flagship",
      category: "commerce",
      categoryLabel: "E-commerce Architecture",
      stack: ["Headless Commerce", "Stripe API", "Edge Caching", "Tailwind CSS"],
      metrics: {
        conversion: "Zero Checkout Friction",
        caching: "Edge Distributed",
        vitals: "99+ Mobile",
      },
      description:
        "A luxury e-commerce experience designed for discerning horology enthusiasts. Features instantaneous product filtering, edge-rendered product detail modals, and seamless checkout.",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-white/[0.015] blur-[180px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono tracking-widest text-zinc-400 uppercase">
              <Sparkles className="h-3 w-3 text-zinc-300" />
              PORTFOLIO & ARCHITECTURAL CASE STUDIES
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Selected Works & <br className="hidden sm:block" />
              <span className="text-zinc-400">Digital Artifacts.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            A cross-section of bespoke web applications, design systems, and
            commerce engines built with precision craftsmanship.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {(
            [
              { id: "all", label: "All Releases" },
              { id: "engineering", label: "Web Applications" },
              { id: "systems", label: "UI/UX & Systems" },
              { id: "commerce", label: "E-Commerce" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                filter === item.id
                  ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full p-6 sm:p-8 flex flex-col justify-between group">
                <div>
                  {/* Top Category Badge & Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-mono tracking-wider text-zinc-300">
                      {project.categoryLabel}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/[0.08] transition-all">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-zinc-400">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Matrix */}
                  <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
                    {Object.entries(project.metrics).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[10px] font-mono uppercase text-zinc-500">
                          {key}
                        </div>
                        <div className="text-xs font-semibold text-white mt-0.5 truncate">
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack Chips & Action */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <GlassButton
                    onClick={onOpenDemo}
                    variant="glass"
                    size="sm"
                    className="w-full justify-center text-xs py-2.5"
                  >
                    <span>Request Live Architecture Demo</span>
                  </GlassButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Work Process / Philosophy Banner */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              THE CRAFTED MINDS METHODOLOGY
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Every digital interface begins with architectural intent.
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              We eliminate technical debt before writing the first line of code. By combining strict modular engineering in Next.js with meticulous glassmorphic design systems, your digital presence remains fast, resilient, and visually timeless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
