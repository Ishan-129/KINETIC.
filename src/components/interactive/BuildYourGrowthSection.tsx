import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, Globe, Share2, Target, Repeat } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

type GrowthChoice = 'website' | 'social' | 'leads' | 'all';

interface StepNode {
  title: string;
  sub: string;
  metric: string;
}

export const BuildYourGrowthSection: React.FC = () => {
  const [activeChoice, setActiveChoice] = useState<GrowthChoice>('all');

  const flows: Record<GrowthChoice, { title: string; subtitle: string; steps: StepNode[]; loopNote: string }> = {
    website: {
      title: 'CUSTOM REACT WEBSITE SYSTEM',
      subtitle: 'Engineered for sub-second mobile speed and 2-tap conversion.',
      steps: [
        { title: 'DISCOVERY', sub: 'Auditing your market & customer friction points', metric: 'Day 1–3' },
        { title: 'DESIGN', sub: 'Figma visual craft & typography hierarchy', metric: 'Day 4–8' },
        { title: 'BUILD', sub: 'Custom React code on global edge network', metric: 'Day 9–14' },
        { title: 'LAUNCH', sub: 'Custom domain, WhatsApp booking & Google Maps', metric: 'Day 15–20' },
      ],
      loopNote: 'Result: A high-trust digital storefront that converts passive browsers into booked enquiries.',
    },
    social: {
      title: 'ONGOING SOCIAL MEDIA SYSTEM',
      subtitle: 'Keeping your brand relevant, active, and top-of-mind without you touching it.',
      steps: [
        { title: 'STRATEGY', sub: 'Monthly content pillar & competitive trend analysis', metric: 'Week 1' },
        { title: 'CONTENT', sub: '12 bespoke feed designs & 8 high-energy reels', metric: 'Week 2' },
        { title: 'DISTRIBUTION', sub: 'Cross-platform publishing & prime-time scheduling', metric: 'Week 3' },
        { title: 'GROWTH', sub: 'DM/comment inquiry triage & monthly analytics', metric: 'Week 4' },
      ],
      loopNote: 'Result: Consistent authority that builds local trust before customers ever call.',
    },
    leads: {
      title: 'HIGH-INTENT LEAD ACQUISITION ENGINE',
      subtitle: 'Targeted ads that capture qualified customer demand in your specific city.',
      steps: [
        { title: 'AD CREATIVE', sub: 'Video & carousel ads speaking directly to buyer pain', metric: 'Day 1–3' },
        { title: 'LANDING DESTINATION', sub: 'Sub-second mobile capture page with direct forms', metric: 'Day 4–5' },
        { title: 'INSTANT LEAD', sub: 'Direct notification alert sent straight to your WhatsApp', metric: 'Instant' },
        { title: 'CONVERSION', sub: 'Retargeting non-buyers & optimizing cost-per-lead', metric: 'Ongoing' },
      ],
      loopNote: 'Result: Predictable monthly customer acquisition routed directly into your phone.',
    },
    all: {
      title: 'THE COMPLETE TRI-SYSTEM GROWTH LOOP',
      subtitle: 'Website + Social Content + Lead Generation synchronized into a single compounding flywheel.',
      steps: [
        { title: '1. DISCOVERY & ATTENTION', sub: 'Social Reels & Meta Ads generate local awareness', metric: 'Attract' },
        { title: '2. HIGH-TRUST WEBSITE', sub: 'Visitors land on custom React site & experience zero friction', metric: 'Convert' },
        { title: '3. INSTANT INTAKE', sub: 'WhatsApp integration closes high-intent bookings immediately', metric: 'Retain' },
        { title: '4. COMPOUNDING SCALE', sub: 'Customer reviews & retargeting feed continuous growth', metric: 'Multiply' },
      ],
      loopNote: 'Result: Complete market dominance. Your brand looks world-class, stays top-of-mind, and closes customers automatically.',
    },
  };

  const currentFlow = flows[activeChoice];

  return (
    <section className="py-24 sm:py-36 bg-[#080B12] text-[#ECEEF2] border-t border-white/[0.06] relative overflow-hidden" id="interactive-builder">
      {/* Subtle Studio Grid Overlay */}
      <div className="absolute inset-0 bg-studio-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C7FF3D] animate-pulse" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#C7FF3D] uppercase font-bold">
                INTERACTIVE GROWTH ARCHITECTURE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#ECEEF2] tracking-tight leading-none uppercase">
              What Does Your<br />
              Business Need?
            </h2>
          </div>
          <p className="text-[#8A92A6] text-base sm:text-lg max-w-md font-body leading-relaxed">
            Select a service or connect all three. Watch how MEDIA-TARDS engineers your custom growth engine from zero to launched.
          </p>
        </div>

        {/* ── Dynamic Growth Selector Tabs ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {[
            { id: 'website', label: '[ WEBSITE ]', icon: Globe, sub: '₹7,999 One-time' },
            { id: 'social', label: '[ SOCIAL ]', icon: Share2, sub: '₹5,999 / mo' },
            { id: 'leads', label: '[ LEADS ]', icon: Target, sub: '₹4,999 / mo' },
            { id: 'all', label: '[ ALL THREE ]', icon: Repeat, sub: 'Full Studio Loop' },
          ].map((item) => {
            const isSelected = activeChoice === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveChoice(item.id as GrowthChoice)}
                data-cursor="select"
                data-cursor-text={`BUILD ${item.id.toUpperCase()}`}
                className={`p-4 sm:p-6 text-left border transition-all duration-200 relative group ${
                  isSelected
                    ? 'bg-[#C7FF3D] text-[#080B12] border-[#C7FF3D] shadow-acid-glow scale-[1.01]'
                    : 'bg-[#0D1117] text-[#8A92A6] border-white/[0.08] hover:border-white/[0.20] hover:text-[#ECEEF2] hover:bg-[#13181F]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-[#080B12]' : 'text-[#C7FF3D]'}`} />
                  {isSelected && (
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-[#080B12] text-[#C7FF3D]">
                      ACTIVE
                    </span>
                  )}
                </div>

                <div className="font-mono text-sm sm:text-base font-extrabold tracking-wider mb-1">
                  {item.label}
                </div>
                <div className={`font-mono text-[11px] ${isSelected ? 'text-[#080B12]/80 font-bold' : 'text-[#525C71]'}`}>
                  {item.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Interactive Workflow Visualizer Box ── */}
        <div className="bg-[#0D1117] border border-white/[0.08] p-6 sm:p-12 relative shadow-panel-elevated">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChoice}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Workflow Metadata */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-white/[0.06] gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C7FF3D] font-bold block mb-1">
                    ENGINE ARCHITECTURE //
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#ECEEF2] tracking-tight uppercase">
                    {currentFlow.title}
                  </h3>
                  <p className="text-sm text-[#8A92A6] mt-1 max-w-xl font-body">
                    {currentFlow.subtitle}
                  </p>
                </div>

                <div className="font-mono text-xs text-[#C7FF3D] bg-[#C7FF3D]/10 border border-[#C7FF3D]/30 px-3.5 py-2 font-bold shrink-0">
                  {activeChoice === 'all' ? '● SYNCHRONIZED LOOP' : '● MODULAR PIPELINE'}
                </div>
              </div>

              {/* ── Visual Node Pipeline Steps ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {currentFlow.steps.map((step, idx) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                    className="p-5 bg-[#080B12] border border-white/[0.08] relative group hover:border-[#C7FF3D]/40 transition-colors"
                  >
                    {/* Top Step Number & Stage */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] font-mono text-xs">
                      <span className="text-[#C7FF3D] font-bold">0{idx + 1}</span>
                      <span className="px-2 py-0.5 bg-white/[0.06] text-[10px] font-bold text-[#ECEEF2] uppercase font-mono">
                        {step.metric}
                      </span>
                    </div>

                    <div className="font-display text-lg font-extrabold text-[#ECEEF2] tracking-tight mb-2">
                      {step.title}
                    </div>

                    <p className="text-xs text-[#8A92A6] font-mono leading-relaxed">
                      {step.sub}
                    </p>

                    {/* Step Connector Indicator for larger screens */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#C7FF3D] font-mono text-xs">
                        →
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* End Statement & Growth Outcome */}
              <div className="mt-10 p-6 bg-[#080B12] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#C7FF3D] shrink-0" />
                  <p className="font-mono text-xs sm:text-sm text-[#ECEEF2]">
                    {currentFlow.loopNote}
                  </p>
                </div>

                <span className="font-mono text-xs text-[#C7FF3D] font-bold uppercase shrink-0">
                  Ready to deploy ↗
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Signature Brand Punchline & CTA ── */}
          <div className="mt-14 pt-10 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs font-bold text-[#C7FF3D] tracking-[0.25em] uppercase block mb-2">
                THE MEDIA-TARDS STANDARD
              </span>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#ECEEF2] tracking-tighter uppercase">
                LOOKS GOOD.<br />
                <span className="text-[#C7FF3D]">WORKS HARDER.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <MagneticButton
                as="a"
                href="#audit"
                cursorText="START PROJECT ↗"
                className="w-full sm:w-auto px-8 py-4.5 bg-[#C7FF3D] text-[#080B12] font-mono font-black text-xs uppercase tracking-widest hover:bg-white transition-colors duration-200 shadow-acid-glow"
              >
                <div className="flex items-center gap-3">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </MagneticButton>

              <a
                href="#pricing"
                data-cursor="explore"
                className="w-full sm:w-auto px-6 py-4 text-center font-mono text-xs uppercase tracking-wider font-bold text-[#8A92A6] border border-white/[0.12] hover:border-[#C7FF3D]/40 hover:text-[#ECEEF2] transition-colors"
              >
                View Pricing Tiers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildYourGrowthSection;

