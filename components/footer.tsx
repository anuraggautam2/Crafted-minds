"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface FooterProps {
  onOpenDemo: () => void;
}

export function Footer({ onOpenDemo }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer id="contact" className="relative border-t border-white/[0.08] bg-[#060608] pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple, Credible Contact Banner */}
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
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200 cursor-pointer"
              >
                <span>Send an Inquiry</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href="mailto:inquiries@craftedminds.studio"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-zinc-300 hover:text-white hover:bg-white/[0.05] transition"
              >
                <Mail className="h-3.5 w-3.5 text-zinc-400" />
                <span>inquiries@craftedminds.studio</span>
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Summary */}
          <div className="space-y-3">
            <Link href="#home" className="inline-flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-white/[0.05]">
                <div className="h-2.5 w-2.5 rotate-45 border-t border-l border-white" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
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
