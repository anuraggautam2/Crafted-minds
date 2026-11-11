"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, MessageSquare } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export function About() {
  const principles = [
    {
      icon: MessageSquare,
      title: "Direct Collaboration",
      desc: "Work directly with the developers and designer building your project, ensuring clear alignment and fast feedback.",
    },
    {
      icon: Code2,
      title: "Modern Architecture",
      desc: "Websites and applications built with Next.js, React, and TypeScript for stability, responsiveness, and clean code.",
    },
    {
      icon: Palette,
      title: "Thoughtful Design",
      desc: "Carefully designed user interfaces and layouts crafted in Figma, focused on clarity and ease of use.",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Top Specular Divider Beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            About Crafted Minds
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            An Independent Engineering & Design Studio.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
            We are a focused group of engineers and designers who take personal ownership
            of each project from initial concept to deployment.
          </p>
        </motion.div>

        {/* 3 Core Pillars in Glossy Obsidian Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <GlassCard className="h-full p-6 sm:p-7 flex flex-col justify-between group active:scale-[0.99] transition-transform">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.22] bg-gradient-to-b from-[#262833]/90 to-[#121318]/95 text-white mb-5 transition-all duration-300 group-hover:scale-105 group-hover:border-white/45 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
