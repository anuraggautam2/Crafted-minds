"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
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
    <div className="relative min-h-screen bg-[#050505] text-[#ededed] selection:bg-white/20 selection:text-white">
      {/* Background subtle noise and fine grid */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none bg-grid-subtle opacity-40 z-0"
      />

      {/* Floating Header / Navbar */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* Services Section */}
        <Services onSelectService={(service) => handleOpenDemo(service)} />

        {/* Our Work Section */}
        <WorkPreview onOpenDemo={() => handleOpenDemo()} />

        {/* Team Section */}
        <Team />
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
