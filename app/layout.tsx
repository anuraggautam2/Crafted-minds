import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRAFTED MINDS — Ideas Crafted Into Digital Experiences",
  description:
    "A premium digital agency engineering high-performance websites, bespoke UI/UX designs, modern e-commerce architectures, and dedicated maintenance.",
  keywords: [
    "Digital Agency",
    "Website Development",
    "UI/UX Design",
    "E-commerce Development",
    "Website Maintenance",
    "Crafted Minds",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050505] text-[#ededed] antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
