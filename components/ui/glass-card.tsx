"use client";

import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  specular?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  specular = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0c0c10]/75 backdrop-blur-2xl border border-white/[0.08] transition-all duration-300 ${
        hoverEffect
          ? "hover:bg-[#121217]/85 hover:border-white/[0.18] hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(0,0,0,0.6)]"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Soft specular reflection line on top edge */}
      {specular && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />
      )}
      {children}
    </div>
  );
}
