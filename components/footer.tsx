"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contact" className="relative pt-24 pb-14 overflow-hidden">
      {/* Top Specular Divider Beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner in Glossy Obsidian Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-8 sm:p-12 mb-20 hover:translate-y-0" hoverEffect={false}>
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                Get In Touch
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Discuss Your Project?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
                Whether you need a new website, a custom user interface, or ongoing maintenance,
                reach out directly through email or WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* Direct Email Link */}
                <a
                  href="mailto:craftedmindsinfo@gmail.com"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] active:scale-[0.97] shadow-[0_4px_16px_rgba(255,255,255,0.2)]"
                >
                  <Mail className="h-4 w-4" />
                  <span>craftedmindsinfo@gmail.com</span>
                </a>

                {/* Direct WhatsApp Link */}
                <a
                  href="https://wa.me/917392029603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.22] bg-gradient-to-b from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white hover:border-white/[0.45] hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015] active:scale-[0.97] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.30)]"
                >
                  <Phone className="h-4 w-4 text-zinc-300" />
                  <span>+91 7392029603 (WhatsApp)</span>
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Footer Navigation Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/[0.14]"
        >
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
              Independent digital studio providing custom website development,
              UI/UX design, e-commerce solutions, and technical maintenance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Navigation
            </h3>
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
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-300">
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
                  E-Commerce Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-white mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-zinc-400" />
                <a href="mailto:craftedmindsinfo@gmail.com" className="hover:text-white transition-colors">
                  craftedmindsinfo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-zinc-400" />
                <a href="https://wa.me/917392029603" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 7392029603
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
          <div>© {currentYear} CRAFTED MINDS. All rights reserved.</div>
          <div>Built with Next.js & React</div>
        </div>
      </div>
    </footer>
  );
}
