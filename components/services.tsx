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
    <section id="services" className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
            Services
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            What We Build
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Four focused capabilities designed to launch and support modern digital platforms.
          </p>
        </div>

        {/* Services Grid (4 Cards with Consistent Heights & Glossy Obsidian Finish) */}
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 bg-white/[0.04] text-zinc-300 transition-colors group-hover:text-white group-hover:border-white/25 group-hover:bg-white/[0.08]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-mono text-zinc-500 font-medium">
                        {service.id}
                      </span>
                    </div>

                    {/* Title: Short & Impactful */}
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description: Exactly one concise sentence */}
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer: Tags and Action Link */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-0.5 text-[10px] font-mono text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all cursor-pointer"
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
