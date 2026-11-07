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
    id: "s-web",
    title: "Website Development",
    category: "Services",
    subtitle: "High-performance Next.js & React web applications",
    target: "#services",
  },
  {
    id: "s-ui",
    title: "UI/UX Design",
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
    title: "Website Maintenance",
    category: "Services",
    subtitle: "Ongoing security, updates, and speed optimizations",
    target: "#services",
  },
  {
    id: "t-anurag",
    title: "Anurag Gautam",
    category: "Team",
    subtitle: "Full-Stack Developer",
    target: "#about",
  },
  {
    id: "t-aditya-s",
    title: "Aditya Singh",
    category: "Team",
    subtitle: "Backend Developer",
    target: "#about",
  },
  {
    id: "t-aditya-k",
    title: "Aditya Kushwaha",
    category: "Team",
    subtitle: "UI/UX Designer",
    target: "#about",
  },
  {
    id: "t-karunakar",
    title: "Karunakar Mishra",
    category: "Team",
    subtitle: "Frontend Developer",
    target: "#about",
  },
  {
    id: "nav-work",
    title: "Selected Work & Case Studies",
    category: "Navigation",
    subtitle: "Explore agency projects and development portfolio",
    target: "#work",
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
    title: "Book a Free Project Demo",
    category: "Action",
    subtitle: "Schedule a direct consultation with the engineering team",
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
    { label: "Services", href: "#services" },
    { label: "Team", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const filteredSearchItems = searchQuery.trim() === ""
    ? searchItems.slice(0, 6)
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
        return <Layers className="h-3.5 w-3.5 text-zinc-400" />;
      case "Team":
        return <Users className="h-3.5 w-3.5 text-zinc-400" />;
      case "Navigation":
        return <FolderGit2 className="h-3.5 w-3.5 text-zinc-400" />;
      case "Action":
        return <Sparkles className="h-3.5 w-3.5 text-white" />;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Floating Premium Glass Navbar */}
          <nav
            className={`relative flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 ${
              scrolled
                ? "bg-gradient-to-b from-[#13141a]/90 via-[#0e0f14]/92 to-[#08080c]/95 border-white/[0.14] shadow-[0_16px_45px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)]"
                : "bg-gradient-to-b from-[#16171e]/75 via-[#0e0f14]/80 to-[#08080c]/85 border-white/[0.10] shadow-[0_10px_35px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)]"
            } backdrop-blur-2xl border`}
          >
            {/* Specular top reflection line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />

            {/* Inner rim refraction ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.04]"
            />

            {/* Wordmark & Brand Logo */}
            <Link
              href="#home"
              className="group relative z-10 flex items-center gap-2.5 transition-opacity hover:opacity-95"
            >
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
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase font-sans">
                CRAFTED MINDS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-300 transition-colors hover:text-white rounded-full hover:bg-white/[0.06]"
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
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all cursor-pointer shadow-sm"
                aria-label="Search CRAFTED MINDS"
              >
                <Search className="h-3.5 w-3.5 text-zinc-400 transition-colors group-hover:text-white" />
                <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300">Search</span>
                <kbd className="hidden lg:inline-flex items-center rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[9px] font-mono text-zinc-400">
                  ⌘K
                </kbd>
              </button>

              {/* Get in Touch CTA */}
              <button
                onClick={onOpenDemo}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-all hover:bg-zinc-200 active:scale-[0.98] shadow-[0_2px_10px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-1.5 relative z-10">
              {/* Mobile Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2 text-zinc-300 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
                aria-label="Search"
              >
                <Search className="h-3.5 w-3.5" />
              </button>

              {/* Mobile Contact Quick Button */}
              <button
                onClick={onOpenDemo}
                className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black"
              >
                Contact
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full p-1.5 text-zinc-400 hover:text-white bg-white/[0.04] border border-white/10 transition-all"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Glass Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="md:hidden mt-2 max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#14151c]/95 via-[#0e0f14]/95 to-[#08080c]/98 p-4 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex flex-col space-y-1">
                {/* Mobile Search Trigger in Menu */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-zinc-300 mb-2"
                >
                  <span className="flex items-center gap-2">
                    <Search className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Search sections & capabilities...</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">⌘K</span>
                </button>

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
                    className="w-full rounded-xl bg-white py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200"
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
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Smoky Glass Search Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#14151c]/95 via-[#0e0f14]/95 to-[#08080c]/98 p-4 sm:p-5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.18)]"
            >
              {/* Specular top highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />

              {/* Search Input Bar */}
              <div className="relative flex items-center">
                <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-zinc-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, team, case studies..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-10 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-white/30 focus:bg-white/[0.07] focus:ring-1 focus:ring-white/20"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 rounded-md p-1 text-zinc-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <kbd className="pointer-events-none absolute right-3 rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
                    ESC
                  </kbd>
                )}
              </div>

              {/* Quick Navigation Chips */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mr-1">
                  Jump to:
                </span>
                {["Services", "Team", "Work", "Contact"].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      setSearchOpen(false);
                      const el = document.querySelector(`#${chip.toLowerCase() === "work" ? "work" : chip.toLowerCase() === "team" ? "about" : chip.toLowerCase()}`);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-0.5 text-[11px] text-zinc-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white transition-all cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Search Results List */}
              <div className="mt-2 max-h-[320px] overflow-y-auto space-y-1 pt-1 border-t border-white/[0.06]">
                {filteredSearchItems.length > 0 ? (
                  filteredSearchItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSearchItem(item)}
                      className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/[0.06] cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors group-hover:border-white/20 group-hover:bg-white/[0.07]">
                          {getCategoryIcon(item.category)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white tracking-tight">
                              {item.title}
                            </span>
                            <span className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.2 text-[9px] font-mono text-zinc-400">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] text-zinc-300">
                        <span>Go</span>
                        <CornerDownLeft className="h-3 w-3" />
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="py-8 text-center text-xs text-zinc-500">
                    No results found for &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Next.js&rdquo;, &ldquo;UI/UX&rdquo;, or &ldquo;Team&rdquo;.
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>PRESS ESC TO CLOSE</span>
                <span>CRAFTED MINDS DIGITAL</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
