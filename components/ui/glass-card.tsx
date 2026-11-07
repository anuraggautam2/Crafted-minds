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
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#14151b]/85 via-[#0b0c10]/90 to-[#040407]/96 backdrop-blur-3xl transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.22)] ${
        hoverEffect
          ? "hover:border-white/[0.24] hover:bg-gradient-to-b hover:from-[#1b1c24]/90 hover:via-[#101116]/92 hover:to-[#07070b]/98 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.32)]"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Precision Specular Top Reflection Line */}
      {specular && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-opacity duration-300 group-hover:via-white/70"
        />
      )}

      {/* Internal Rim Highlight (Simulating physical glass edge refraction) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.06] transition-all duration-300 group-hover:ring-white/[0.10]"
      />

      {/* Signature Glossy Upper Blurred White Reflection */}
      {innerGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 h-36 w-4/5 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_50%,transparent_80%)] blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-75"
        />
      )}

      {/* Relative container so children sit cleanly above diffusion */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
