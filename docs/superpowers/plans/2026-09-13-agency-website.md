# MEDIA-TARDS Agency Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premier, conversion-focused digital agency website for "MEDIA-TARDS", a digital growth studio founded by 3 collegiate builders, engineered to turn local businesses into market leaders through the Discover → Trust → Convert framework.

**Architecture:** Vite + React 18 + TypeScript + Tailwind CSS application structured into modular, reusable UI components, dedicated sections, interactive concept showcase modals, and responsive layout systems.

**Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, Lucide React, PostCSS.

**Spec:** `docs/superpowers/specs/2026-09-13-agency-website-design.md`

## Global Constraints
- Target 100/100 performance: zero sluggish external script bloat.
- Dark theme visual language: Obsidian (`#080A0F`), Slate surfaces (`#0F131D`), Luminous Cyan (`#38BDF8`) & Amber (`#F59E0B`) accents.
- Responsive mobile-first design: all components must render with precision across mobile, tablet, and desktop.
- Tone: Confident, modern, outcome-oriented, zero corporate buzzwords.

---

### Task 1: Scaffolding Vite + React + TypeScript + Tailwind CSS
- [ ] Initialize Vite React-TS project in `d:\Agency\web`.
- [ ] Install Tailwind CSS, PostCSS, Autoprefixer, and Lucide React.
- [ ] Configure `tailwind.config.js`, `postcss.config.js`, and `index.css` with custom colors, fonts, and animation utilities.
- [ ] Verify build and dev server launch.

### Task 2: Core Design System & Primitives
- [ ] Create `src/components/ui/Button.tsx` (primary, secondary, outline, ghost, sizes).
- [ ] Create `src/components/ui/Badge.tsx` (status pills, category labels).
- [ ] Create `src/components/ui/SectionHeading.tsx` (eyebrow, title, description).
- [ ] Create `src/components/ui/Modal.tsx` (accessible dialog with backdrop blur).

### Task 3: Navigation Bar & Mobile Drawer
- [ ] Create `src/components/Navbar.tsx` with brand wordmark, desktop navigation links, live availability pill, and CTA button.
- [ ] Implement responsive mobile slide-out drawer with tactile touch targets.

### Task 4: Hero Section & Problem Mirror Section
- [ ] Create `src/components/HeroSection.tsx`: benefit-driven headline, subheadline, dual CTAs, proof badges.
- [ ] Create `src/components/ProblemSection.tsx`: 4 core friction points local businesses face ("The Silent Bounce", "Credibility Gap", "Booking Wall", "Invisible Entity").

### Task 5: The Core Philosophy (Discover → Trust → Convert)
- [ ] Create `src/components/FrameworkSection.tsx`: interactive 3-step pipeline with tabbed visual state showing how local traffic transforms into high-ticket revenue.

### Task 6: Interactive Concept Projects / Case Studies
- [ ] Create `src/data/caseStudies.ts` with structured data for AURA Dental, FORGE Athletic Club, and ATELIER Stone & Timber.
- [ ] Create `src/components/CaseStudiesSection.tsx` with interactive project switcher, problem/solution metrics, and full-screen live interactive preview modal for each project.

### Task 7: Services & 5-Step Launch Protocol
- [ ] Create `src/components/ServicesSection.tsx`: 5 capability cards with deliverables and clear business ROI.
- [ ] Create `src/components/ProcessSection.tsx`: 5-step transparent launch protocol (Discover, Blueprint, Craft, Code, Launch & Scale).

### Task 8: Why Us & The 3 Founders
- [ ] Create `src/components/WhyUsSection.tsx`: direct comparison matrix (MEDIA-TARDS vs Bloated Agencies vs Cheap Freelancers).
- [ ] Create `src/components/TeamSection.tsx`: authentic, high-conviction profiles for the 3 co-founders highlighting complementary skill sets.

### Task 9: Interactive Digital Audit & Scope Estimator
- [ ] Create `src/components/InteractiveAuditSection.tsx`: interactive step-by-step scope calculator and inquiry form with instant feedback and direct WhatsApp / email fallback.
- [ ] Create `src/components/Footer.tsx`: colophon, copyright, system status indicator, quick links.

### Task 10: Assembly, Verification & Polish
- [ ] Assemble all sections in `src/App.tsx`.
- [ ] Verify responsive layout across mobile, tablet, and desktop.
- [ ] Verify build with `npm run build` and ensure zero errors.
