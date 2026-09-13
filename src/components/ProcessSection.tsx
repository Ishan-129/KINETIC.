import React from 'react';
import { Search, Compass, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Deep Discovery',
      subtitle: 'Understanding your business economics, clients, and competitors.',
      icon: <Search className="w-5 h-5" />,
      iconColor: 'text-accent-navy',
      numBg: 'bg-accent-navy text-white',
      detail:
        'We interview you about your highest-margin services, average ticket values, current drop-off points, and neighborhood competitors. No guesswork.',
      duration: 'Days 1–3',
    },
    {
      num: '02',
      title: 'Conversion Blueprint',
      subtitle: 'Mapping the customer journey and wireframe architecture.',
      icon: <Compass className="w-5 h-5" />,
      iconColor: 'text-accent-gold',
      numBg: 'bg-accent-gold text-white',
      detail:
        'We architect the entire site hierarchy around the Discover → Trust → Convert framework. Every button, heading, and form has a mathematical purpose.',
      duration: 'Days 4–7',
    },
    {
      num: '03',
      title: 'Visual Craft',
      subtitle: 'Designing high-fidelity, bespoke interfaces.',
      icon: <Palette className="w-5 h-5" />,
      iconColor: 'text-purple-600',
      numBg: 'bg-purple-600 text-white',
      detail:
        'We craft a distinctive, modern visual identity—typography, color theory, and tactile interactions that make your business look like the definitive market leader.',
      duration: 'Days 8–12',
    },
    {
      num: '04',
      title: 'Precision Engineering',
      subtitle: 'Developing ultra-fast, responsive custom React code.',
      icon: <Code2 className="w-5 h-5" />,
      iconColor: 'text-accent-forest',
      numBg: 'bg-accent-forest text-white',
      detail:
        'We hand-code your site with React, TypeScript, and Tailwind. Zero plugin bloat, sub-second load times, and flawless mobile touch ergonomics.',
      duration: 'Days 13–18',
    },
    {
      num: '05',
      title: 'Launch & Optimize',
      subtitle: 'Deployment, local schema indexing, and conversion tracking.',
      icon: <Rocket className="w-5 h-5" />,
      iconColor: 'text-accent-coral',
      numBg: 'bg-accent-coral text-white',
      detail:
        'We connect your domain, configure Google search indexing, verify SSL security, and test automated lead notifications to ensure zero leaks.',
      duration: 'Days 19–21',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-ivory-100 border-t border-sand-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The 5-Step Launch Protocol"
          title="From Outdated Presence to High-Converting Asset in 21 Days"
          subtitle="A transparent, founder-led sprint designed to eliminate agency delays and deliver measurable commercial results without the usual 3-month runaround."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent-navy via-accent-gold to-accent-coral opacity-20 z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-sand-300 hover:border-sand-400 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 card-hover shadow-warm-sm relative z-10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-9 h-9 rounded-xl ${step.numBg} flex items-center justify-center font-mono font-extrabold text-sm shadow-warm-sm`}>
                    {step.num}
                  </span>
                  <div className={`p-2 rounded-xl bg-ivory-100 border border-sand-300 ${step.iconColor}`}>
                    {step.icon}
                  </div>
                </div>

                <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-md bg-ivory-200 border border-sand-300 text-slate-500 mb-2">
                  {step.duration}
                </div>

                <h4 className="text-lg font-extrabold text-slate-900 tracking-tight mb-1">{step.title}</h4>
                <p className="text-xs text-accent-gold font-semibold mb-3">{step.subtitle}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{step.detail}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand-300 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Phase Completed</span>
                <span className="text-accent-forest font-bold text-sm">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner — Navy dark contrast */}
        <div className="mt-12 bg-accent-navy rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-xl relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Ready to schedule your 21-day digital transformation sprint?
            </h4>
            <p className="text-sm text-blue-200">
              We only take on 2 client projects at a time to ensure uninterrupted founder focus.
            </p>
          </div>

          <Button
            asLink
            href="#audit"
            variant="glow"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 relative z-10"
          >
            Apply for Next Sprint
          </Button>
        </div>
      </div>
    </section>
  );
};
