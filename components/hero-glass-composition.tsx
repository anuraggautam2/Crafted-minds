"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  Zap,
  Activity,
  Code2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export function HeroGlassComposition() {
  const [activeTab, setActiveTab] = useState<"interface" | "performance" | "stack">("interface");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-14 lg:mt-18 perspective-[1200px]">
      {/* Ambient background soft light blooms for realistic glass refraction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[85%] max-w-2xl h-[420px] bg-white/[0.035] blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-16 w-72 h-72 bg-zinc-800/[0.1] blur-[100px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-16 w-72 h-72 bg-zinc-600/[0.06] blur-[100px] rounded-full"
      />

      {/* Floating Glass Pill Top Left */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:flex absolute -top-5 left-6 z-20 items-center gap-2.5 rounded-full border border-white/15 bg-[#0c0c0f]/80 px-4 py-2 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-xs font-mono font-medium tracking-wider text-zinc-300">
          SPRINT READY • SELECT SLOTS OPEN
        </span>
      </motion.div>

      {/* Floating Glass Metric Card Top Right with Live Sparkline */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden sm:flex absolute -top-8 right-6 z-20 flex-col gap-1.5 rounded-2xl border border-white/15 bg-[#0d0d12]/85 px-4 py-3 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
      >
        {/* Top edge highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-zinc-300" />
            <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400">
              Core Web Vitals
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">OPTIMAL</span>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xl font-bold tracking-tight text-white font-mono">
            99.8%
          </span>
          {/* Subtle SVG sparkline */}
          <svg className="w-16 h-4 text-emerald-400/80 stroke-current fill-none stroke-[1.5]" viewBox="0 0 64 16">
            <path d="M0 12 L12 10 L24 13 L36 6 L48 8 L64 2" />
          </svg>
        </div>
      </motion.div>

      {/* Main Glass Console / Architectural Composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#09090c]/80 p-4 sm:p-6 lg:p-8 backdrop-blur-2xl shadow-[0_32px_100px_rgba(0,0,0,0.85)]"
      >
        {/* Specular top highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Console Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* Window Controls (Monochrome Glass Dots) */}
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-white/30 border border-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/15 border border-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/15 border border-white/10" />
            </div>
            <div className="h-3 w-[1px] bg-white/10 ml-1 hidden sm:block" />
            <span className="text-xs font-mono text-zinc-400 tracking-wide">
              crafted-minds://matrix-system.app
            </span>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md">
            {(
              [
                { id: "interface", label: "Experience Matrix", icon: Layers },
                { id: "performance", label: "Telemetry", icon: Zap },
                { id: "stack", label: "Engineering", icon: Code2 },
              ] as const
            ).map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/15 text-white border border-white/20 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {/* Tab 1: Experience Matrix */}
          {activeTab === "interface" && (
            <motion.div
              key="interface"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Panel 1: Architectural Interfaces */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.04]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      01 // INTERFACE
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white tracking-tight">
                    Frosted Aesthetics
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Deep charcoal foundations, optical glass refraction, and sub-pixel micro-alignments that feel tactile and expensive.
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-zinc-300">
                    <span>Fluid design tokens</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                  </div>
                </div>

                {/* Panel 2: Code Architecture */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.04]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      02 // CODE
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white tracking-tight">
                    Next.js App Engine
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Clean server components, predictive prefetching, and zero unnecessary script weight for instantaneous navigation.
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-zinc-300">
                    <span>TypeScript typed routes</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                  </div>
                </div>

                {/* Panel 3: Motion Orchestration */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.04]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white">
                      <Activity className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      03 // MOTION
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white tracking-tight">
                    Micro-Interactions
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Silky 60fps spring dynamics powered by Framer Motion, reacting to user attention with natural physics.
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-zinc-300">
                    <span>Adaptive physics curves</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                  </div>
                </div>
              </div>

              {/* Status Telemetry Strip */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-4 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white/70" />
                  <span className="text-xs font-mono text-zinc-300">
                    ARCHITECTURE STATUS: <span className="text-white font-semibold">ENTERPRISE GRADE</span>
                  </span>
                </div>
                <div className="flex items-center gap-6 text-xs text-zinc-400 font-mono">
                  <div>RESPONSIVE: <span className="text-white">100%</span></div>
                  <div>ACCESSIBILITY: <span className="text-white">WCAG 2.1 AA</span></div>
                  <div>DEPENDENCIES: <span className="text-white">ZERO BLOAT</span></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Telemetry */}
          {activeTab === "performance" && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-4"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "First Contentful Paint", value: "0.38s", note: "Top 1% Tier" },
                  { label: "Interaction to Next Paint", value: "<14ms", note: "Zero Stutter" },
                  { label: "Cumulative Layout Shift", value: "0.000", note: "Rock Solid" },
                  { label: "Lighthouse Score", value: "100", note: "All Categories" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-xl"
                  >
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      {metric.label}
                    </span>
                    <div className="text-2xl font-bold tracking-tight text-white font-mono">
                      {metric.value}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 mt-1 inline-block">
                      ● {metric.note}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-semibold text-white">
                    Deterministic Speed Optimization
                  </h5>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Every production deployment undergoes Turbopack edge compilation, code splitting, and asset minification.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono bg-white/[0.05] border border-white/10 px-3.5 py-2 rounded-xl text-zinc-300">
                  <ShieldCheck className="h-4 w-4 text-white" />
                  <span>Sub-Millisecond TTFB Target</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Engineering Stack */}
          {activeTab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { name: "Next.js 16", desc: "Turbopack App Router", tag: "Framework" },
                  { name: "TypeScript", desc: "Strict Type Safety", tag: "Language" },
                  { name: "Tailwind CSS v4", desc: "Modern CSS Engine", tag: "Styling" },
                  { name: "Framer Motion", desc: "Spring Physics Engine", tag: "Animation" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {tech.tag}
                      </span>
                      <CheckCircle className="h-3.5 w-3.5 text-zinc-400" />
                    </div>
                    <div className="text-base font-semibold text-white">{tech.name}</div>
                    <p className="text-xs text-zinc-400 mt-1">{tech.desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 font-mono text-xs text-zinc-300 backdrop-blur-xl overflow-x-auto">
                <div className="text-zinc-500 mb-1">{"// Production Grade Architectural Principle"}</div>
                <div className="text-zinc-300">
                  const CRAFTED_STANDARDS = {"{"} modularity: true, latencyThresholdMs: 80, visualPerfection: 1.0 {"}"};
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Glass Pill Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden md:flex absolute -bottom-5 right-10 z-20 items-center gap-2 rounded-full border border-white/15 bg-[#0b0b0e]/85 px-4 py-2 backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
        <span className="text-xs font-mono text-zinc-300">
          Optical Blur: 24px • Pure Monochromatic
        </span>
      </motion.div>
    </div>
  );
}
