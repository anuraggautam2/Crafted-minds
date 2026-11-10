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
  metadataBase: new URL("https://craftedminds.studio"),
  title: "CRAFTED MINDS — Ideas Crafted Into Digital Experiences",
  description:
    "A premium digital agency engineering high-performance websites, bespoke UI/UX designs, modern e-commerce architectures, and dedicated maintenance.",
  keywords: [
    "Digital Agency",
    "Website Development",
    "UI/UX Design Systems",
    "E-commerce Development",
    "Website Maintenance",
    "Next.js Development Agency",
    "Crafted Minds",
  ],
  authors: [
    { name: "Anurag Gautam" },
    { name: "Aditya Singh" },
    { name: "Aditya Kushwaha" },
    { name: "Karunakar Mishra" },
  ],
  creator: "Crafted Minds Collective",
  publisher: "Crafted Minds",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/brand/favicon.svg",
    apple: "/brand/cm-monogram-white.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craftedminds.studio",
    siteName: "CRAFTED MINDS",
    title: "CRAFTED MINDS — Ideas Crafted Into Digital Experiences",
    description:
      "A premium digital agency engineering high-performance websites, bespoke UI/UX designs, modern e-commerce architectures, and dedicated maintenance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRAFTED MINDS — Digital Engineering & Design Agency",
    description:
      "Engineering high-performance web experiences, design systems, and resilient cloud architectures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CRAFTED MINDS",
  url: "https://craftedminds.studio",
  email: "craftedmindsinfo@gmail.com",
  telephone: "+917392029603",
  description:
    "Digital agency providing custom website development, UI/UX design systems, e-commerce storefronts, and continuous maintenance.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/anuraggautam2/Crafted-minds",
    "https://wa.me/917392029603",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-[#ededed] antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
