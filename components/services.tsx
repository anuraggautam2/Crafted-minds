"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Palette, ShoppingBag, Wrench, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export function Services() {
  const services = [
    {
      id: "01",
      title: "Website Development",
      description:
        "Custom websites and web applications built with Next.js, React, and TypeScript for speed, responsiveness, and clean code.",
      icon: Globe,
    },
    {
      id: "02",
      title: "UI/UX Design",
      description:
        "Intuitive interfaces, user flows, and structured design systems crafted in Figma for practical web experiences.",
      icon: Palette,
    },
    {
      id: "03",
      title: "E-Commerce Development",
      description:
        "Online storefronts engineered for reliable catalog navigation, payment integration, and smooth customer checkout.",
      icon: ShoppingBag,
    },
    {
      id: "04",
      title: "Website Maintenance",
      description:
        "Ongoing technical support, performance upkeep, dependency updates, and continuous platform improvements.",
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Top Specular Divider Beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What We Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
            Focused design and engineering capabilities tailored to launching and supporting modern digital platforms.
          </p>
        </motion.div>

        {/* Services Grid (4 Clean, Calm, Spacious Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <GlassCard className="h-full p-7 flex flex-col justify-between group active:scale-[0.99] transition-transform">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.22] bg-gradient-to-b from-[#262833]/90 to-[#121318]/95 text-white transition-all duration-300 group-hover:scale-105 group-hover:border-white/45 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono text-zinc-400 font-semibold">
                        {service.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Clean Contextual Link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-300 font-normal">
            Have a project requirement that spans these areas?{" "}
            <a
              href="#contact"
              className="text-white font-semibold underline underline-offset-4 hover:text-zinc-200 transition-colors inline-flex items-center gap-1 ml-1"
            >
              <span>Get in touch with our team</span>
              <ArrowRight className="h-3.5 w-3.5 inline" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
