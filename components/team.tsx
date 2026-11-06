"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Terminal, Palette, Layers, User } from "lucide-react";
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
    bio: "Scalable server architectures, database modeling, and resilient API engineering.",
    specialties: ["Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Karunakar",
    designation: "Frontend Developer",
    imageSrc: "/images/karunakar.jpg",
    roleIcon: Code,
    initials: "K",
    bio: "Responsive user interfaces, smooth interactions, and frontend component systems.",
    specialties: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    name: "Aditya Kushwaha",
    designation: "UI/UX Designer",
    imageSrc: "/images/aditya-kushwaha.jpg",
    roleIcon: Palette,
    initials: "AK",
    bio: "User journeys, design tokens, and wireframe prototypes designed in Figma.",
    specialties: ["Figma", "UI Systems", "Wireframing"],
  },
  {
    name: "Anurag",
    designation: "Full-Stack Developer",
    imageSrc: "/images/anurag.jpg",
    roleIcon: Layers,
    initials: "A",
    bio: "End-to-end web architecture connecting modern frontends with backend engines.",
    specialties: ["Full-Stack", "TypeScript", "Next.js"],
  },
];

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const RoleIcon = member.roleIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="h-full"
    >
      <GlassCard className="h-full p-5 flex flex-col justify-between group">
        <div>
          {/* Rounded Portrait Container */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-[#08080b] mb-4 flex items-center justify-center transition-colors group-hover:border-white/20">
            {/* Subtle inner texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:14px_14px]"
            />

            {/* Photo or Neutral Monogram Placeholder */}
            {!imageFailed ? (
              <Image
                src={member.imageSrc}
                alt={`${member.name} — ${member.designation}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="text-base font-bold font-mono tracking-wider text-white">
                    {member.initials}
                  </span>
                </div>
                <div className="mt-2.5 inline-flex items-center gap-1 text-[9px] font-mono tracking-widest uppercase text-zinc-500">
                  <User className="h-2.5 w-2.5" />
                  <span>PORTRAIT</span>
                </div>
              </div>
            )}

            {/* Small Elegant Corner Role Icon */}
            <div className="absolute top-2.5 right-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-[#0a0a0d]/85 text-zinc-400 backdrop-blur-md">
              <RoleIcon className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Member Details */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-tight">
              {member.name}
            </h3>
            <p className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 mt-0.5">
              {member.designation}
            </p>
            {/* One concise sentence */}
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Specialties Tags */}
        <div className="mt-5 pt-3.5 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1">
            {member.specialties.map((spec) => (
              <span
                key={spec}
                className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
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
    <section id="about" className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
            Team
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Core Builders
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Engineers and designers building digital products from concept to production.
          </p>
        </div>

        {/* 4 Cards Grid with Consistent Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
