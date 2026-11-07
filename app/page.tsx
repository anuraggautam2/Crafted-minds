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
    <div className="relative min-h-screen bg-[#000000] text-white selection:bg-white/30 selection:text-white antialiased">
      {/* Pure Obsidian Black Canvas with Micro Grid */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-15" />
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
