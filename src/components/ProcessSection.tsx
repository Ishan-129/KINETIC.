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
      icon: <Search className="w-5 h-5 text-sky-400" />,
      detail: 'We interview you about your highest-margin services, average ticket values, current drop-off points, and neighborhood competitors. No guesswork.',
      duration: 'Days 1–3',
    },
    {
      num: '02',
      title: 'Conversion Blueprint',
      subtitle: 'Mapping the customer journey and wireframe architecture.',
      icon: <Compass className="w-5 h-5 text-amber-400" />,
      detail: 'We architect the entire site hierarchy around the Discover → Trust → Convert framework. Every button, heading, and form has a mathematical purpose.',
      duration: 'Days 4–7',
    },
    {
      num: '03',
      title: 'Visual Craft',
      subtitle: 'Designing high-fidelity, bespoke interfaces.',
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      detail: 'We craft a distinctive, modern visual identity—typography, color theory, and tactile interactions that make your business look like the definitive market leader.',
      duration: 'Days 8–12',
    },
    {
      num: '04',
      title: 'Precision Engineering',
      subtitle: 'Developing ultra-fast, responsive custom React code.',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      detail: 'We hand-code your site with React, TypeScript, and Tailwind. Zero plugin bloat, sub-second load times, and flawless mobile touch ergonomics.',
      duration: 'Days 13–18',
    },
    {
      num: '05',
      title: 'Launch & Optimize',
      subtitle: 'Deployment, local schema indexing, and conversion tracking.',
      icon: <Rocket className="w-5 h-5 text-rose-400" />,
      detail: 'We connect your domain, configure Google search indexing, verify SSL security, and test automated lead notifications to ensure zero leaks.',
      duration: 'Days 19–21',
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-obsidian-900 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The 5-Step Launch Protocol"
          title="From Outdated Presence to High-Converting Asset in 21 Days"
          subtitle="A transparent, founder-led sprint designed to eliminate agency delays and deliver measurable commercial results without the usual 3-month runaround."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-obsidian-950 border border-surface-border hover:border-slate-700 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-slate-600 group-hover:text-brand-cyan transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-obsidian-900 border border-surface-border group-hover:border-brand-cyan/40 transition-colors">
                    {step.icon}
                  </div>
                </div>

                <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-800 border border-surface-border text-slate-400 mb-2">
                  {step.duration}
                </div>

                <h4 className="text-lg font-bold text-white tracking-tight mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-brand-cyan font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border/40 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Phase Completed</span>
                <span className="text-emerald-400 font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-obsidian-950 via-obsidian-850 to-obsidian-950 border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Ready to schedule your 21-day digital transformation sprint?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We only take on 2 client projects at a time to ensure uninterrupted founder focus.
            </p>
          </div>

          <Button
            asLink
            href="#audit"
            variant="glow"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Apply for Next Sprint
          </Button>
        </div>
      </div>
    </section>
  );
};
