export interface CaseStudy {
  id: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  keyOutcomes: {
    metric: string;
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
    category: "High-Ticket Healthcare / Aesthetics",
    badge: "Concept Project • Medical",
    tagline: "Replacing clinical anxiety with calm, premium appointment flow.",
    summary: "A private aesthetic practice with world-class clinicians whose legacy site felt cold, clinical, and difficult to navigate on mobile devices.",
    challenge: "Over 68% of mobile visitors dropped off before reaching the consultation form. Patients felt intimidated by technical dental jargon, and booking required a multi-step phone call during office hours.",
    solution: "Engineered an editorial, calming aesthetic featuring transparent treatment guides, interactive smile visualizers, and a frictionless 2-tap appointment scheduler synced directly to clinic calendars.",
    keyOutcomes: [
      { metric: "+44%", label: "Mobile booking conversion" },
      { metric: "0.8s", label: "Mobile First Contentful Paint" },
      { metric: "-70%", label: "Unqualified phone triage time" }
    ],
    features: [
      "Treatment Visualizer with transparent pricing tiers",
      "Instant 2-tap doctor & slot selection",
      "Patient anxiety reduction micro-copy & verified results",
      "Automated SMS confirmation & intake form sync"
    ],
    deliverables: ["Brand Identity", "Custom React Application", "Direct Calendar Integration", "Local SEO Architecture"],
    color: "from-sky-500/20 via-sky-500/5 to-transparent",
    accentColor: "#38BDF8"
  },
  {
    id: "forge-athletics",
    name: "FORGE Athletic Club",
    category: "Boutique Fitness & Performance",
    badge: "Concept Project • Fitness",
    tagline: "Turning neighborhood gym hunters into registered trial members in under 60 seconds.",
    summary: "An elite strength and conditioning facility struggling to convert Instagram traffic into physical walkthroughs and high-margin membership sales.",
    challenge: "Class timetables were buried inside a downloadable PDF. Visitors couldn't tell which session matched their fitness level, and trial passes required an in-person front-desk registration.",
    solution: "Replaced the PDF with an interactive, filterable class matrix and built a frictionless 1-click Free Day Pass checkout that delivers an instant digital wallet pass to the prospect's phone.",
    keyOutcomes: [
      { metric: "3.2x", label: "Increase in trial pass claims" },
      { metric: "99/100", label: "Mobile Performance Score" },
      { metric: "48 hrs", label: "From visitor to gym floor" }
    ],
    features: [
      "Live interactive timetable with coach & intensity tags",
      "1-Click Digital Day Pass with instant Apple/Google Wallet pass",
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
    category: "Custom Architecture & High-End Renovation",
    badge: "Concept Project • Craftsmanship",
    tagline: "Showcasing $100k+ architectural craft with tactile, editorial precision.",
    summary: "A bespoke residential architecture and interior millwork studio whose prior website looked like a generic template contractor page.",
    challenge: "Wealthy homeowners and commercial developers were looking for proof of uncompromising quality, but the studio's portfolio was a disorganized gallery of low-res mobile photos.",
    solution: "Constructed an immersive, gallery-style narrative with before/after material reveals, architectural detail inspections, and an interactive Project Scope Estimator that pre-qualifies budgets before consultations.",
    keyOutcomes: [
      { metric: "+65%", label: "High-budget consultation leads" },
      { metric: "$120k", label: "Average qualified lead project size" },
      { metric: "100%", label: "Elimination of low-budget tire-kickers" }
    ],
    features: [
      "Tactile Material & Finish Inspector (Walnut, Brass, Carrara)",
      "Interactive Budget & Scope Pre-qualifier",
      "Full-screen project case study narratives with blueprints",
      "Direct WhatsApp concierge for high-net-worth inquiries"
    ],
    deliverables: ["Editorial Web System", "Budget Pre-qualifier", "Visual Asset Direction", "Local Organic SEO"],
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    accentColor: "#10B981"
  }
];
