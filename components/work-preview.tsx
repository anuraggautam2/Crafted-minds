"use client";

import React from "react";
import { FolderGit2, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface WorkPreviewProps {
  onOpenDemo: () => void;
}

export function WorkPreview({ onOpenDemo }: WorkPreviewProps) {
  return (
    <section id="work" className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
            Portfolio
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Selected Work
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Case studies and live project references.
          </p>
        </div>

        {/* Minimal Smoky Glass Card */}
        <div className="max-w-xl mx-auto">
          <GlassCard className="p-7 sm:p-9 text-center group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 mx-auto mb-3.5 transition-colors group-hover:text-white group-hover:border-white/20">
              <FolderGit2 className="h-5 w-5" />
            </div>

            <h3 className="text-base font-semibold text-white tracking-tight">
              Case Studies in Preparation
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
              We are compiling case studies of recent builds. Inquire below to request specific work samples.
            </p>

            <div className="mt-5">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer"
              >
                <span>Request Project Samples</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
