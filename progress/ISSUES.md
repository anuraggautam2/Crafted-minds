# CRAFTED MINDS — Issues & Findings Ledger

This document tracks all bugs, inconsistencies, accessibility gaps, and visual flaws discovered during audits, along with their severity, status, and resolution details.

---

## Active & Resolved Issues

### ISSUE-001: Mobile Menu Fullscreen Drawer Polish & Link Navigation
- **Location**: `components/navbar.tsx`
- **Severity**: Medium
- **Description**: Mobile drawer menu needed consistent backdrop blur, high-contrast text sizing, and proper padding to prevent any edge clipping on small viewports.
- **Status**: [x] Resolved
- **Resolution**: Updated mobile drawer container with canonical tile gradient, specular line, and high-contrast navigation links.

### ISSUE-002: Inconsistent Card Gradients Across Sections
- **Location**: Multiple components (`components/about.tsx`, `components/services.tsx`, `components/process.tsx`, `components/portfolio.tsx`, `components/team.tsx`)
- **Severity**: High
- **Description**: Several sections previously used fragmented hex values (`#242630`, `#1e1e24`, `#282a36`, `#090a0e`) and varying border opacities (`0.15` to `0.25`), creating visual dissonance between sections and the approved tiles.
- **Status**: [x] Resolved
- **Resolution**: Harmonized all section containers, pill chips, badges, and card backgrounds to the canonical tile gradient (`#262833` -> `#181920` -> `#0c0d11`) with `border-white/[0.22]` and `via-white/90` specular top highlights.

### ISSUE-003: FAQ Accordion Missing Relative Positioning for Specular Line
- **Location**: `components/testimonials-faq.tsx`
- **Severity**: Low
- **Description**: The FAQ accordion items contained an `absolute` specular top line without `relative` on the parent container, causing potential misalignment.
- **Status**: [x] Resolved
- **Resolution**: Added `relative` positioning and matching diffuse top reflection glow to each FAQ accordion container.

### ISSUE-004: Form Inputs in Consultation Modal Lacked Tactile Depth
- **Location**: `components/demo-modal.tsx`
- **Severity**: Medium
- **Description**: Modal inputs were using flat `#121318` styling that lacked the tactile obsidian finish and inset bevel depth of the tile design system.
- **Status**: [x] Resolved
- **Resolution**: Upgraded inputs, selects, and textarea with `.glossy-tile-input` styling (`#101116`/95, `border-white/[0.20]`, subtle inner shadow).

### ISSUE-005: Accordion Controls Lacked WAI-ARIA Standard Attributes
- **Location**: `components/testimonials-faq.tsx`
- **Severity**: Medium (Accessibility)
- **Description**: The FAQ accordion buttons lacked `aria-expanded` and `aria-controls`, preventing assistive technology and screen readers from identifying toggle states.
- **Status**: [x] Resolved
- **Resolution**: Added `aria-expanded={isOpen}`, `aria-controls={`faq-answer-${index}`}`, and `role="region"` to the collapsible containers.

### ISSUE-006: Background Scrolling When Search Modal is Open
- **Location**: `components/navbar.tsx`
- **Severity**: Low (UX)
- **Description**: Opening the search dialog with `Cmd+K` allowed the background document to scroll beneath the modal overlay.
- **Status**: [x] Resolved
- **Resolution**: Added an effect that locks `document.body.style.overflow = "hidden"` while search is open and cleanly restores it on dismissal.

### ISSUE-007: Narrow Mobile (< 360px) Text Overflow in Portfolio & Services
- **Location**: `components/portfolio.tsx`, `components/services.tsx`
- **Severity**: Low (Responsive)
- **Description**: On ultra-narrow screens (e.g. 320px), long metric summary badges and tags had the potential to extend beyond container boundaries.
- **Status**: [x] Resolved
- **Resolution**: Added `max-w-full flex-wrap` and `leading-snug` to the metrics badges and `flex-wrap` to service card footers.

---

## Remaining Blockers or Known Risks
- **None**: All frontend and UI/UX issues identified during the mission have been resolved.
- Backend Supabase and Gmail SMTP integrations remain un-mocked and strictly intact as per security guidelines.
