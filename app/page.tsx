"use client";

import React from "react";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Team } from "@/components/team";
import { TestimonialsFAQ } from "@/components/testimonials-faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-gradient-to-b from-[#0a0b10] via-[#06070a] to-[#020204] text-white selection:bg-white/30 selection:text-white antialiased">
        {/* Calm Ambient Lighting Environment */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle geometric glass grid */}
          <div className="absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)]" />

          {/* Soft Overhead Silver Reflection Beam */}
          <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(255,255,255,0.14)_0%,rgba(38,40,51,0.05)_45%,transparent_80%)] blur-3xl opacity-80" />

          {/* Soft Footer Upward Specular Arch */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.10)_0%,rgba(38,40,51,0.03)_45%,transparent_80%)] blur-3xl opacity-70" />

          {/* Subtle perimeter contrast vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,2,4,0.3)_70%,rgba(2,2,4,0.85)_100%)]" />
        </div>

        {/* Floating Header / Navbar */}
        <Navbar />

        {/* Clean Main Content Flow */}
        <main className="relative z-10 flex flex-col">
          {/* 1. Hero */}
          <Hero />

          {/* 2. About */}
          <About />

          {/* 3. Services */}
          <Services />

          {/* 4. Selected Work */}
          <Portfolio />

          {/* 5. Team (Original Photos & Designations Preserved) */}
          <Team />

          {/* 6. Frequently Asked Questions */}
          <TestimonialsFAQ />
        </main>

        {/* 8. Footer & Direct Contact Channels */}
        <Footer />
      </div>
    </MotionConfig>
  );
}
