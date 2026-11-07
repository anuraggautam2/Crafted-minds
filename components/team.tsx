"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";
import { User } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  initials: string;
  // Independently configurable photo cropping and face positioning
  // objectPosition: CSS position (e.g. "50% 18%", "center top", "50% 25%")
  objectPosition: string;
  // imageScale: Zoom multiplier (e.g. 1.0 to 1.3, default 1.08) providing headroom for vertical shifting
  imageScale?: number;
  // offsetY: Micro vertical offset in % (e.g. -2, 0, 5) to fine-tune headroom
  offsetY?: number;
  // offsetX: Micro horizontal offset in % (e.g. 0, -3, 3) to fine-tune horizontal alignment
  offsetX?: number;
  // Specific tinted glass styles matching member's outfit
  cardBg: string;
  borderColor: string;
  borderHover: string;
  specularGradient: string;
  specularHover: string;
  shadowHover: string;
  ambientGlow: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Anurag Gautam",
    designation: "Full-Stack Developer",
    imageSrc: "/images/anuag-gautam.jpg.jpeg",
    initials: "AG",
    // Configurable crop: Face calibrated with slight headroom
    objectPosition: "50% 18%",
    imageScale: 1.08,
    offsetY: -2,
    offsetX: 0,
    // Midnight navy / deep blue smoky glass
    cardBg: "from-[#080e1b]/80 via-[#060a14]/75 to-[#04070e]/85",
    borderColor: "border-blue-400/15",
    borderHover: "group-hover:border-blue-300/35",
    specularGradient: "via-blue-300/25",
    specularHover: "group-hover:via-blue-200/45",
    shadowHover: "group-hover:shadow-[0_22px_55px_rgba(3,12,30,0.75)]",
    ambientGlow: "from-blue-600/10",
  },
  {
    name: "Aditya Singh",
    designation: "Backend Developer",
    imageSrc: "/images/aditya-singh.jpg.jpeg",
    initials: "AS",
    // Configurable crop: Face calibrated with slight headroom
    objectPosition: "50% 16%",
    imageScale: 1.08,
    offsetY: -2,
    offsetX: 0,
    // Deep charcoal / black smoky glass
    cardBg: "from-[#111116]/80 via-[#0d0d12]/75 to-[#08080b]/85",
    borderColor: "border-zinc-400/15",
    borderHover: "group-hover:border-zinc-300/35",
    specularGradient: "via-zinc-300/25",
    specularHover: "group-hover:via-zinc-200/45",
    shadowHover: "group-hover:shadow-[0_22px_55px_rgba(0,0,0,0.85)]",
    ambientGlow: "from-zinc-500/10",
  },
  {
    name: "Aditya Kushwaha",
    designation: "UI/UX Designer",
    imageSrc: "/images/aditya-kushwaha.jpg.jpeg",
    initials: "AK",
    // Configurable crop: Face calibrated with slight headroom
    objectPosition: "50% 18%",
    imageScale: 1.08,
    offsetY: -2,
    offsetX: 0,
    // Graphite / metallic silver smoky glass
    cardBg: "from-[#14151c]/80 via-[#101117]/75 to-[#0a0b10]/85",
    borderColor: "border-slate-300/18",
    borderHover: "group-hover:border-slate-200/40",
    specularGradient: "via-slate-200/28",
    specularHover: "group-hover:via-slate-100/50",
    shadowHover: "group-hover:shadow-[0_22px_55px_rgba(15,20,32,0.75)]",
    ambientGlow: "from-slate-400/10",
  },
  {
    name: "Karunakar Mishra",
    designation: "Frontend Developer",
    imageSrc: "/images/Karunakar-mishra.jpg.jpeg",
    initials: "KM",
    // Configurable crop: Face calibrated with slight headroom
    objectPosition: "50% 16%",
    imageScale: 1.08,
    offsetY: -2,
    offsetX: 0,
    // Smoky slate grey glass
    cardBg: "from-[#10141a]/80 via-[#0d1015]/75 to-[#080b0f]/85",
    borderColor: "border-slate-400/15",
    borderHover: "group-hover:border-slate-300/35",
    specularGradient: "via-slate-300/25",
    specularHover: "group-hover:via-slate-200/45",
    shadowHover: "group-hover:shadow-[0_22px_55px_rgba(8,16,26,0.75)]",
    ambientGlow: "from-slate-500/10",
  },
];

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      {/* Premium Individual Dark Smoky Glass Card with Custom Tint */}
      <div
        className={`group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border ${member.borderColor} ${member.borderHover} bg-gradient-to-b ${member.cardBg} p-3.5 sm:p-4 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 ${member.shadowHover} flex flex-col justify-between`}
      >
        {/* Soft specular top reflection highlight */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent ${member.specularGradient} ${member.specularHover} to-transparent transition-opacity duration-300`}
        />

        {/* Ambient subtle back diffusion matching outfit tint */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-28 bg-gradient-to-b ${member.ambientGlow} to-transparent blur-2xl rounded-full opacity-60 transition-opacity duration-300 group-hover:opacity-90`}
        />

        {/* Rounded Portrait Container with Independently Configurable Cropping */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#070709] mb-3.5 sm:mb-4 flex items-center justify-center transition-colors duration-300 group-hover:border-white/20">
          {!imageFailed ? (
            <div className="relative h-full w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
              <Image
                src={member.imageSrc}
                alt={`${member.name} — ${member.designation}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                style={{
                  objectPosition: member.objectPosition,
                  transform: `scale(${member.imageScale ?? 1.08}) translate(${member.offsetX ?? 0}%, ${member.offsetY ?? 0}%)`,
                  transformOrigin: member.objectPosition || "center",
                }}
                onError={() => setImageFailed(true)}
                priority={index < 2}
              />
            </div>
          ) : (
            /* Neutral Fallback Placeholder (if image ever fails to load) */
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <span className={`${spaceGrotesk.className} text-base font-semibold tracking-wider text-white/80`}>
                  {member.initials}
                </span>
              </div>
              <div className="mt-2.5 inline-flex items-center gap-1 text-[9px] font-mono tracking-widest uppercase text-zinc-500">
                <User className="h-2.5 w-2.5" />
                <span>PORTRAIT</span>
              </div>
            </div>
          )}

          {/* Soft inner perimeter reflection highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>

        {/* Text Container: ONLY Full Name and Professional Designation */}
        <div className="px-1.5 pb-1">
          {/* Translucent Name Typography (Space Grotesk, 600 weight, 80% opacity, transitions to 100% on hover) */}
          <h3
            className={`${spaceGrotesk.className} text-base sm:text-lg font-semibold text-white/80 tracking-tight transition-colors duration-300 group-hover:text-white`}
          >
            {member.name}
          </h3>

          {/* Professional Designation (Inter, smaller, muted silver-grey, medium weight, subtle letter spacing) */}
          <p
            className={`${inter.className} mt-1 text-[11px] sm:text-xs font-medium text-zinc-400 tracking-wider uppercase`}
          >
            {member.designation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className={`${inter.className} text-[11px] font-medium uppercase tracking-widest text-zinc-400`}>
            Team
          </span>
          <h2 className={`${spaceGrotesk.className} mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white`}>
            The Crafted Minds Team
          </h2>
          <p className={`${inter.className} mt-2 text-sm text-zinc-400 font-normal`}>
            A focused collective of developers and designers building modern digital experiences.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
