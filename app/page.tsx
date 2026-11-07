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
    <div className="relative min-h-screen bg-[#070709] text-[#ededed] selection:bg-white/20 selection:text-white">
      {/* Global Layered Ambient Lighting & Depth System */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle geometric grid with soft center mask */}
        <div className="absolute inset-0 bg-grid-subtle opacity-25 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_65%,transparent_100%)]" />

        {/* Ambient Diffusion 1: Top Hero soft silver-white celestial glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.045)_0%,rgba(148,163,184,0.02)_40%,transparent_70%)] blur-3xl opacity-80" />

        {/* Ambient Diffusion 2: Mid-page smoky graphite & slate ambient reflection */}
        <div className="absolute top-[32%] left-[15%] w-[850px] h-[650px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,rgba(71,85,105,0.015)_50%,transparent_70%)] blur-3xl" />

        {/* Ambient Diffusion 3: Lower-mid page right balance */}
        <div className="absolute top-[58%] right-[-150px] w-[800px] h-[750px] bg-[radial-gradient(circle,rgba(255,255,255,0.018)_0%,rgba(100,116,139,0.012)_50%,transparent_70%)] blur-3xl" />

        {/* Ambient Diffusion 4: Footer upward ambient rim light */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.035)_0%,rgba(148,163,184,0.015)_40%,transparent_70%)] blur-3xl" />

        {/* Smooth vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,9,0.3)_65%,rgba(5,5,7,0.85)_100%)]" />
      </div>

      {/* Floating Header / Navbar */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* Team Section (positioned immediately after the hero) */}
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
