"use client";

import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  specular?: boolean;
  innerGlow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  specular = true,
  innerGlow = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.10] bg-gradient-to-b from-[#16171e]/70 via-[#0e0f14]/75 to-[#08080c]/85 backdrop-blur-2xl transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] ${
        hoverEffect
          ? "hover:border-white/[0.22] hover:bg-gradient-to-b hover:from-[#1b1c24]/80 hover:via-[#111218]/85 hover:to-[#0a0a0f]/90 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.2)]"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Precision Specular Top Reflection Line */}
      {specular && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-300 group-hover:via-white/50"
        />
      )}

      {/* Internal Rim Highlight (Simulating physical glass edge refraction) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.04] transition-all duration-300 group-hover:ring-white/[0.08]"
      />

      {/* Subtle top-down atmospheric diffusion inside the glass */}
      {innerGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-36 w-3/4 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
        />
      )}

      {/* Relative container so children sit cleanly above diffusion */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
