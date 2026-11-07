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
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.22] bg-gradient-to-b from-[#262833]/90 via-[#181920]/92 to-[#0c0d11]/96 backdrop-blur-2xl transition-all duration-300 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.7)] ${
        hoverEffect
          ? "hover:border-white/[0.45] hover:from-[#2e303d]/94 hover:via-[#1e2028]/95 hover:to-[#0f1015]/98 hover:-translate-y-1.5 hover:shadow-[0_35px_80px_rgba(0,0,0,0.98),inset_0_1px_2px_rgba(255,255,255,0.60)]"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Precision Specular Top Reflection Line (Razor 1.5px Silver Edge) */}
      {specular && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent transition-opacity duration-300 group-hover:via-white"
        />
      )}

      {/* Strong, Wide, Soft White/Silver Blurred Reflection across TOP portion (Visibly Bright) */}
      {innerGlow && (
        <>
          {/* Primary wide soft white diffuse reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-52 w-[94%] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.16)_45%,transparent_75%)] blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-95"
          />
          {/* Secondary curved top glass reflection band */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.24] via-white/[0.07] to-transparent [mask-image:radial-gradient(ellipse_at_top,white_55%,transparent_90%)] transition-opacity duration-300 group-hover:from-white/[0.34]"
          />
        </>
      )}

      {/* Diagonal Obsidian Glass Light Sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Internal Rim Highlight (Simulating physical glass edge refraction) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.16] transition-all duration-300 group-hover:ring-white/[0.28]"
      />

      {/* Relative container so children sit cleanly above diffusion */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
