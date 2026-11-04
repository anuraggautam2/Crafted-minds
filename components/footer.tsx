"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, Sparkles, Clock } from "lucide-react";
import { GlassButton } from "./ui/glass-button";

interface FooterProps {
  onOpenDemo: () => void;
}

export function Footer({ onOpenDemo }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#060608] pt-20 pb-12 overflow-hidden">
      {/* Background subtle radial bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.015] blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section in Footer */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl mb-16 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Top specular reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono tracking-widest text-zinc-300 uppercase mb-4">
                <Sparkles className="h-3 w-3 text-white" />
                INITIATE COLLABORATION
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to craft your next <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                  digital milestone?
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
                Schedule a 30-minute discovery demo with our core architects. We will analyze your project requirements and prepare a custom technical roadmap.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <GlassButton
                onClick={onOpenDemo}
                variant="primary"
                size="lg"
                className="w-full justify-center text-xs sm:text-sm font-semibold tracking-wider uppercase py-4"
              >
                <span>BOOK YOUR FREE DEMO NOW</span>
                <ArrowUpRight className="h-4 w-4" />
              </GlassButton>
              <a
                href="mailto:inquiries@craftedminds.studio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Mail className="h-4 w-4 text-zinc-400" />
                <span>inquiries@craftedminds.studio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.08]">
          {/* Col 1 & 2: Branding & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#home" className="inline-flex items-center gap-3 group">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.06] backdrop-blur-md transition group-hover:scale-105">
                <div className="h-3.5 w-3.5 rotate-45 border-t border-l border-white/90" />
                <div className="absolute h-1.5 w-1.5 rounded-full bg-white/80" />
              </div>
              <span className="text-base font-bold tracking-[0.22em] text-white uppercase">
                CRAFTED MINDS
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              A boutique digital engineering and design agency crafting high-performance
              web platforms, minimal interfaces, and resilient digital architectures.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available for select Q2/Q3 partnerships</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Team
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  E-commerce Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Performance Auditing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Information Placeholder */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Studio Contact
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-zinc-400 mt-0.5" />
                <span className="text-zinc-300">inquiries@craftedminds.studio</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-zinc-400 mt-0.5" />
                <span>Bangalore, India • Working Globally</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-zinc-400 mt-0.5" />
                <span>Mon – Fri, 9:00 – 19:00 IST</span>
              </li>
              <li className="pt-2 flex items-center gap-2">
                {["GitHub", "LinkedIn", "X (Twitter)", "Dribbble"].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[10px] font-mono text-zinc-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} CRAFTED MINDS. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Next.js App Router</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
