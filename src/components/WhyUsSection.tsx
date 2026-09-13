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
    <section id="why-us" className="py-24 sm:py-32 bg-ivory-50 border-t border-sand-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Honest Differentiator"
          title="Why Choose a Hungry Modern Studio Over a Legacy Agency?"
          subtitle="We don't have marble agency lobbies or 40 middle managers on payroll. You get senior-level craft, obsessive attention, and direct founder execution on every pixel."
        />

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: <Users className="w-5 h-5 text-accent-navy" />,
              iconBg: 'bg-accent-navy/8 border-accent-navy/20',
              title: 'Direct Founder Attention',
              body: 'At big agencies, senior partners pitch you, then hand your account to junior graduates. At Kinetic, the 3 founders design, engineer, and optimize your project personally.',
            },
            {
              icon: <Zap className="w-5 h-5 text-accent-gold" />,
              iconBg: 'bg-accent-gold/8 border-accent-gold/20',
              title: '21-Day High-Velocity Sprints',
              body: 'We eliminate endless discovery workshops and bureaucratic revisions. We launch a fully customized, responsive, high-converting digital engine in weeks, not quarters.',
            },
            {
              icon: <Code className="w-5 h-5 text-accent-forest" />,
              iconBg: 'bg-accent-forest/8 border-accent-forest/20',
              title: 'Modern Engineering Standard',
              body: "We don't deploy bloated, hackable WordPress themes. We build cleanly with React, TypeScript, and edge hosting, giving your business an unmatched speed advantage.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-sand-300 p-6 rounded-2xl shadow-warm-sm card-hover"
            >
              <div className={`p-3 rounded-xl border ${pillar.iconBg} w-fit mb-4`}>{pillar.icon}</div>
              <h4 className="text-lg font-extrabold text-slate-900 mb-2">{pillar.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-sand-300 rounded-2xl overflow-hidden shadow-warm-lg">
          <div className="px-6 py-4 border-b border-sand-300 bg-ivory-100 flex items-center justify-between">
            <h4 className="font-extrabold text-slate-900 text-base">Agency Model Comparison</h4>
            <span className="text-xs font-mono text-slate-400">Unfiltered Transparency</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-sand-300 bg-ivory-50 font-mono text-[11px] uppercase text-slate-400">
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-accent-gold bg-accent-gold/4 border-x border-accent-gold/15">
                    KINETIC STUDIO
                  </th>
                  <th className="p-4 sm:p-5">Traditional Agencies</th>
                  <th className="p-4 sm:p-5">Cheap Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-300">
                {comparison.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-ivory-100 transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-800">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-800 bg-accent-gold/4 border-x border-accent-gold/15">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent-forest shrink-0" />
                        <span>{row.kinetic}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
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
