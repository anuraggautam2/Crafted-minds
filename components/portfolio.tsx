"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Laptop, Sparkles, TrendingUp } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface PortfolioProps {
  onOpenDemo: () => void;
}

export function Portfolio({ onOpenDemo }: PortfolioProps) {
  const projects = [
    {
      id: "01",
      title: "Apex Capital",
      category: "FinTech Platform",
      url: "apexcapital.app",
      description:
        "High-performance asset monitoring platform engineered with Next.js, real-time data feeds, and an obsidian design system.",
      metrics: "99.8 Lighthouse • < 0.6s FCP • 42% Conversion Lift",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
      color: "from-blue-500/10",
    },
    {
      id: "02",
      title: "Solace Audio",
      category: "E-Commerce Experience",
      url: "solace-audio.io",
      description:
        "Luxury direct-to-consumer storefront featuring seamless catalog filtering, custom checkout flows, and 3D visualizers.",
      metrics: "3.2x Checkout Velocity • 100% Mobile Optimized • Zero CLS",
      tags: ["Next.js", "Shopify API", "Stripe", "Framer Motion"],
      color: "from-zinc-400/10",
    },
    {
      id: "03",
      title: "Nexus Cloud",
      category: "Developer SaaS Hub",
      url: "nexuscloud.dev",
      description:
        "Technical documentation engine and marketing suite built for developer tool adoption with zero-latency full-text search.",
      metrics: "10k+ Daily Readers • Instant Navigation • Full Dark Mode",
      tags: ["Next.js App Router", "MDX", "Tailwind", "Search"],
      color: "from-emerald-500/10",
    },
  ];

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden bg-[#000000]">
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
            Selected Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Digital Platforms Built to Lead Their Markets.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            A cross-section of bespoke web applications, high-converting e-commerce storefronts, and modern
            digital interfaces built for discerning clients.
          </p>
        </div>

        {/* 3 Project Showcases in Glossy Obsidian Panels */}
        <div className="space-y-8 mb-16">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-9 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Category & ID */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono font-bold text-white/50">
                          {proj.id}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                          {proj.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {proj.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                        {proj.description}
                      </p>

                      {/* Impact Metrics Pill */}
                      <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/[0.05] px-3.5 py-2 text-xs font-mono text-zinc-200">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                        <span>{proj.metrics}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills & Action Link */}
                    <div className="mt-8 pt-5 border-t border-white/[0.12] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/18 bg-white/[0.06] px-3 py-1 text-[10px] font-mono font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={onOpenDemo}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-zinc-300 transition-colors cursor-pointer group-hover:translate-x-1"
                      >
                        <span>Request Full Case Study</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Glossy Digital Screen Mockup */}
                  <div className="lg:col-span-5">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 bg-gradient-to-b from-[#2a2a32] via-[#1c1c22] to-[#121216] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                      {/* Screen Specular Edge */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
                      />
                      {/* Screen Header Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.12]">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-white/40" />
                          <div className="h-2 w-2 rounded-full bg-white/20" />
                          <div className="h-2 w-2 rounded-full bg-white/20" />
                          <span className="ml-2 text-[10px] font-mono text-zinc-300 font-medium">
                            {proj.url}
                          </span>
                        </div>
                        <Laptop className="h-3.5 w-3.5 text-zinc-400" />
                      </div>

                      {/* Screen Body Simulation */}
                      <div className="mt-4 p-4 rounded-lg bg-[#000000] border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-20 rounded bg-white/20" />
                          <div className="h-3 w-12 rounded-full bg-emerald-400/30" />
                        </div>
                        <div className="h-8 w-3/4 rounded bg-white/15" />
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <div className="h-12 rounded bg-white/10" />
                          <div className="h-12 rounded bg-white/10" />
                          <div className="h-12 rounded bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Inquire for Custom Work */}
        <div className="text-center pt-4">
          <p className="text-sm text-zinc-400 font-normal mb-4">
            Need a similar bespoke platform engineered for your business?
          </p>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>Discuss Custom Build</span>
          </button>
        </div>
      </div>
    </section>
  );
}
