"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Workflow, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface ProcessProps {
  onOpenDemo: () => void;
}

export function Process({ onOpenDemo }: ProcessProps) {
  const advantages = [
    {
      title: "Direct Engineer Partnership",
      highlight: "No Account Managers",
      desc: "Communicate directly with the senior developers and designers building your platform in real-time.",
    },
    {
      title: "Modern Jamstack & Edge",
      highlight: "No Bloated Monoliths",
      desc: "Architected exclusively with Next.js, React, TypeScript, and edge APIs for instant global response times.",
    },
    {
      title: "Full Code & IP Ownership",
      highlight: "Zero Lock-In",
      desc: "You retain 100% ownership of clean GitHub repositories, design tokens, and production infrastructure.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Technical Discovery",
      desc: "We analyze your project goals, define architectural scope, and plan data schemas and component trees.",
    },
    {
      step: "02",
      title: "UI/UX & Design System",
      desc: "We craft interactive Figma wireframes, responsive design tokens, and establish the visual design language.",
    },
    {
      step: "03",
      title: "Next.js Engineering",
      desc: "We execute iterative sprint cycles, building clean, type-safe components connected to production APIs.",
    },
    {
      step: "04",
      title: "Hardening & Launch",
      desc: "We run Lighthouse audits, implement SEO and analytics, configure SSL/CDN, and deploy to production.",
    },
  ];

  return (
    <section id="process" className="relative py-28 md:py-36 overflow-hidden">
      {/* Top Specular Divider Beam & Ambient Light Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,transparent_75%)] blur-2xl"
      />

      {/* Studio Ambient Reflection Pool */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_75%)] blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built for Founders and Teams Who Value Flawless Execution.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
            We operate with the agility of an internal specialized team, delivering robust digital platforms
            without corporate agency friction.
          </p>
        </div>

        {/* 3 Why Choose Us Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-24">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <GlassCard className="h-full p-6 sm:p-7 flex flex-col justify-between group">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-gradient-to-b from-[#242632] to-[#121318] px-3.5 py-1 text-[10px] font-mono font-semibold uppercase text-zinc-100 mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{adv.highlight}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {adv.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {adv.desc}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Section Sub-Header: Process */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold flex items-center gap-2">
            <Workflow className="h-3.5 w-3.5 text-zinc-300" />
            <span>Our 4-Step Process</span>
          </span>
          <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            From Initial Vision to High-Performance Launch.
          </h3>
        </div>

        {/* 4 Process Step Cards in Glossy Obsidian Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="h-full"
            >
              <GlassCard className="h-full p-6 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-white/50 group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Trigger */}
        <div className="text-center pt-6">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] active:scale-[0.98] cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
          >
            <span>Start Your Project With Us</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
