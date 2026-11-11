# CRAFTED MINDS — Changelog

---

### [2026-11-11T19:32:15+05:30] — Removal of "Our Development Process" Section

#### 1. `components/process.tsx` (Deleted)
- Deleted entire component file containing:
  - Section heading ("Our Development Process") and subtitle.
  - Four step cards: "Discovery & Planning", "UI/UX Design", "Engineering", "Testing & Launch".
  - Three principle cards: "Direct Partnership", "Iterative Progress", "Full Code Ownership".
  - Section specular dividers, diffuse lighting layers, and Framer Motion wrappers.

#### 2. `app/page.tsx`
- Removed `import { Process } from "@/components/process";`.
- Removed `<Process />` component mount from the main page flow.

#### 3. `components/navbar.tsx`
- Removed `{ label: "Process", href: "#process" }` from `navLinks` array.

#### 4. `components/footer.tsx`
- Removed `<li><a href="#process">Process</a></li>` from the footer Navigation column.
