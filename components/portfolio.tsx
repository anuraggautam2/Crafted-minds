"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, Mail } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export function Portfolio() {
  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
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
            Selected Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Case Studies & Project References
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
            A review of recent custom web builds, design systems, and technical architectures.
          </p>
        </motion.div>

        {/* Honest Portfolio Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <GlassCard className="p-8 sm:p-10 text-center flex flex-col items-center justify-center group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.22] bg-gradient-to-b from-[#262833]/90 to-[#121318]/95 text-white mb-5 transition-transform duration-300 group-hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              <FolderGit2 className="h-6 w-6 text-zinc-200" />
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              Case Studies in Preparation
            </h3>

            <p className="mt-3 text-sm text-zinc-300 leading-relaxed max-w-md mx-auto font-normal">
              We are currently documenting recent client builds, architecture breakdowns,
              and design deliverables for public display. If you would like to review specific
              work samples relevant to your project, reach out directly.
            </p>

            <div className="mt-8">
              <a
                href="mailto:craftedmindsinfo@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.22] bg-gradient-to-b from-[#262833] via-[#181920] to-[#0c0d11] px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:border-white/[0.45] hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015] active:scale-[0.97] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.30)]"
              >
                <Mail className="h-4 w-4 text-zinc-300" />
                <span>Request Project Samples via Email</span>
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
