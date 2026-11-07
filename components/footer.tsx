"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface FooterProps {
  onOpenDemo: () => void;
}

export function Footer({ onOpenDemo }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer id="contact" className="relative pt-28 pb-14 overflow-hidden">
      {/* Top Specular Divider Beam & Ambient Light Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,transparent_75%)] blur-2xl"
      />

      {/* Upward Ambient Floor Reflection Arch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.14)_0%,rgba(180,195,215,0.03)_50%,transparent_80%)] blur-3xl opacity-85"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High-Impact Contact Banner in Glossy Obsidian Glass */}
        <GlassCard className="p-8 sm:p-12 mb-20 hover:translate-y-0" hoverEffect={false}>
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Craft Your Next Digital Experience?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              Whether you need a full platform build, a high-converting interface design, or continuous
              growth engineering, we are ready to discuss your architectural roadmap.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Solid White Pill CTA with Specular Glow */}
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
              >
                <span>Book a Technical Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Polished Obsidian Glass Pill Link */}
              <a
                href="mailto:inquiries@craftedminds.studio"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-gradient-to-b from-[#242630]/90 to-[#121318]/95 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white hover:text-white hover:border-white/45 hover:from-[#2e303d] hover:to-[#181920] hover:shadow-[0_10px_25px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.25)]"
              >
                <Mail className="h-4 w-4 text-zinc-300" />
                <span>inquiries@craftedminds.studio</span>
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/[0.14]">
          {/* Brand & Summary */}
          <div className="space-y-4 md:col-span-1">
            <Link href="#home" className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-95">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 bg-white/[0.08] p-1 backdrop-blur-sm transition-colors group-hover:border-white/45">
                <Image
                  src="/brand/cm-monogram-white.svg"
                  alt="Crafted Minds Logo"
                  width={24}
                  height={24}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-extrabold tracking-[0.2em] text-white uppercase font-sans">
                CRAFTED MINDS
              </span>
            </Link>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Digital agency providing custom website development, UI/UX design,
              e-commerce solutions, and technical maintenance.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1 text-[10px] font-mono text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process & Advantages
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Portfolio Showcases
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Engineering Core
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Design Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  E-Commerce Storefronts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Technical Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Studio & Connect
            </h4>
            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-zinc-400" />
                <a href="mailto:inquiries@craftedminds.studio" className="hover:text-white transition-colors">
                  inquiries@craftedminds.studio
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
                <span>Senior Engineers Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
          <div>© {currentYear} CRAFTED MINDS. All rights reserved.</div>
          <div>Architected with Next.js, React & Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
