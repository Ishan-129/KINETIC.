import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'TALK',
      text: 'We get on a 20-minute call, understand your business, and agree on the exact deliverables.',
    },
    {
      num: '02',
      title: 'BUILD',
      text: 'A 2–3 week rapid sprint. Direct design and code written personally by the 3 founders.',
    },
    {
      num: '03',
      title: 'LAUNCH',
      text: 'Domain connected, mobile verified, WhatsApp routing active, ready to take real customer bookings.',
    },
    {
      num: '04',
      title: 'GROW',
      text: 'Consistent social content or targeted lead generation ads to keep the pipeline moving.',
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-ivory-100 border-t border-slate-900 relative" id="process">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-slate-900 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block mb-3">
              Workflow / How We Work
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-none uppercase">
              The 4-Step Sprint.
            </h2>
          </div>
          <p className="text-slate-700 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            Fast, founder-led execution without agency bureaucracy, endless discovery decks, or months of delays.
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-16 border-b border-sand-400/80">
          {steps.map((step) => (
            <div key={step.num} className="space-y-4">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-950 block">
                {step.num}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Note & CTA */}
        <div className="pt-10 sm:pt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-mono text-sm sm:text-base text-slate-900 font-semibold">
            Typical website projects launch in <span className="text-slate-950 underline decoration-accent-gold decoration-2 underline-offset-4">2–3 weeks</span>.
          </p>

          <a
            href="#audit"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-slate-950 hover:text-accent-gold transition-colors"
          >
            <span>Discuss your timeline</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

