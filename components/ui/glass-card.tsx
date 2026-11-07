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
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-gradient-to-b from-[#24242a] via-[#1a1a20] to-[#141418] backdrop-blur-2xl transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.6)] ${
        hoverEffect
          ? "hover:border-white/40 hover:from-[#2a2a32] hover:via-[#1f1f26] hover:to-[#16161b] hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.55)]"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Precision Specular Top Reflection Line (Razor 1.5px Silver Edge) */}
      {specular && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent transition-opacity duration-300 group-hover:via-white"
        />
      )}

      {/* Strong, Wide, Soft White/Silver Blurred Reflection across TOP portion */}
      {innerGlow && (
        <>
          {/* Primary wide soft white diffuse reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-[92%] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.14)_45%,transparent_75%)] blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-90"
          />
          {/* Secondary curved top glass reflection band */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/[0.22] via-white/[0.06] to-transparent [mask-image:radial-gradient(ellipse_at_top,white_50%,transparent_85%)] transition-opacity duration-300 group-hover:from-white/[0.30]"
          />
        </>
      )}

      {/* Internal Rim Highlight (Simulating physical glass edge refraction) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.14] transition-all duration-300 group-hover:ring-white/[0.22]"
      />

      {/* Relative container so children sit cleanly above diffusion */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
