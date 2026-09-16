import React from 'react';
import { Check, X } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const comparison = [
    {
      feature: 'Who Actually Builds Your Site',
      mediatards: 'Direct founders (Strategy, Design & Code leads)',
      agency: 'Junior interns & outsourced offshore devs',
      freelancer: 'Solo freelancer juggling 12 gigs',
    },
    {
      feature: 'Delivery Timeline',
      mediatards: '2–3 weeks guaranteed rapid sprint',
      agency: '3–6 months bloated committee delays',
      freelancer: 'Unpredictable, frequent ghosting',
    },
    {
      feature: 'Technology & Speed',
      mediatards: 'Custom React & Vite (100/100 Lighthouse)',
      agency: 'Sluggish legacy WordPress with 40 plugins',
      freelancer: 'Generic Wix / Squarespace / Elementor template',
    },
    {
      feature: 'Conversion & ROI Focus',
      mediatards: 'Mathematical focus on bookings and revenue',
      agency: 'Vague design awards and corporate jargon',
      freelancer: 'Only cares about making a basic page live',
    },
    {
      feature: 'Communication & Availability',
      mediatards: 'Direct WhatsApp with the actual builders',
      agency: 'Layer of account managers playing telephone',
      freelancer: 'Slow replies, disappearing after payment',
    },
    {
      feature: 'Pricing Transparency',
      mediatards: 'Honest fixed-price sprint, zero hidden fees',
      agency: '$15k–$30k minimums with retainers',
      freelancer: 'Cheap upfront, breaks later with zero support',
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#FDFCF9] border-t border-sand-300/80 relative" id="why-us">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-sand-400/60">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block mb-3">
              The Difference
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-none">
              Why Choose Founders Directly?
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            No marble lobbies or 40 middle managers on payroll. You get senior craft, obsessive attention, and direct execution on every pixel.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              num: '01',
              title: 'Direct Founder Attention',
              body: 'At big agencies, senior partners pitch you, then hand your account to junior graduates. At MEDIA-TARDS, the 3 founders design, engineer, and optimize your project personally.',
            },
            {
              num: '02',
              title: '2–3 Week Sprints',
              body: 'We eliminate endless discovery workshops and bureaucratic revisions. We launch a fully customized, responsive, high-converting digital engine in weeks, not quarters.',
            },
            {
              num: '03',
              title: 'Modern Engineering',
              body: "We don't deploy bloated, hackable WordPress themes. We build cleanly with React, TypeScript, and edge hosting, giving your business an unmatched speed advantage.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-ivory-50 border border-sand-300/80 p-8 rounded-xl flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-slate-400 tracking-widest uppercase block mb-4">
                  {pillar.num}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-950 mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-ivory-50 border border-sand-300/80 rounded-xl overflow-hidden shadow-warm-sm">
          <div className="px-6 sm:px-8 py-5 border-b border-sand-300/80 flex items-center justify-between">
            <h4 className="font-display text-lg font-bold text-slate-950">Studio Model Comparison</h4>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Transparency</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-sand-300/80 bg-ivory-100 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-slate-950 font-bold bg-accent-gold/10">
                    MEDIA-TARDS
                  </th>
                  <th className="p-4 sm:p-5 text-slate-500">Traditional Agencies</th>
                  <th className="p-4 sm:p-5 text-slate-500">Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-300/60">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-950 bg-accent-gold/5">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent-gold shrink-0" />
                        <span>{row.mediatards}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0" />
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

