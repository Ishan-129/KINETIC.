import React from 'react';
import { Check, X, Zap, Users, Code } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

export const WhyUsSection: React.FC = () => {
  const comparison = [
    {
      feature: 'Who Actually Builds Your Site',
      kinetic: 'Direct founders (Strategy, Design & Code leads)',
      agency: 'Junior interns & outsourced offshore devs',
      freelancer: 'Solo freelancer juggling 12 gigs',
    },
    {
      feature: 'Delivery Timeline',
      kinetic: '2–3 weeks guaranteed rapid sprint',
      agency: '3–6 months bloated committee delays',
      freelancer: 'Unpredictable, frequent ghosting',
    },
    {
      feature: 'Technology & Speed',
      kinetic: 'Custom React & Vite (100/100 Lighthouse)',
      agency: 'Sluggish legacy WordPress with 40 plugins',
      freelancer: 'Generic Wix / Squarespace / Elementor template',
    },
    {
      feature: 'Conversion & ROI Focus',
      kinetic: 'Mathematical focus on bookings and revenue',
      agency: 'Vague design awards and corporate jargon',
      freelancer: 'Only cares about making a basic page live',
    },
    {
      feature: 'Communication & Availability',
      kinetic: 'Direct WhatsApp/Slack with the actual builders',
      agency: 'Layer of account managers playing telephone',
      freelancer: 'Slow replies, disappearing after payment',
    },
    {
      feature: 'Pricing Transparency',
      kinetic: 'Honest fixed-price sprint, zero hidden fees',
      agency: '$15k–$30k minimums with retainers',
      freelancer: 'Cheap upfront, breaks later with zero support',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-obsidian-950 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Honest Differentiator"
          title="Why Choose a Hungry Modern Studio Over a Legacy Agency?"
          subtitle="We don't have marble agency lobbies or 40 middle managers on payroll. You get senior-level craft, obsessive attention, and direct founder execution on every pixel."
        />

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-obsidian-900 border border-surface-border p-6 rounded-2xl">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Direct Founder Attention</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              At big agencies, senior partners pitch you, then hand your account to junior graduates. At Kinetic, the 3 founders design, engineer, and optimize your project personally.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-surface-border p-6 rounded-2xl">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">21-Day High-Velocity Sprints</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We eliminate endless discovery workshops and bureaucratic revisions. We launch a fully customized, responsive, high-converting digital engine in weeks, not quarters.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-surface-border p-6 rounded-2xl">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Modern Engineering Standard</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We don't deploy bloated, hackable WordPress themes. We build cleanly with React, TypeScript, and edge hosting, giving your business an unmatched speed advantage.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-obsidian-900 border border-surface-border rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4 border-b border-surface-border bg-obsidian-850 flex items-center justify-between">
            <h4 className="font-bold text-white text-base">Agency Model Comparison</h4>
            <span className="text-xs font-mono text-slate-400">Unfiltered Transparency</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-surface-border bg-obsidian-950/60 font-mono text-[11px] uppercase text-slate-400">
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-brand-cyan bg-sky-500/5">KINETIC STUDIO</th>
                  <th className="p-4 sm:p-5">Traditional Agencies</th>
                  <th className="p-4 sm:p-5">Cheap Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-obsidian-800/40 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-slate-200 bg-sky-500/5 border-x border-sky-500/10">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.kinetic}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
