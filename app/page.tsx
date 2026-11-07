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
    <div className="relative min-h-screen bg-[#000000] text-[#ededed] selection:bg-white/25 selection:text-white antialiased">
      {/* Global Layered Ambient Lighting & Depth System on Pure Deep-Black Canvas */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle geometric grid with soft center mask */}
        <div className="absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_60%,transparent_100%)]" />

        {/* Ambient Top Glow: Soft celestial silver reflection behind hero */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(200,210,225,0.02)_40%,transparent_70%)] blur-3xl opacity-90" />

        {/* Mid-page subtle smoky ambient reflections */}
        <div className="absolute top-[35%] left-[10%] w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.025)_0%,rgba(148,163,184,0.012)_50%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[60%] right-[-100px] w-[800px] h-[700px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,rgba(100,116,139,0.01)_50%,transparent_70%)] blur-3xl" />

        {/* Lower page upward ambient rim light */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04)_0%,rgba(148,163,184,0.015)_40%,transparent_70%)] blur-3xl" />

        {/* Deep edge vignette maintaining pure deep-black contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.95)_100%)]" />
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
