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
      className={`relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] transition-all duration-300 ${
        hoverEffect
          ? "hover:bg-white/[0.05] hover:border-white/[0.18] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Specular highlight on top edge */}
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
