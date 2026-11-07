"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    { label: "Services", href: "#services" },
    { label: "Team", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`relative flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-[#09090b]/90 backdrop-blur-xl border border-white/10 shadow-lg"
              : "bg-white/[0.03] backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Wordmark & Brand Logo */}
          <Link href="#home" className="group flex items-center gap-2.5 transition-opacity hover:opacity-95">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] p-1 backdrop-blur-sm transition-colors group-hover:border-white/30">
              <Image
                src="/brand/cm-monogram-white.svg"
                alt="Crafted Minds CM Monogram"
                width={28}
                height={28}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              CRAFTED MINDS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-400 transition-colors hover:text-white rounded-full hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenDemo}
              className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-1.5 text-zinc-400 hover:text-white bg-white/[0.04] border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden mt-2 max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d10] p-4 backdrop-blur-xl shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-white/[0.05] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full rounded-xl bg-white py-2.5 text-xs font-semibold text-black"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
