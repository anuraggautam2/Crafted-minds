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
      "relative bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-white/30 active:scale-[0.98]",
    glass:
      "relative bg-white/[0.03] hover:bg-white/[0.08] text-zinc-100 border border-white/10 backdrop-blur-lg hover:border-white/20 active:scale-[0.98]",
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
              className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
            className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
          className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      )}
      {children}
    </button>
  );
}
