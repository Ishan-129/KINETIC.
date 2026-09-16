import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Cpu, ArrowRight } from 'lucide-react';

interface Station {
  id: string;
  num: string;
  tag: string;
  name: string;
  headline: string;
  description: string;
  price: string;
  billing: string;
  turnaround: string;
  workflow: { step: string; label: string; detail: string }[];
  deliverables: string[];
  techStack: string[];
}

export const StudioStationsSection: React.FC = () => {
  const [activeStationId, setActiveStationId] = useState<string>('build');
  const [activeStepIdx, setActiveStepIdx] = useState<number>(1);

  const stations: Station[] = [
    {
      id: 'build',
      num: '01',
      tag: 'WEBSITE CRAFT & ARCHITECTURE',
      name: 'Complete Website Pack',
      headline: 'We build custom React sites that look legit and convert visitors.',
      description: 'No clunky WordPress plugins. No generic site builder templates that look like everyone else. We handcraft custom web applications with sub-second mobile speed, clear typography, and instant WhatsApp booking.',
      price: '₹7,999',
      billing: 'One-time payment',
      turnaround: '2–3 weeks rapid sprint',
      workflow: [
        { step: '01', label: 'DISCOVERY', detail: 'Positioning & visitor psychological triggers' },
        { step: '02', label: 'DESIGN', detail: 'Custom Figma art direction & typography' },
        { step: '03', label: 'DEVELOPMENT', detail: 'Clean React code on global edge CDN' },
        { step: '04', label: 'LAUNCH', detail: 'Domain sync, WhatsApp routing & SEO' },
      ],
      deliverables: [
        'Custom design tailored to your brand identity',
        '1–3 high-converting core pages',
        'Sub-second mobile loading speed (100/100 Lighthouse)',
        'Direct WhatsApp click-to-chat button',
        'Contact & enquiry capture form with email alerts',
        'Google Maps & local search schema setup',
        'Custom domain setup & free SSL certificate',
        'Handcrafted directly by the 3 founders',
      ],
      techStack: ['React 18', 'Tailwind CSS', 'Vite Edge', 'Cloudflare DNS'],
    },
    {
      id: 'attention',
      num: '02',
      tag: 'CONTENT, REELS & COMMUNITY',
      name: 'Full Social Media Management',
      headline: 'We produce the content and manage your feed so your brand stays alive.',
      description: 'Most businesses abandon their social media after three weeks because creating content is grueling. We plan your monthly calendar, design sharp feed graphics, edit high-energy vertical reels, write punchy copy, and publish consistently.',
      price: '₹5,999',
      billing: 'Starting per month',
      turnaround: 'Continuous monthly engine',
      workflow: [
        { step: '01', label: 'STRATEGY', detail: 'Competitor audit & monthly content calendar' },
        { step: '02', label: 'CONTENT', detail: '12 branded posts & 8 vertical video reels' },
        { step: '03', label: 'DISTRIBUTION', detail: 'Cross-platform scheduling & hashtag optimization' },
        { step: '04', label: 'GROWTH', detail: 'Inquiry response, analytics review & iteration' },
      ],
      deliverables: [
        'Monthly content strategy & content calendar',
        '12 high-resolution branded feed posts',
        '8 short-form vertical reels with captions',
        'Sharp copy, relevant hashtags & posting schedule',
        'Cross-posting to Instagram & Facebook',
        'Basic community inquiry and comment triage',
        'Local competitor & industry trend research',
        'Monthly analytics & performance recap',
      ],
      techStack: ['CapCut Pro', 'Adobe Creative', 'Meta Business Suite', 'Metricool'],
    },
    {
      id: 'acquisition',
      num: '03',
      tag: 'PAID CAMPAIGNS & ACQUISITION',
      name: 'Marketing + Lead Generation Ads',
      headline: 'We run targeted ads that bring paying local customers into your door.',
      description: 'Turn your advertising budget into qualified enquiries. We design high-performing ad creatives, pinpoint high-intent local buyers within your radius, and route leads straight to your WhatsApp or inbox.',
      price: '₹4,999',
      billing: 'Starting per month (+ ad spend)',
      turnaround: 'Live within 5 business days',
      workflow: [
        { step: '01', label: 'AD', detail: 'High-converting video & carousel creatives' },
        { step: '02', label: 'LANDING PAGE', detail: 'Frictionless mobile capture destination' },
        { step: '03', label: 'LEAD', detail: 'Instant WhatsApp & email lead alerts' },
        { step: '04', label: 'CONVERSION', detail: 'Retargeting pixel & cost-per-lead tuning' },
      ],
      deliverables: [
        'Meta (Instagram / Facebook) campaign architecture',
        'Neighborhood radius & geo-targeted demographics',
        'Ad creative design & conversion copywriting',
        'Direct WhatsApp lead capture routing',
        'Instant lead notification engine to your phone',
        'A/B testing to continuously drive down cost per lead',
        'Retargeting interested visitors who didn\'t convert',
        'Clear weekly & monthly performance breakdown',
      ],
      techStack: ['Meta Ads Manager', 'WhatsApp API', 'Google Tag Manager', 'Custom Funnels'],
    },
  ];

  const currentStation = stations.find((s) => s.id === activeStationId) || stations[0];

  return (
    <section className="py-24 sm:py-36 bg-studio-bg border-t border-studio-ink relative" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-studio-ink flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-studio-gold" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-studio-ink/70 uppercase font-bold">
                STUDIO STATIONS / WHAT WE DO
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-studio-ink tracking-tight leading-none uppercase">
              Three Stations.<br />
              Zero Fluff.
            </h2>
          </div>
          <p className="text-studio-ink/80 text-base sm:text-lg max-w-md font-medium leading-relaxed">
            We don't offer 40 confusing services. We build websites that establish credibility, run socials that keep you relevant, and deploy ads that capture clients.
          </p>
        </div>

        {/* Interactive Studio Station Switcher Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {stations.map((station) => {
            const isActive = station.id === activeStationId;
            return (
              <button
                key={station.id}
                onClick={() => {
                  setActiveStationId(station.id);
                  setActiveStepIdx(1);
                }}
                data-cursor="explore"
                data-cursor-text={`STATION ${station.num}`}
                className={`p-5 text-left border transition-all duration-200 relative ${
                  isActive
                    ? 'bg-studio-ink text-[#F5F2EB] border-studio-ink shadow-studio-md'
                    : 'bg-[#F5F2EB] text-studio-ink border-studio-ink/30 hover:border-studio-ink hover:bg-studio-bg-alt'
                }`}
              >
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-current/20">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase">
                    STATION {station.num}
                  </span>
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-studio-gold text-studio-ink' : 'bg-studio-ink/10 text-studio-ink'
                    }`}
                  >
                    {station.price}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight uppercase">
                  {station.name}
                </h3>
                <span className="font-mono text-[11px] opacity-70 block mt-1 tracking-wider uppercase">
                  {station.tag}
                </span>

                {isActive && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-studio-ink rotate-45 border-r border-b border-studio-ink hidden md:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Station Workspace Canvas (Interactive Station Details & Live Workflow Diagram) */}
        <div className="bg-[#F5F2EB] border-2 border-studio-ink p-6 sm:p-10 shadow-studio-lg relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStation.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Top Station Header & Pricing */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-studio-ink/20">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-studio-ink">
                      {currentStation.num}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-studio-gold">
                      // {currentStation.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-studio-ink tracking-tight uppercase mb-3">
                    {currentStation.name}
                  </h3>
                  <p className="text-base sm:text-lg text-studio-ink/80 font-medium leading-relaxed">
                    {currentStation.description}
                  </p>
                </div>

                {/* Pricing & Guarantee Box */}
                <div className="p-6 bg-studio-ink text-[#F5F2EB] border border-studio-ink min-w-[280px] shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-acid font-bold block mb-1">
                    INVESTMENT & TIMELINE
                  </span>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-4xl font-black text-[#F5F2EB]">
                      {currentStation.price}
                    </span>
                    <span className="font-mono text-xs text-studio-gold font-bold">
                      {currentStation.billing}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-[#F5F2EB]/70 border-t border-white/15 pt-3 mt-3 space-y-1">
                    <div>• Turnaround: <span className="text-white font-semibold">{currentStation.turnaround}</span></div>
                    <div>• Execution: <span className="text-white font-semibold">100% Direct Founders</span></div>
                  </div>
                </div>
              </div>

              {/* ── Signature Interactive Diagram Construction System ── */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-studio-ink flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-studio-gold" />
                    Interactive Workflow Diagram (Click steps to inspect)
                  </span>
                  <span className="font-mono text-[11px] text-studio-ink/60 uppercase hidden sm:inline">
                    Step {activeStepIdx + 1} of 4
                  </span>
                </div>

                {/* Animated Diagram Steps Pipeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {currentStation.workflow.map((item, idx) => {
                    const isSelected = activeStepIdx === idx;
                    return (
                      <div
                        key={item.step}
                        onClick={() => setActiveStepIdx(idx)}
                        data-cursor="select"
                        data-cursor-text={`PHASE ${item.step}`}
                        className={`p-4 border cursor-pointer transition-all duration-200 relative ${
                          isSelected
                            ? 'bg-studio-ink text-[#F5F2EB] border-studio-ink shadow-studio-sm'
                            : 'bg-white border-studio-ink/20 hover:border-studio-ink text-studio-ink'
                        }`}
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-current/20 font-mono text-xs font-bold">
                          <span>PHASE {item.step}</span>
                          {isSelected ? (
                            <span className="text-accent-acid font-extrabold animate-pulse">● ACTIVE</span>
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                          )}
                        </div>

                        <div className="font-display text-lg font-black tracking-tight mb-1">
                          {item.label}
                        </div>
                        <p className={`text-xs leading-snug font-mono ${isSelected ? 'text-[#F5F2EB]/80' : 'text-studio-ink/70'}`}>
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Deliverables Checklist & Tech Stack */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-studio-ink/20">
                <div className="lg:col-span-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-studio-ink font-bold block mb-4">
                    Exact Deliverables Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-studio-ink">
                    {currentStation.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-studio-gold mt-0.5 shrink-0" />
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white border border-studio-ink/20 p-5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-studio-ink/70 font-bold block mb-3">
                      Studio Tooling & Stack:
                    </span>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentStation.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-studio-bg border border-studio-ink/20 font-mono text-[11px] font-bold text-studio-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#audit"
                    data-cursor="cta"
                    data-cursor-text="BOOK SPRINT ↗"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-studio-ink text-[#F5F2EB] font-mono text-xs uppercase tracking-wider font-bold hover:bg-studio-gold hover:text-studio-ink transition-colors border border-studio-ink"
                  >
                    <span>Deploy Station {currentStation.num}</span>
                    <ArrowUpRight className="w-4 h-4 text-accent-acid" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StudioStationsSection;

