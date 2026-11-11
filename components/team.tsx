"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";
import { User } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  initials: string;
  // Independently configurable photo cropping and face positioning
  objectPosition: string;
  imageScale?: number;
  offsetY?: number;
  offsetX?: number;
  // Visible charcoal surfaces with subtle outfit undertone
  cardBg: string;
  cardHoverBg: string;
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
    // Canonical glossy obsidian tile surface
    cardBg: "from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98",
    cardHoverBg: "hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015]",
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
    // Canonical glossy obsidian tile surface
    cardBg: "from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98",
    cardHoverBg: "hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015]",
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
    // Canonical glossy obsidian tile surface
    cardBg: "from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98",
    cardHoverBg: "hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015]",
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
    // Canonical glossy obsidian tile surface
    cardBg: "from-[#262833]/92 via-[#181920]/94 to-[#0c0d11]/98",
    cardHoverBg: "hover:from-[#2e303d] hover:via-[#1e2028] hover:to-[#0f1015]",
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
      {/* Visible Charcoal-Obsidian Glass Card with Reflective Lighting */}
      <div
        className={`group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.22] hover:border-white/[0.45] bg-gradient-to-b ${member.cardBg} ${member.cardHoverBg} p-3.5 sm:p-4 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 active:scale-[0.99] shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_80px_rgba(0,0,0,0.98),inset_0_1px_2px_rgba(255,255,255,0.60)] flex flex-col justify-between`}
      >
        {/* Precision Specular Top Reflection Line (Razor 1.5px Silver Edge) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent transition-opacity duration-300 group-hover:via-white"
        />

        {/* Strong, Wide, Soft White/Silver Blurred Reflection across TOP portion (Visibly Bright) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[94%] h-48 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.16)_45%,transparent_75%)] blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-95"
        />

        {/* Secondary Curved Top Glass Reflection Band */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/[0.24] via-white/[0.07] to-transparent [mask-image:radial-gradient(ellipse_at_top,white_55%,transparent_90%)] transition-opacity duration-300 group-hover:from-white/[0.34]"
        />

        {/* Diagonal Light Sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-80"
        />

        {/* Inner Rim Refraction Ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.16] transition-all duration-300 group-hover:ring-white/[0.28]"
        />

        {/* Rounded Portrait Container with Independently Configurable Cropping */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 bg-[#06070a] mb-3.5 sm:mb-4 flex items-center justify-center transition-colors duration-300 group-hover:border-white/40 shadow-inner">
          {!imageFailed ? (
            <div className="relative h-full w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
              <Image
                src={member.imageSrc}
                alt={`${member.name} — ${member.designation}`}
                fill
                unoptimized
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
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08]">
                <span className={`${spaceGrotesk.className} text-base font-bold tracking-wider text-white`}>
                  {member.initials}
                </span>
              </div>
              <div className="mt-2.5 inline-flex items-center gap-1 text-[9px] font-mono tracking-widest uppercase text-zinc-300 font-semibold">
                <User className="h-2.5 w-2.5" />
                <span>PORTRAIT</span>
              </div>
            </div>
          )}

          {/* Soft inner perimeter reflection highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/14"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </div>

        {/* Text Container: ONLY Full Name and Professional Designation (Crisp, High Contrast) */}
        <div className="px-1.5 pb-1 relative z-10">
          {/* Member Name: Space Grotesk 600/700, Bright White */}
          <h3
            className={`${spaceGrotesk.className} text-base sm:text-lg font-bold text-white tracking-tight`}
          >
            {member.name}
          </h3>

          {/* Professional Designation: Inter, Silver-Grey, Uppercase, Medium */}
          <p
            className={`${inter.className} mt-1 text-[11px] sm:text-xs font-semibold text-zinc-300 tracking-wider uppercase`}
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
    <section id="team" className="relative py-28 md:py-36 overflow-hidden">
      {/* Top Specular Divider Beam & Ambient Light Reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.15)_45%,transparent_75%)] blur-2xl"
      />

      {/* Studio Ambient Reflection Pool */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_75%)] blur-3xl"
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
          <span className={`${inter.className} text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold`}>
            Engineering Core
          </span>
          <h2 className={`${spaceGrotesk.className} mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight`}>
            The Crafted Minds Team
          </h2>
          <p className={`${inter.className} mt-4 text-base sm:text-lg text-zinc-200 font-normal leading-relaxed`}>
            A focused collective of senior engineers and designers taking direct responsibility for your digital product.
          </p>
        </motion.div>

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
