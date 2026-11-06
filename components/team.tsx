"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Code, Terminal, Palette, Layers, User } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  roleIcon: React.ElementType;
  initials: string;
  bio: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Aditya Singh",
    designation: "Backend Developer",
    imageSrc: "/images/aditya-singh.jpg",
    roleIcon: Terminal,
    initials: "AS",
    bio: "Specializes in scalable server architectures, resilient APIs, database clustering, and high-throughput backend services.",
    specialties: ["Node.js / Go", "PostgreSQL", "Cloud Architecture", "Distributed Systems"],
  },
  {
    name: "Karunakar",
    designation: "Frontend Developer",
    imageSrc: "/images/karunakar.jpg",
    roleIcon: Code,
    initials: "K",
    bio: "Crafts fluid, responsive user interfaces with Next.js, React 19, and Tailwind CSS. Obsessed with 60fps micro-interactions.",
    specialties: ["Next.js App Router", "React 19", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Aditya Kushwaha",
    designation: "UI/UX Designer",
    imageSrc: "/images/aditya-kushwaha.jpg",
    roleIcon: Palette,
    initials: "AK",
    bio: "Leads visual language, typography hierarchies, glassmorphic interfaces, and comprehensive design systems that convert.",
    specialties: ["UI/UX Systems", "Glassmorphic Aesthetics", "Figma Architecture", "Design Systems"],
  },
  {
    name: "Anurag",
    designation: "Full-Stack Developer",
    imageSrc: "/images/anurag.jpg",
    roleIcon: Layers,
    initials: "A",
    bio: "Bridges the gap between interface aesthetics and robust backend engines. Delivers end-to-end bespoke digital products.",
    specialties: ["Full-Stack Architecture", "TypeScript", "Performance Tuning", "API Integration"],
  },
];

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const RoleIcon = member.roleIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="h-full rounded-3xl p-6 flex flex-col justify-between group transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]">
        <div>
          {/* Portrait Container */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#09090c] mb-6 flex items-center justify-center transition-all duration-500 group-hover:border-white/25">
            {/* Ambient background glow inside portrait frame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:16px_16px]"
            />
            <div
              aria-hidden="true"
              className="absolute w-32 h-32 rounded-full bg-white/[0.03] blur-2xl transition-colors duration-500 group-hover:bg-white/[0.06]"
            />

            {/* Check if image is present or use neutral architectural placeholder */}
            {!imageFailed ? (
              <Image
                src={member.imageSrc}
                alt={`${member.name} — ${member.designation}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:filter-none"
                onError={() => setImageFailed(true)}
              />
            ) : (
              /* Neutral Geometric Architectural Placeholder (No AI faces) */
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:border-white/30">
                  <div className="absolute inset-1.5 rounded-xl border border-white/5 border-dashed" />
                  <span className="text-xl font-bold font-mono tracking-wider text-white">
                    {member.initials}
                  </span>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-zinc-400">
                  <User className="h-3 w-3 text-zinc-500" />
                  <span>PORTRAIT PLACEHOLDER</span>
                </div>
              </div>
            )}

            {/* Specular top reflection line inside image container */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            {/* Corner Role Icon Badge */}
            <div className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-[#0a0a0d]/85 text-zinc-300 backdrop-blur-md transition-colors group-hover:text-white group-hover:border-white/30">
              <RoleIcon className="h-4 w-4" />
            </div>
          </div>

          {/* Member Details */}
          <div>
            <h3 className="text-xl font-semibold text-white tracking-tight transition-colors group-hover:text-zinc-100">
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
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] text-zinc-300 transition-colors group-hover:border-white/10"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
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
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
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
