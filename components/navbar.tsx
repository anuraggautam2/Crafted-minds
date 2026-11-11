"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Floating Pill-Shaped Charcoal Glossy Glass Navbar */}
        <nav
          className={`relative flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 border border-white/[0.22] ${
            scrolled
              ? "bg-gradient-to-b from-[#262833]/95 via-[#181920]/95 to-[#0c0d11]/98 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.7)]"
              : "bg-gradient-to-b from-[#262833]/90 via-[#181920]/92 to-[#0c0d11]/96 shadow-[0_18px_45px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.38),inset_0_-1px_1px_rgba(0,0,0,0.7)]"
          } backdrop-blur-2xl overflow-hidden`}
        >
          {/* Specular top reflection line (Razor 1.5px Silver Edge) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />

          {/* Diffuse reflection aura */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.30)_0%,transparent_75%)] blur-lg"
          />

          {/* Inner rim refraction ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.12]"
          />

          {/* Wordmark & Brand Logo */}
          <Link
            href="#home"
            className="group relative z-10 flex items-center gap-2.5 transition-opacity hover:opacity-95"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08] p-1 backdrop-blur-sm transition-colors group-hover:border-white/40">
              <Image
                src="/brand/cm-monogram-white.svg"
                alt="Crafted Minds CM Monogram"
                width={28}
                height={28}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <span className="text-xs font-extrabold tracking-[0.2em] text-white uppercase font-sans">
              CRAFTED MINDS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold tracking-wide text-zinc-200 transition-colors hover:text-white rounded-full hover:bg-white/[0.10]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center relative z-10">
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-1.5 text-xs font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-[0.97]"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2 relative z-10">
            <a
              href="#contact"
              className="rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-black hover:bg-zinc-100 active:scale-[0.97] transition-transform"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-white hover:bg-white/[0.10] active:scale-[0.92] transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-2 max-w-6xl mx-auto"
            id="mobile-navigation-menu"
            role="region"
            aria-label="Mobile Navigation"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.22] bg-gradient-to-b from-[#262833]/95 via-[#181920]/96 to-[#0c0d11]/98 p-4 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.7)] flex flex-col gap-2">
              {/* Specular top reflection line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
              />

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/[0.10] hover:text-white active:scale-[0.98] transition-all"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 border-t border-white/12">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center w-full rounded-xl bg-white py-2.5 text-xs font-bold text-black transition hover:bg-zinc-100 active:scale-[0.98]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
