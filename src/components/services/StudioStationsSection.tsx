import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';

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
  accentColor: string;
}

export const StudioStationsSection: React.FC = () => {
  const [activeStationId, setActiveStationId] = useState<string>('build');
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

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
      accentColor: '#C7FF3D',
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
      accentColor: '#3B8EFF',
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
      accentColor: '#FF4F3B',
      workflow: [
        { step: '01', label: 'AD CREATIVE', detail: 'High-converting video & carousel creatives' },
        { step: '02', label: 'LANDING PAGE', detail: 'Frictionless mobile capture destination' },
        { step: '03', label: 'LEAD CAPTURE', detail: 'Instant WhatsApp & email lead alerts' },
        { step: '04', label: 'OPTIMIZATION', detail: 'Retargeting pixel & cost-per-lead tuning' },
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

  const current = stations.find((s) => s.id === activeStationId) || stations[0];

  return (
    <section
      className="py-24 sm:py-36 bg-[#0D1117] border-t border-white/[0.06] relative overflow-hidden"
      id="services"
    >
      <div className="noise-section" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#525C71] uppercase font-bold">
                STUDIO STATIONS / WHAT WE DO
              </span>
            </div>
            <h2
              className="font-display font-black text-[#ECEEF2] tracking-tight leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              Three Stations.<br />
              Zero Fluff.
            </h2>
          </div>
          <p className="text-[#8A92A6] text-base sm:text-lg max-w-md font-body leading-relaxed">
            We don't offer 40 confusing services. We build websites that establish credibility, run socials that keep you relevant, and deploy ads that capture clients.
          </p>
        </div>

        {/* Station Tab Rail */}
        <div className="flex flex-col md:flex-row gap-2 mb-10">
          {stations.map((station) => {
            const isActive = station.id === activeStationId;
            return (
              <button
                key={station.id}
                onClick={() => { setActiveStationId(station.id); setActiveStepIdx(0); }}
                data-cursor="explore"
                data-cursor-text={`STATION ${station.num}`}
                className={`flex-1 p-5 text-left transition-all duration-200 relative border ${
                  isActive
                    ? 'border-transparent bg-[#13181F] text-[#ECEEF2]'
                    : 'border-white/[0.06] bg-transparent text-[#525C71] hover:border-white/[0.10] hover:text-[#8A92A6]'
                }`}
                style={isActive ? {
                  borderLeft: `2px solid ${station.accentColor}`,
                  boxShadow: `inset 0 0 30px rgba(${station.accentColor === '#C7FF3D' ? '199,255,61' : station.accentColor === '#3B8EFF' ? '59,142,255' : '255,79,59'},0.04)`,
                } : {}}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-60">
                    STATION {station.num}
                  </span>
                  <span
                    className="font-mono text-[10px] font-black px-2 py-0.5"
                    style={isActive ? {
                      color: station.accentColor,
                      background: `${station.accentColor}15`,
                    } : { color: '#525C71' }}
                  >
                    {station.price}
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-black tracking-tight uppercase leading-tight">
                  {station.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Station Canvas */}
        <div className="glass-panel-hi p-6 sm:p-10 relative overflow-hidden">
          {/* Accent glow in corner */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${current.accentColor}08 0%, transparent 70%)`,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10 relative z-10"
            >
              {/* Header + Pricing */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/[0.06]">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-4xl sm:text-5xl font-black" style={{ color: current.accentColor }}>
                      {current.num}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#525C71]">
                      // {current.tag}
                    </span>
                  </div>
                  <h3
                    className="font-display font-black text-[#ECEEF2] tracking-tight uppercase mb-3"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                  >
                    {current.name}
                  </h3>
                  <p className="text-[#8A92A6] font-body leading-relaxed">{current.description}</p>
                </div>

                {/* Pricing box */}
                <div
                  className="p-6 bg-[#080B12] border min-w-[260px] shrink-0"
                  style={{ borderColor: `${current.accentColor}30` }}
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold block mb-2" style={{ color: current.accentColor }}>
                    INVESTMENT & TIMELINE
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-4xl font-black text-[#ECEEF2]">{current.price}</span>
                    <span className="font-mono text-xs text-[#525C71] font-bold">{current.billing}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#525C71] border-t border-white/[0.06] pt-3 mt-3 space-y-1.5">
                    <div>Turnaround: <span className="text-[#ECEEF2] font-semibold">{current.turnaround}</span></div>
                    <div>Execution: <span className="text-[#ECEEF2] font-semibold">100% Direct Founders</span></div>
                  </div>
                </div>
              </div>

              {/* Workflow Pipeline */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#525C71] flex items-center gap-2 mb-5">
                  <span style={{ color: current.accentColor }}>◆</span>
                  Interactive Workflow — Click a phase to inspect
                </span>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {current.workflow.map((item, idx) => {
                    const isSelected = activeStepIdx === idx;
                    return (
                      <div
                        key={item.step}
                        onClick={() => setActiveStepIdx(idx)}
                        data-cursor="select"
                        data-cursor-text={`PHASE ${item.step}`}
                        className={`p-4 border cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#080B12] text-[#ECEEF2]'
                            : 'bg-transparent border-white/[0.06] hover:border-white/[0.12] text-[#525C71]'
                        }`}
                        style={isSelected ? { borderColor: `${current.accentColor}50` } : {}}
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-current/10 font-mono text-[10px] font-bold">
                          <span>PHASE {item.step}</span>
                          {isSelected ? (
                            <span className="font-extrabold" style={{ color: current.accentColor }}>● ACTIVE</span>
                          ) : (
                            <ArrowRight className="w-3 h-3 opacity-30" />
                          )}
                        </div>
                        <div
                          className="font-display text-base font-black tracking-tight mb-1"
                          style={isSelected ? { color: current.accentColor } : {}}
                        >
                          {item.label}
                        </div>
                        <p className="text-[10px] font-mono leading-snug opacity-60">{item.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Deliverables + CTA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/[0.06]">
                <div className="lg:col-span-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#525C71] font-bold block mb-4">
                    Exact Deliverables Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#8A92A6]">
                    {current.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: current.accentColor }} />
                        <span className="leading-snug font-body">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#080B12] border border-white/[0.06] p-5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#525C71] font-bold block mb-3">
                      Studio Tooling:
                    </span>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {current.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-[#13181F] border border-white/[0.06] font-mono text-[10px] font-bold text-[#8A92A6]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#audit"
                    data-cursor="cta"
                    data-cursor-text="BOOK SPRINT ↗"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 font-mono text-[11px] uppercase tracking-wider font-black transition-all duration-200 text-[#080B12]"
                    style={{
                      background: current.accentColor,
                      boxShadow: `0 0 20px ${current.accentColor}30`,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = current.accentColor; }}
                  >
                    <span>Deploy Station {current.num}</span>
                    <ArrowUpRight className="w-4 h-4" />
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
