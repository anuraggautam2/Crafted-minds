"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, CornerDownLeft, Sparkles, Layers, Users, FolderGit2 } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: "Services" | "Team" | "Navigation" | "Action";
  subtitle: string;
  target: string;
  isAction?: boolean;
}

const searchItems: SearchItem[] = [
  {
    id: "nav-about",
    title: "About the Collective",
    category: "Navigation",
    subtitle: "Senior software engineering collective & core principles",
    target: "#about",
  },
  {
    id: "s-web",
    title: "Website Development",
    category: "Services",
    subtitle: "High-performance Next.js & React web applications",
    target: "#services",
  },
  {
    id: "s-ui",
    title: "UI/UX Design Systems",
    category: "Services",
    subtitle: "Intuitive flows, design systems, and Figma wireframes",
    target: "#services",
  },
  {
    id: "s-ecom",
    title: "E-Commerce Development",
    category: "Services",
    subtitle: "Scalable storefronts, custom checkout, and catalog systems",
    target: "#services",
  },
  {
    id: "s-maint",
    title: "Website Maintenance & Care",
    category: "Services",
    subtitle: "Ongoing security, updates, and speed optimizations",
    target: "#services",
  },
  {
    id: "nav-process",
    title: "Why Choose Us & 4-Step Process",
    category: "Navigation",
    subtitle: "Our engineering advantages and milestone-based process",
    target: "#process",
  },
  {
    id: "nav-work",
    title: "Selected Work & Case Studies",
    category: "Navigation",
    subtitle: "Apex Capital, Solace Audio, and Nexus Cloud showcases",
    target: "#work",
  },
  {
    id: "t-anurag",
    title: "Anurag Gautam",
    category: "Team",
    subtitle: "Full-Stack Developer",
    target: "#team",
  },
  {
    id: "t-aditya-s",
    title: "Aditya Singh",
    category: "Team",
    subtitle: "Backend Developer",
    target: "#team",
  },
  {
    id: "t-aditya-k",
    title: "Aditya Kushwaha",
    category: "Team",
    subtitle: "UI/UX Designer",
    target: "#team",
  },
  {
    id: "t-karunakar",
    title: "Karunakar Mishra",
    category: "Team",
    subtitle: "Frontend Developer",
    target: "#team",
  },
  {
    id: "nav-faq",
    title: "FAQ & Pricing Questions",
    category: "Navigation",
    subtitle: "Timelines, fixed-price models, and full code ownership",
    target: "#faq",
  },
  {
    id: "nav-contact",
    title: "Contact & Inquiries",
    category: "Navigation",
    subtitle: "Get in touch for new projects or collaborations",
    target: "#contact",
  },
  {
    id: "act-demo",
    title: "Book a Technical Consultation",
    category: "Action",
    subtitle: "Schedule a direct consultation with our engineering core",
    target: "demo",
    isAction: true,
  },
];

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut: Cmd/Ctrl + K to open search, Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  const handleCloseSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [searchOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ];

  const filteredSearchItems = searchQuery.trim() === ""
    ? searchItems.slice(0, 7)
    : searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSelectSearchItem = (item: SearchItem) => {
    handleCloseSearch();
    if (item.isAction) {
      onOpenDemo();
    } else {
      const element = document.querySelector(item.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "Services":
        return <Layers className="h-3.5 w-3.5 text-zinc-300" />;
      case "Team":
        return <Users className="h-3.5 w-3.5 text-zinc-300" />;
      case "Navigation":
        return <FolderGit2 className="h-3.5 w-3.5 text-zinc-300" />;
      case "Action":
        return <Sparkles className="h-3.5 w-3.5 text-white" />;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Floating Pill-Shaped Charcoal Glossy Glass Navbar */}
          <nav
            className={`relative flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 border border-white/20 ${
              scrolled
                ? "bg-gradient-to-b from-[#24242a]/95 via-[#1a1a20]/95 to-[#141418]/95 shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                : "bg-gradient-to-b from-[#222228]/90 via-[#18181d]/90 to-[#121215]/95 shadow-[0_14px_38px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.32)]"
            } backdrop-blur-2xl overflow-hidden`}
          >
            {/* Specular top reflection line (Razor 1.5px Silver Edge) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />

            {/* Strong, wide, soft white reflection across upper navbar */}
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

            {/* Desktop Controls: Search + Contact CTA */}
            <div className="hidden md:flex items-center gap-2.5 relative z-10">
              {/* Dedicated Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="group flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.06] px-3.5 py-1.5 text-xs text-white hover:text-white hover:border-white/35 hover:bg-white/[0.12] transition-all cursor-pointer shadow-sm"
                aria-label="Search CRAFTED MINDS"
              >
                <Search className="h-3.5 w-3.5 text-zinc-300 transition-colors group-hover:text-white" />
                <span className="text-[11px] font-medium text-zinc-300 group-hover:text-white">Search</span>
                <kbd className="hidden lg:inline-flex items-center rounded border border-white/18 bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-mono text-zinc-300 font-semibold">
                  ⌘K
                </kbd>
              </button>

              {/* High-Contrast Pure White Pill Button */}
              <button
                onClick={onOpenDemo}
                className="rounded-full bg-white px-5 py-1.5 text-xs font-bold text-black transition-all hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-[0.98] cursor-pointer"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-1.5 relative z-10">
              {/* Mobile Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2 text-white bg-white/[0.08] border border-white/18 hover:border-white/35 transition-all"
                aria-label="Search"
              >
                <Search className="h-3.5 w-3.5" />
              </button>

              {/* Mobile Contact Quick Button */}
              <button
                onClick={onOpenDemo}
                className="rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-black hover:bg-zinc-100"
              >
                Inquire
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full p-2 text-white hover:bg-white/[0.10] transition-colors"
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 max-w-6xl mx-auto"
              id="mobile-navigation-menu"
              role="region"
              aria-label="Mobile Navigation"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#1e1e24] p-4 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.3)] flex flex-col gap-2">
                {/* Specular top reflection */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
                />

                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/[0.10] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="pt-2 border-t border-white/12">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDemo();
                    }}
                    className="w-full rounded-xl bg-white py-2.5 text-xs font-bold text-black transition hover:bg-zinc-100"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Clean Minimal Search Overlay Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseSearch}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Glossy Charcoal Glass Search Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-gradient-to-b from-[#24242a] via-[#1a1a20] to-[#141418] p-4 sm:p-5 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.4)]"
            >
              {/* Specular top highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent"
              />

              {/* Upper soft white reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-4/5 h-28 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.35)_0%,transparent_75%)] blur-xl"
              />

              {/* Search Input Bar */}
              <div className="relative flex items-center">
                <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-zinc-300" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, team, process, case studies..."
                  className="w-full rounded-xl border border-white/18 bg-white/[0.06] py-3 pl-10 pr-10 text-sm text-white placeholder-zinc-400 outline-none transition-all focus:border-white/40 focus:bg-white/[0.10] focus:ring-1 focus:ring-white/30"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 rounded-md p-1 text-zinc-300 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <kbd className="pointer-events-none absolute right-3 rounded border border-white/18 bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                    ESC
                  </kbd>
                )}
              </div>

              {/* Quick Navigation Chips */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mr-1 font-semibold">
                  Jump to:
                </span>
                {["About", "Services", "Process", "Work", "Team", "FAQ", "Contact"].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      setSearchOpen(false);
                      const el = document.querySelector(`#${chip.toLowerCase()}`);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-md border border-white/14 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium text-zinc-200 hover:border-white/30 hover:bg-white/[0.12] hover:text-white transition-all cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Search Results List */}
              <div className="mt-2 max-h-[320px] overflow-y-auto space-y-1 pt-1 border-t border-white/[0.10]">
                {filteredSearchItems.length > 0 ? (
                  filteredSearchItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSearchItem(item)}
                      className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/[0.10] cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/16 bg-white/[0.06] transition-colors group-hover:border-white/30 group-hover:bg-white/[0.12]">
                          {getCategoryIcon(item.category)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white tracking-tight">
                              {item.title}
                            </span>
                            <span className="rounded border border-white/14 bg-white/[0.06] px-1.5 py-0.2 text-[9px] font-mono text-zinc-300 font-semibold">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-300 mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] text-zinc-200 font-medium">
                        <span>Go</span>
                        <CornerDownLeft className="h-3 w-3" />
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="py-8 text-center text-xs text-zinc-400">
                    No results found for &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Next.js&rdquo;, &ldquo;UI/UX&rdquo;, or &ldquo;Team&rdquo;.
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-3 pt-2.5 border-t border-white/[0.10] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>PRESS ESC TO CLOSE</span>
                <span className="font-semibold text-zinc-300">CRAFTED MINDS DIGITAL</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
