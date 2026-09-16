export interface CaseStudy {
  id: string;
  name: string;
  client: string;
  category: string;
  year: string;
  badge: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  focusHighlights: {
    spec: string;
    label: string;
  }[];
  features: string[];
  deliverables: string[];
  color: string;
  accentColor: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aura-clinic",
    name: "AURA Dental & Facial Aesthetics",
    client: "AURA Aesthetics",
    category: "High-Ticket Healthcare",
    year: "2025",
    badge: "Studio Prototype",
    tagline: "Replacing clinical anxiety with calm, editorial booking flow.",
    summary: "A private aesthetic practice with world-class clinicians whose legacy site felt cold, clinical, and difficult to navigate on mobile devices.",
    challenge: "Visitors were intimidated by technical dental jargon, and booking required calling the front desk during business hours.",
    solution: "An editorial, calming aesthetic featuring transparent treatment guides, interactive smile visualizers, and a frictionless 2-tap appointment scheduler.",
    focusHighlights: [
      { spec: "Sub-1s", label: "Mobile First Contentful Paint" },
      { spec: "2-Tap", label: "Instant slot reservation flow" },
      { spec: "Zero", label: "Front-desk triage phone bottleneck" }
    ],
    features: [
      "Treatment Visualizer with transparent pricing tiers",
      "Instant 2-tap doctor & slot selection",
      "Patient anxiety reduction micro-copy & verified results",
      "Direct calendar sync & SMS intake confirmation"
    ],
    deliverables: ["Brand Direction", "Custom React Architecture", "Direct Calendar Integration", "Mobile Optimization"],
    color: "from-sky-500/20 via-sky-500/5 to-transparent",
    accentColor: "#38BDF8"
  },
  {
    id: "forge-athletics",
    name: "FORGE Athletic Club",
    client: "FORGE Club",
    category: "Boutique Performance & Fitness",
    year: "2025",
    badge: "Studio Prototype",
    tagline: "Turning gym hunters into trial members in under 60 seconds.",
    summary: "An elite strength and conditioning facility struggling to convert Instagram traffic into physical walkthroughs and trial members.",
    challenge: "Class timetables were buried inside downloadable PDFs and trial passes required an in-person front-desk form.",
    solution: "An interactive, filterable class matrix paired with a frictionless 1-click Free Day Pass checkout delivered straight to the prospect's mobile wallet.",
    focusHighlights: [
      { spec: "100/100", label: "Lighthouse Mobile Performance" },
      { spec: "1-Click", label: "Digital Day Pass delivery" },
      { spec: "Live", label: "Filterable session timetable" }
    ],
    features: [
      "Live interactive timetable with coach & intensity tags",
      "1-Click Digital Day Pass with instant mobile pass",
      "Membership ROI comparison calculator",
      "Coach roster with video intro reels"
    ],
    deliverables: ["Digital Experience", "Pass Generation Flow", "Lead Notification Engine", "Performance Tuning"],
    color: "from-amber-500/20 via-amber-500/5 to-transparent",
    accentColor: "#F59E0B"
  },
  {
    id: "atelier-studio",
    name: "ATELIER Stone & Timber",
    client: "ATELIER Studio",
    category: "Architecture & Bespoke Millwork",
    year: "2025",
    badge: "Studio Prototype",
    tagline: "Showcasing architectural craft with tactile, editorial precision.",
    summary: "A bespoke residential architecture and interior millwork studio whose prior website looked like a generic contractor template.",
    challenge: "Clients looking for uncompromising craft were greeted by a disorganized gallery of low-res photos with no scope qualification.",
    solution: "A gallery-style editorial narrative with tactile material inspection, blueprint case studies, and an interactive Project Scope Estimator.",
    focusHighlights: [
      { spec: "Editorial", label: "Full-bleed craft photography layout" },
      { spec: "Tactile", label: "Material & finish inspector" },
      { spec: "Pre-qualified", label: "Budget & scope estimator" }
    ],
    features: [
      "Tactile Material & Finish Inspector (Walnut, Brass, Carrara)",
      "Interactive Budget & Scope Pre-qualifier",
      "Full-screen project case study narratives with blueprints",
      "Direct WhatsApp concierge for high-intent inquiries"
    ],
    deliverables: ["Editorial Web System", "Budget Pre-qualifier", "Visual Direction", "Sub-second Edge Hosting"],
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    accentColor: "#10B981"
  }
];
