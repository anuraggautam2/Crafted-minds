"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Portfolio } from "@/components/portfolio";
import { Team } from "@/components/team";
import { TestimonialsFAQ } from "@/components/testimonials-faq";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenDemo = (service?: string) => {
    setSelectedService(service);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#090a0e] via-[#040406] via-[#08090d] via-[#030305] to-[#07080b] text-white selection:bg-white/30 selection:text-white antialiased">
      {/* GLOBAL GLOSSY OBSIDIAN ENVIRONMENT & STUDIO LIGHTING SYSTEM */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle geometric glass grid */}
        <div className="absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)]" />

        {/* Global Diagonal Studio Light Sheen Streaks */}
        <div className="absolute inset-0 studio-sheen-diagonal opacity-70" />

        {/* Studio Softbox Lighting 1: Hero Overhead Silver Reflection Beam */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1300px] h-[750px] bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(255,255,255,0.18)_0%,rgba(200,210,230,0.05)_45%,transparent_80%)] blur-3xl opacity-90" />

        {/* Studio Lighting 2: Mid-Upper Left Ambient Reflection (About / Services) */}
        <div className="absolute top-[22%] left-[-150px] w-[950px] h-[850px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(148,163,184,0.025)_45%,transparent_75%)] blur-3xl opacity-80" />

        {/* Studio Lighting 3: Mid-Lower Right Ambient Reflection (Process / Portfolio) */}
        <div className="absolute top-[48%] right-[-180px] w-[1000px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09)_0%,rgba(100,116,139,0.03)_45%,transparent_75%)] blur-3xl opacity-85" />

        {/* Studio Lighting 4: Lower Page Center Soft Reflection (Team / FAQ) */}
        <div className="absolute top-[72%] left-1/2 -translate-x-1/2 w-[1150px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,rgba(148,163,184,0.02)_45%,transparent_75%)] blur-3xl opacity-75" />

        {/* Studio Lighting 5: Footer Upward Specular Arch */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1300px] h-[550px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.14)_0%,rgba(180,195,215,0.04)_45%,transparent_80%)] blur-3xl opacity-85" />

        {/* Controlled vignette to maintain high perimeter contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,3,5,0.3)_65%,rgba(3,3,5,0.85)_100%)]" />
      </div>

      {/* Floating Glossy Obsidian Header / Navbar */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Complete Site-Wide Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero: Full-Width Dramatic Black Glossy Environment */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* 2. About: Senior Software Collective & Core Engineering Pillars */}
        <About onOpenDemo={() => handleOpenDemo()} />

        {/* 3. Services: 4 Core Capabilities in Matching Glossy Environment */}
        <Services onSelectService={(service) => handleOpenDemo(service)} />

        {/* 4. Why Choose Us & Process: Comparative Advantages & 4-Step Engineering Workflow */}
        <Process onOpenDemo={() => handleOpenDemo()} />

        {/* 5. Portfolio: Premium Dark Reflective Project Presentation */}
        <Portfolio onOpenDemo={() => handleOpenDemo()} />

        {/* 6. Team: Original Photos Preserved, Calibrated Crops, Glossy Dark Layouts */}
        <Team />

        {/* 7. Testimonials & FAQ: Client Endorsements & Interactive Accordion */}
        <TestimonialsFAQ onOpenDemo={() => handleOpenDemo()} />
      </main>

      {/* 8. Footer & Contact: Complete Glossy Black Finish */}
      <Footer onOpenDemo={() => handleOpenDemo()} />

      {/* Interactive Free Demo / Consultation Booking Glass Dialog */}
      <DemoModal
        key={`${selectedService || "default"}-${demoModalOpen}`}
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        defaultService={selectedService}
      />
    </div>
  );
}
