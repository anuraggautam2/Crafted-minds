"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  ShoppingBag,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "01",
      title: "Website Development",
      description:
        "Custom web applications engineered with Next.js and React for speed, responsiveness, and clean architecture.",
      icon: Globe,
      tags: ["Next.js", "React", "TypeScript", "APIs"],
    },
    {
      id: "02",
      title: "UI/UX Design",
      description:
        "Clear user flows, wireframes, and cohesive design systems crafted in Figma for intuitive digital products.",
      icon: Palette,
      tags: ["Figma", "Design Systems", "Wireframes", "Prototypes"],
    },
    {
      id: "03",
      title: "E-Commerce Development",
      description:
        "High-converting storefronts designed for smooth catalog browsing and dependable payment processing.",
      icon: ShoppingBag,
      tags: ["Shopify", "Custom Checkout", "Stripe", "Catalogs"],
    },
    {
      id: "04",
      title: "Website Maintenance",
      description:
        "Ongoing technical care, security updates, performance monitoring, and continuous feature enhancements.",
      icon: Wrench,
      tags: ["Security", "Bug Fixes", "Updates", "Support"],
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-[#000000]">
      {/* Top Specular Divider Beam & Ambient Light Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22)_0%,transparent_75%)] blur-2xl"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What We Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Four focused capabilities designed to launch and support modern digital platforms.
          </p>
        </div>

        {/* Services Grid (4 Cards with Consistent Heights & Glossy Charcoal Finish) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="h-full"
              >
                <GlassCard className="h-full p-6 sm:p-7 flex flex-col justify-between group">
                  <div>
                    {/* Header: Small elegant icon & ID */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08] text-white transition-colors group-hover:text-white group-hover:border-white/40 group-hover:bg-white/[0.14]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-mono text-zinc-300 font-bold">
                        {service.id}
                      </span>
                    </div>

                    {/* Title: Short & Impactful */}
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description: Exactly one concise sentence */}
                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer: Tags and Action Link */}
                  <div className="mt-6 pt-4 border-t border-white/[0.12] flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/18 bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-mono text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#24242a] px-3.5 py-1 text-xs font-semibold text-white hover:text-white hover:border-white/40 hover:bg-[#2c2c34] transition-all cursor-pointer"
                      aria-label={`Inquire about ${service.title}`}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
