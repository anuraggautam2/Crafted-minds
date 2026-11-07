"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface FooterProps {
  onOpenDemo: () => void;
}

export function Footer({ onOpenDemo }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer id="contact" className="relative border-t border-white/[0.08] bg-[#000000] pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple, Credible Contact Banner in Glossy Obsidian Glass */}
        <GlassCard className="p-7 sm:p-10 mb-14 hover:translate-y-0" hoverEffect={false}>
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              Get In Touch
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Whether you need a new website, interface design, an e-commerce setup,
              or technical maintenance, we are ready to discuss your requirements.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Solid White Pill CTA */}
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                <span>Send an Inquiry</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              {/* Translucent Glass Pill Link */}
              <a
                href="mailto:inquiries@craftedminds.studio"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-xs text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
              >
                <Mail className="h-3.5 w-3.5 text-zinc-400" />
                <span>inquiries@craftedminds.studio</span>
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Summary */}
          <div className="space-y-3">
            <Link href="#home" className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-95">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] p-1 backdrop-blur-sm transition-colors group-hover:border-white/30">
                <Image
                  src="/brand/cm-monogram-white.svg"
                  alt="Crafted Minds Logo"
                  width={24}
                  height={24}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase font-sans">
                CRAFTED MINDS
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Digital agency providing custom website development, UI/UX design,
              e-commerce solutions, and technical maintenance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-widest uppercase text-zinc-300 mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-widest uppercase text-zinc-300 mb-3.5">
              Contact & Location
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-zinc-500" />
                <a href="mailto:inquiries@craftedminds.studio" className="hover:text-white transition-colors">
                  inquiries@craftedminds.studio
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <div>© {currentYear} CRAFTED MINDS. All rights reserved.</div>
          <div>Built with Next.js, React & Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
