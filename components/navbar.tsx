"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { GlassButton } from "./ui/glass-button";

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
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
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`relative flex items-center justify-between rounded-full px-5 py-3.5 transition-all duration-300 ${
            scrolled
              ? "bg-[#09090b]/80 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          }`}
        >
          {/* Top subtle specular reflection line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* Wordmark & Brand Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            {/* Minimalist Geometric Monogram Glyph */}
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.06] backdrop-blur-md transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/[0.12] group-hover:scale-105">
              <div className="h-3.5 w-3.5 rotate-45 border-t border-l border-white/90" />
              <div className="absolute h-1.5 w-1.5 rounded-full bg-white/80" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.22em] text-white uppercase group-hover:text-zinc-200 transition-colors">
                CRAFTED MINDS
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-zinc-500 font-mono">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white rounded-full hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Highlighted Contact Button & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <GlassButton
              onClick={onOpenDemo}
              variant="primary"
              size="sm"
              className="text-xs font-semibold tracking-wider"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </GlassButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <GlassButton
              onClick={onOpenDemo}
              variant="primary"
              size="sm"
              className="text-[11px] px-3 py-1.5"
            >
              <span>CONTACT</span>
            </GlassButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-zinc-300 hover:text-white bg-white/[0.04] border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-7xl mx-auto overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0d]/95 p-5 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <GlassButton
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  <span>BOOK YOUR FREE DEMO NOW</span>
                </GlassButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
