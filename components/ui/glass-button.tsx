"use client";

import React from "react";
import Link from "next/link";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function GlassButton({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  className = "",
  ...props
}: GlassButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-medium tracking-wide",
    md: "px-6 py-3 text-sm font-medium tracking-wide",
    lg: "px-8 py-4 text-sm sm:text-base font-semibold tracking-wide",
  }[size];

  const variantClasses = {
    primary:
      "relative bg-white text-black hover:bg-zinc-200 border border-white/60 shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:shadow-[0_0_32px_rgba(255,255,255,0.3)] active:scale-[0.98]",
    secondary:
      "relative bg-gradient-to-b from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98 hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015] text-white border border-white/[0.22] hover:border-white/[0.45] shadow-[0_12px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.40)] active:scale-[0.98]",
    glass:
      "relative bg-gradient-to-b from-[#262833]/80 via-[#181920]/85 to-[#0c0d11]/90 hover:from-[#2e303d]/90 hover:via-[#1e2028]/95 hover:to-[#0f1015] text-zinc-100 border border-white/[0.20] hover:border-white/[0.38] shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.30)] active:scale-[0.98]",
    outline:
      "relative bg-transparent hover:bg-white/[0.04] text-zinc-300 hover:text-white border border-white/15 hover:border-white/30 active:scale-[0.98]",
  }[variant];

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 cursor-pointer select-none group text-center";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {variant !== "outline" && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"
            />
          )}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {variant !== "outline" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />
        )}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {variant !== "outline" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"
        />
      )}
      {children}
    </button>
  );
}
