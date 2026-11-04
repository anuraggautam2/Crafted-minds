"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Code, Terminal, Palette, Layers } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface TeamMember {
  name: string;
  designation: string;
  roleIcon: React.ElementType;
  initials: string;
  bio: string;
  specialties: string[];
  gradientAccent: string;
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Aditya Singh",
      designation: "Backend Developer",
      roleIcon: Terminal,
      initials: "AS",
      bio: "Specializes in scalable server architectures, resilient APIs, database clustering, and high-throughput backend services.",
      specialties: ["Node.js / Go", "PostgreSQL", "Cloud Architecture", "Distributed Systems"],
      gradientAccent: "from-zinc-400 to-zinc-600",
    },
    {
      name: "Karunakar",
      designation: "Frontend Developer",
      roleIcon: Code,
      initials: "K",
      bio: "Crafts fluid, responsive user interfaces with Next.js, React 19, and Tailwind CSS. Obsessed with 60fps micro-interactions.",
      specialties: ["Next.js App Router", "React 19", "Tailwind CSS", "Framer Motion"],
      gradientAccent: "from-zinc-300 to-zinc-500",
    },
    {
      name: "Aditya Kushwaha",
      designation: "UI/UX Designer",
      roleIcon: Palette,
      initials: "AK",
      bio: "Leads visual language, typography hierarchies, glassmorphic interfaces, and comprehensive design systems that convert.",
      specialties: ["UI/UX Systems", "Glassmorphic Aesthetics", "Figma Architecture", "Design Systems"],
      gradientAccent: "from-zinc-200 to-zinc-400",
    },
    {
      name: "Anurag",
      designation: "Full-Stack Developer",
      roleIcon: Layers,
      initials: "A",
      bio: "Bridges the bridge between interface aesthetics and robust backend engines. Delivers end-to-end bespoke digital products.",
      specialties: ["Full-Stack Architecture", "TypeScript", "Performance Tuning", "API Integration"],
      gradientAccent: "from-zinc-100 to-zinc-400",
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.02] blur-[160px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 w-[400px] h-[400px] bg-zinc-800/[0.06] blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono tracking-widest text-zinc-400 uppercase">
            <Users className="h-3 w-3 text-zinc-300" />
            CORE ARCHITECTS & BUILDERS
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            The Crafted Minds Team
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
            A focused collective of specialized engineers and designers dedicated to
            shaping thoughtful, high-performance digital experiences.
          </p>
        </div>

        {/* Four Rounded Portrait Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => {
            const RoleIcon = member.roleIcon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full rounded-3xl p-6 flex flex-col justify-between group">
                  <div>
                    {/* Portrait Placeholder (Architectural Geometric Design - No AI faces) */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#09090c] mb-6 flex items-center justify-center group-hover:border-white/20 transition-all duration-500">
                      {/* Subtle geometric background grid pattern inside portrait */}
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" />

                      {/* Ambient lighting highlight behind placeholder avatar */}
                      <div className="absolute w-32 h-32 rounded-full bg-white/[0.04] blur-2xl group-hover:bg-white/[0.08] transition-colors" />

                      {/* Geometric Silhouette / Monogram Avatar Placeholder */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:border-white/30">
                          {/* Inner geometric facet */}
                          <div className="absolute inset-1.5 rounded-xl border border-white/5 border-dashed" />
                          <span className="text-xl font-bold font-mono tracking-wider text-white">
                            {member.initials}
                          </span>
                        </div>

                        {/* Temporary portrait badge */}
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono text-zinc-400">
                          <span>ARCHITECTURAL PORTRAIT</span>
                        </div>
                      </div>

                      {/* Specular top reflection line inside image container */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      />

                      {/* Corner Icon Badge */}
                      <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-[#0a0a0d]/80 text-zinc-300 backdrop-blur-md group-hover:text-white transition-colors">
                        <RoleIcon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Member Details */}
                    <div>
                      <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs font-mono tracking-wider uppercase text-zinc-400">
                        {member.designation}
                      </p>
                      <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Skills / Specialties Pills */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">
                      CORE SPECIALTIES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] text-zinc-300 group-hover:border-white/10 transition-colors"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Collaborative Principles Bar */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Direct Principal Access
              </div>
              <h4 className="text-base font-semibold text-white mt-1">
                Zero Middlemen
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                You work directly with Aditya, Karunakar, Aditya, and Anurag on every technical and design touchpoint.
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Synchronous Sprints
              </div>
              <h4 className="text-base font-semibold text-white mt-1">
                Rapid Velocity
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Tight feedback cycles and weekly interactive previews keep your roadmap ahead of schedule.
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Craft Quality Standard
              </div>
              <h4 className="text-base font-semibold text-white mt-1">
                Uncompromising Polish
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Every line of TypeScript, layout container, and motion transition is personally audited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
