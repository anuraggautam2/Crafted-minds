"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  ShoppingBag,
  ShieldCheck,
  ArrowRight,
  Layers,
  Cpu,
  Check,
} from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { GlassButton } from "./ui/glass-button";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "01",
      title: "Website Development",
      category: "ENGINEERING",
      description:
        "Custom, high-velocity websites engineered with Next.js App Router, TypeScript, and modern headless systems. Built for sub-second page loads, SEO dominance, and responsive fluidity across every viewport.",
      icon: Globe,
      capabilities: [
        "Full-stack Next.js applications",
        "Headless CMS integration",
        "API architecture & microservices",
        "Lighthouse 100/100 performance tuning",
      ],
      techBadge: "Next.js • React 19 • TypeScript",
    },
    {
      id: "02",
      title: "UI/UX Design",
      category: "CREATIVE & INTERFACE",
      description:
        "Human-centric, minimal, and sophisticated digital interfaces. We create bespoke glassmorphism designs, unified design systems, interactive prototypes, and precise micro-interactions that elevate brand perception.",
      icon: Palette,
      capabilities: [
        "Comprehensive design systems",
        "Figma component architectures",
        "Framer Motion micro-interactions",
        "User journey mapping & usability audits",
      ],
      techBadge: "Figma • Motion • Design Tokens",
    },
    {
      id: "03",
      title: "E-commerce Development",
      category: "CONVERSION & COMMERCE",
      description:
        "High-performance direct-to-consumer and B2B digital storefronts engineered to maximize conversions. Frictionless checkout experiences, real-time inventory synchronization, and custom payment pipelines.",
      icon: ShoppingBag,
      capabilities: [
        "Custom checkout pipelines",
        "Shopify & headless commerce setups",
        "Payment gateway integrations (Stripe, etc.)",
        "Catalog performance optimization",
      ],
      techBadge: "Shopify • Stripe • Edge APIs",
    },
    {
      id: "04",
      title: "Website Maintenance",
      category: "RELIABILITY & EVOLUTION",
      description:
        "Proactive technical stewardship to guarantee your digital flagship never slows down. Continuous uptime monitoring, security patching, dependency upgrades, performance audits, and priority iterations.",
      icon: ShieldCheck,
      capabilities: [
        "24/7 uptime & error telemetry",
        "Security hardening & vulnerability patches",
        "Core Web Vitals health audits",
        "Feature iterations & continuous deployment",
      ],
      techBadge: "CI/CD • Telemetry • Security",
    },
  ];

  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 w-[450px] h-[450px] bg-zinc-700/[0.04] blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono tracking-widest text-zinc-400 uppercase">
              <Layers className="h-3 w-3 text-zinc-300" />
              CAPABILITIES & EXPERTISE
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Services Tailored For <br className="hidden sm:block" />
              <span className="text-zinc-400">Digital Distinction.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            From strategic concept to production architecture, we build resilient
            software and bespoke digital experiences without bloat or compromise.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-7 sm:p-9 flex flex-col justify-between group">
                  <div>
                    {/* Header: ID & Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white/[0.1] group-hover:scale-105 group-hover:border-white/30">
                          <Icon className="h-6 w-6 text-zinc-200 group-hover:text-white" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-500 block">
                            {service.category}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">
                            {service.techBadge}
                          </span>
                        </div>
                      </div>

                      <span className="text-2xl font-mono font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors">
                        {service.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Capability List */}
                    <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-2.5">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2.5 text-xs text-zinc-300">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.06] border border-white/10">
                            <Check className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Action button */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer group/btn"
                    >
                      <span>DISCUSS THIS SERVICE</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white">
                Have a specialized engineering or design requirement?
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                We craft bespoke technical solutions tailored to your unique architectural constraints.
              </p>
            </div>
          </div>
          <GlassButton
            onClick={() => onSelectService("Custom Architecture")}
            variant="glass"
            size="sm"
            className="shrink-0 text-xs"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </GlassButton>
        </div>
      </div>
    </section>
  );
}
