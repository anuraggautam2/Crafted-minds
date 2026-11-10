# CRAFTED MINDS

> **Ideas Crafted Into Digital Experiences.**

A high-performance digital engineering agency website built with **Next.js 16 (App Router & Turbopack)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **Supabase**, and **Nodemailer**.

---

## ✨ Features

- **Glossy Obsidian Design System**: High-contrast, tactile obsidian glass panels, specular silver reflections, layered radial lighting, and deep pure-black backdrops.
- **Hero Telemetry & Live Interactive Matrix**: Interactive glass composition showcasing UI design systems, real-time telemetry, and benchmarks.
- **Bespoke Services Showcase**:
  - Website Development (Next.js, React, Node.js)
  - UI/UX Design Systems & Figma Architecture
  - E-Commerce Storefronts (Shopify, Custom Headless Checkout)
  - Technical Maintenance, Security & Performance Optimization
- **Engineering Core**: High-fidelity architectural portrait cards for the engineering collective:
  - **Anurag Gautam** — Full-Stack Developer
  - **Aditya Singh** — Backend Developer
  - **Aditya Kushwaha** — UI/UX Designer
  - **Karunakar Mishra** — Frontend Developer
- **Interactive Project Consultation Modal**:
  - Full 7-field structured client intake.
  - Honeypot bot trapping & 30-second rate-limiting guard.
  - Real-time loading states, accessible WAI-ARIA dialog attributes, and genuine success/error handling.
- **Enterprise Contact Backend**:
  - Secure `POST /api/contact` server route handler.
  - Server-side insertion into Supabase `public.leads` with transient network retry.
  - Dual Nodemailer dispatch: Instant agency lead alert to `craftedmindsinfo@gmail.com` and branded confirmation note to the prospective client.
- **SEO & Search Rich Results**:
  - Dynamic `sitemap.xml` and `robots.txt` generation.
  - Comprehensive OpenGraph and Twitter Cards.
  - Embedded JSON-LD schema (`@type: ProfessionalService`) for enhanced Google search engine indexing.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Database** | [Supabase](https://supabase.com/) (PostgreSQL with RLS) |
| **Email Service** | [Nodemailer](https://nodemailer.com/) (Gmail SMTP) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 🔐 Environment Configuration

Create a `.env.local` file in the project root:

```env
# Supabase Configuration
SUPABASE_URL=https://<your-project-id>.supabase.co
SUPABASE_SECRET_KEY=sb_secret_your_service_role_key

# Gmail SMTP Configuration
GMAIL_USER=craftedmindsinfo@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

> **Note**: `.env.local` is strictly excluded from Git tracking via `.gitignore`. Never commit API keys or passwords.

---

## 🗄️ Database Schema

Run this SQL query in your **Supabase SQL Editor** to initialize the `public.leads` table:

```sql
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_category TEXT NOT NULL,
  service TEXT NOT NULL,
  project_description TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (safely bypassed by backend service-role key)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
```

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 📦 Quality Verification & Production Build

Run ESLint:

```bash
npm run lint
```

Create an optimized production build with Turbopack:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 📄 License

Private © 2026 CRAFTED MINDS. All rights reserved.
