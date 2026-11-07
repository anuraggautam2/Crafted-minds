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
  // Visible charcoal surfaces (#151515 to #242424) with subtle outfit undertone
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
    // Visible charcoal surface with subtle navy undertone
    cardBg: "from-[#22242e] via-[#1a1b24] to-[#14151c]",
    cardHoverBg: "hover:from-[#282a36] hover:via-[#1f202c] hover:to-[#161720]",
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
    // Visible charcoal deep graphite surface
    cardBg: "from-[#24242a] via-[#1a1a20] to-[#141418]",
    cardHoverBg: "hover:from-[#2a2a32] hover:via-[#1f1f26] hover:to-[#16161b]",
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
    // Visible charcoal metallic graphite surface
    cardBg: "from-[#25252c] via-[#1b1b22] to-[#15151a]",
    cardHoverBg: "hover:from-[#2b2b34] hover:via-[#202028] hover:to-[#17171d]",
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
    // Visible charcoal slate surface
    cardBg: "from-[#22252c] via-[#191c22] to-[#14161b]",
    cardHoverBg: "hover:from-[#282c34] hover:via-[#1e2229] hover:to-[#16181e]",
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
      {/* Visible Charcoal Glass Card (#151515 to #242424) clearly distinguishable from #000000 */}
      <div
        className={`group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 hover:border-white/40 bg-gradient-to-b ${member.cardBg} ${member.cardHoverBg} p-3.5 sm:p-4 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.55)] flex flex-col justify-between`}
      >
        {/* Precision Specular Top Reflection Line (Razor 1.5px Silver Edge) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent transition-opacity duration-300 group-hover:via-white"
        />

        {/* Strong, Wide, Soft White/Silver Blurred Reflection across TOP portion (Visibly Bright) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[92%] h-44 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.14)_45%,transparent_75%)] blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-90"
        />

        {/* Secondary Curved Top Glass Reflection Band */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.22] via-white/[0.06] to-transparent [mask-image:radial-gradient(ellipse_at_top,white_50%,transparent_85%)] transition-opacity duration-300 group-hover:from-white/[0.30]"
        />

        {/* Inner Rim Refraction Ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/[0.14] transition-all duration-300 group-hover:ring-white/[0.22]"
        />

        {/* Rounded Portrait Container with Independently Configurable Cropping */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/16 bg-[#000000] mb-3.5 sm:mb-4 flex items-center justify-center transition-colors duration-300 group-hover:border-white/30">
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
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/18 bg-white/[0.06]">
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
            className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/12"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
    <section id="team" className="relative py-24 md:py-32 overflow-hidden bg-[#000000]">
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
          <span className={`${inter.className} text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold`}>
            Engineering Core
          </span>
          <h2 className={`${spaceGrotesk.className} mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight`}>
            The Crafted Minds Team
          </h2>
          <p className={`${inter.className} mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed`}>
            A focused collective of senior engineers and designers taking direct responsibility for your digital product.
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
