"use client";

import React from "react";
import { FolderGit2, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface WorkPreviewProps {
  onOpenDemo: () => void;
}

export function WorkPreview({ onOpenDemo }: WorkPreviewProps) {
  return (
    <section id="work" className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.12] bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            Portfolio
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Selected Work
          </h2>
          <p className="mt-2 text-sm text-zinc-300 font-normal">
            Case studies and live project references.
          </p>
        </div>

        {/* Minimal Smoky Glossy Charcoal Card */}
        <div className="max-w-xl mx-auto">
          <GlassCard className="p-7 sm:p-9 text-center group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08] text-white mx-auto mb-4 transition-colors group-hover:border-white/40 group-hover:bg-white/[0.14]">
              <FolderGit2 className="h-5 w-5" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Case Studies in Preparation
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto font-normal">
              We are compiling case studies of recent builds. Inquire below to request specific work samples.
            </p>

            <div className="mt-6">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#24242a] px-5 py-2.5 text-xs font-semibold text-white hover:text-white hover:bg-[#2c2c34] hover:border-white/40 transition-all cursor-pointer shadow-sm"
              >
                <span>Request Project Samples</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
