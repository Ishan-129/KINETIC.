import React, { useState } from 'react';
import { Search, Shield, Zap, ArrowRight, Check, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';

export const FrameworkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      tagline: 'Help high-intent local buyers find you first.',
      icon: <Search className="w-6 h-6 text-accent-navy" />,
      iconBg: 'bg-accent-navy/10 border-accent-navy/20',
      topBorder: 'border-t-accent-navy',
      activeBg: 'bg-accent-navy/5',
      activeBorder: 'border-accent-navy',
      badgeColor: 'navy' as const,
      description:
        "Visibility isn't about vanity traffic; it's about being the first and fastest answer when someone in your city searches for your high-ticket service.",
      tactics: [
        'Local Schema Markup & Semantic HTML for Google ranking',
        'Sub-second mobile loading (100/100 Lighthouse performance)',
        'Unified Google Business profile & local directory consistency',
        'Zero-latency edge hosting for instant local delivery',
      ],
      outcome: '3.4x more organic neighborhood visibility without burning cash on ads',
    },
    {
      step: '02',
      title: 'TRUST',
      tagline: 'Give potential clients undeniable reasons to believe in you.',
      icon: <Shield className="w-6 h-6 text-accent-gold" />,
      iconBg: 'bg-accent-gold/10 border-accent-gold/20',
      topBorder: 'border-t-accent-gold',
      activeBg: 'bg-accent-gold/5',
      activeBorder: 'border-accent-gold',
      badgeColor: 'gold' as const,
      description:
        'In local business, trust is won or lost in the first 5 seconds. If your digital presence looks dated, customers assume your service is dated too.',
      tactics: [
        'Bespoke editorial typography and high-end visual systems',
        'Transparent service breakdowns and procedure visualizers',
        'Prominent verified outcome proof, before/afters, and reviews',
        'Psychological reassurance copy that answers doubts before they arise',
      ],
      outcome: 'Overcome client skepticism and command premium market pricing',
    },
    {
      step: '03',
      title: 'CONVERT',
      tagline: 'Turn digital attention into booked appointments and revenue.',
      icon: <Zap className="w-6 h-6 text-accent-coral" />,
      iconBg: 'bg-accent-coral/10 border-accent-coral/20',
      topBorder: 'border-t-accent-coral',
      activeBg: 'bg-accent-coral/5',
      activeBorder: 'border-accent-coral',
      badgeColor: 'coral' as const,
      description:
        "A great website isn't an art project—it's a pipeline. We dismantle every cognitive and technical barrier between visitor interest and confirmed action.",
      tactics: [
        'Frictionless 2-tap appointment and trial pass booking',
        'Instant direct WhatsApp, SMS, and calendar synchronization',
        'Mobile thumb-zone optimized calls to action',
        'Pre-qualification scope calculators that weed out tire-kickers',
      ],
      outcome: '+40% to +80% higher inquiry conversion rates from existing traffic',
    },
  ];

  return (
    <section id="framework" className="py-24 sm:py-32 bg-ivory-50 relative overflow-hidden border-t border-sand-300">
      {/* Subtle warm radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 radial-glow-gold opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Core Architecture"
          title="DISCOVER → TRUST → CONVERT"
          subtitle="We don't build digital brochures. We engineer an unbroken 3-stage pipeline designed to turn casual local searches into profitable client relationships."
        />

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {steps.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.title}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-8 border-t-4 border transition-all duration-300 flex flex-col justify-between shadow-warm-sm card-hover ${
                  isSelected
                    ? `${item.activeBg} ${item.activeBorder} ${item.topBorder} shadow-warm-md scale-[1.02]`
                    : `bg-white border-sand-300 ${item.topBorder} hover:shadow-warm`
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-ivory-200 border border-sand-300 text-slate-500">
                      STAGE {item.step}
                    </span>
                    <div className={`p-3 rounded-xl border ${item.iconBg}`}>
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 mb-4">{item.tagline}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-sand-300">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Core Mechanisms:
                  </div>
                  <ul className="space-y-2">
                    {item.tactics.slice(0, 2).map((tactic, tIdx) => (
                      <li key={tIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                        <span>{tactic}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-sand-300/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-accent-gold font-semibold">Explore Stage</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'translate-x-1 text-accent-gold' : 'text-slate-300'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep-Dive Viewer */}
        <div className="mt-10 bg-white border border-sand-300 rounded-2xl p-6 sm:p-10 shadow-warm-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sand-300 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/25 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Deep Dive Strategy</span>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Stage {steps[activeStep].step} — {steps[activeStep].title} Breakdown
                </h4>
              </div>
            </div>
            <Badge variant={steps[activeStep].badgeColor} size="md">
              Pipeline Pillar
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4">
                What We Implement In This Phase
              </h5>
              <div className="space-y-3">
                {steps[activeStep].tactics.map((tactic, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-100 border border-sand-300"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-gold/15 text-accent-gold text-xs font-mono shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-slate-700">{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ivory-100 border border-sand-300 rounded-2xl p-6 flex flex-col justify-center">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Measurable Business Outcome
              </span>
              <p className="text-lg font-bold text-slate-900 leading-snug">
                "{steps[activeStep].outcome}"
              </p>
              <div className="mt-6 pt-6 border-t border-sand-300 text-xs text-slate-400 flex items-center justify-between">
                <span>Part of our standard 2–3 week sprint</span>
                <span className="text-accent-forest font-mono flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-forest" />
                  Verified Framework
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
