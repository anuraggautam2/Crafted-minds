"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { Services } from "@/components/services";
import { WorkPreview } from "@/components/work-preview";
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
      {/* Pure Black Canvas with optional micro grid - NO grey page-wide gradients */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-15" />
      </div>

      {/* Floating Header / Navbar */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* Team Section (positioned immediately below Hero) */}
        <Team />

        {/* Services Section */}
        <Services onSelectService={(service) => handleOpenDemo(service)} />

        {/* Our Work Section */}
        <WorkPreview onOpenDemo={() => handleOpenDemo()} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={() => handleOpenDemo()} />

      {/* Interactive Free Demo Booking Glass Dialog */}
      <DemoModal
        key={`${selectedService || "default"}-${demoModalOpen}`}
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        defaultService={selectedService}
      />
    </div>
  );
}
