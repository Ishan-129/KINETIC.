import React, { useState } from 'react';
import { ArrowUpRight, Check, Zap } from 'lucide-react';
import { triggerSectionLoad } from './ui/LazySection';
import { BUNDLE_PACKAGES } from '../data/pricingData';
import { PricingFAQ } from './pricing/PricingFAQ';
import { motion } from 'framer-motion';
import { useGlassHover } from '../hooks/useGlassHover';

const PricingCard: React.FC<{
  bundle: typeof BUNDLE_PACKAGES[0];
  idx: number;
  isFeatured: boolean;
  onSelect: () => void;
}> = ({ bundle, idx, isFeatured, onSelect }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useGlassHover({ maxTilt: isFeatured ? 3 : 5, scale: isFeatured ? 1.005 : 1.01 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { handleMouseLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      data-cursor="explore"
      data-cursor-text={`PKG 0${idx + 1}`}
      className={`tilt-card flex flex-col justify-between border transition-all duration-300 relative overflow-hidden ${
        isFeatured
          ? 'p-8 sm:p-10 lg:row-span-1'
          : 'p-6 sm:p-8'
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
      style={{
        backgroundColor: isFeatured ? '#0D1117' : '#080B12',
        borderColor: isFeatured ? 'rgba(199,255,61,0.40)' : 'rgba(255,255,255,0.07)',
        boxShadow: isFeatured
          ? '0 0 0 1px rgba(199,255,61,0.15), 0 0 60px rgba(199,255,61,0.08), 0 24px 48px rgba(0,0,0,0.5)'
          : hovered ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      {/* Featured indicator line */}
      {isFeatured && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #C7FF3D, transparent)' }}
        />
      )}

      {/* Ambient glow */}
      {isFeatured && (
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(199,255,61,0.12) 0%, transparent 70%)' }}
        />
      )}

      <div className="relative z-10">
        {/* Top label */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#525C71] uppercase">
            0{idx + 1}
          </span>
          {bundle.badge && (
            <div className="flex items-center gap-1.5">
              {isFeatured && <Zap className="w-3 h-3 text-[#C7FF3D]" />}
              <span
                className="text-[9px] font-mono font-black uppercase tracking-wider px-2 py-0.5"
                style={isFeatured
                  ? { color: '#080B12', background: '#C7FF3D', boxShadow: '0 0 10px rgba(199,255,61,0.5)' }
                  : { color: '#8A92A6', background: 'rgba(255,255,255,0.06)' }
                }
              >
                {bundle.badge}
              </span>
            </div>
          )}
        </div>

        {/* Package Name */}
        <h3
          className="font-display font-black tracking-tight uppercase mb-2"
          style={{
            fontSize: isFeatured ? 'clamp(1.6rem, 3vw, 2.2rem)' : 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: isFeatured ? '#ECEEF2' : '#8A92A6',
          }}
        >
          {bundle.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#525C71] font-body leading-relaxed mb-6 min-h-[2.5rem]">
          {bundle.description}
        </p>

        {/* Price */}
        <div className="py-4 border-y border-white/[0.06] mb-6">
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-lg font-bold text-[#8A92A6]">₹</span>
            <span
              className="font-display font-black tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: isFeatured ? '#C7FF3D' : '#ECEEF2',
                textShadow: isFeatured ? '0 0 20px rgba(199,255,61,0.4)' : 'none',
              }}
            >
              {bundle.price}
            </span>
            <span className="font-mono text-xs text-[#525C71] ml-1 font-semibold">{bundle.billing}</span>
          </div>
          {bundle.billingClarification && (
            <span className="text-[10px] font-mono text-[#525C71] block mt-1">
              {bundle.billingClarification}
            </span>
          )}
        </div>

        {/* Best For */}
        {bundle.bestFor && (
          <div className="mb-5 font-mono">
            <span className="text-[9px] uppercase tracking-wider text-[#525C71] block mb-1 font-bold">BEST FOR //</span>
            <p className="text-xs text-[#8A92A6] font-semibold leading-snug">{bundle.bestFor}</p>
          </div>
        )}

        {/* Deliverables */}
        <div className="space-y-2 mb-8 text-xs font-mono">
          <span className="text-[9px] uppercase tracking-wider text-[#525C71] block mb-2 font-bold">INCLUDED //</span>
          {bundle.featureGroups.flatMap((g) => g.features).slice(0, 5).map((feat, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: isFeatured ? '#C7FF3D' : '#525C71' }} />
              <span className="text-[#8A92A6] leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onSelect}
        data-cursor="cta"
        data-cursor-text="SELECT PKG ↗"
        className="relative z-10 w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 font-mono text-xs uppercase tracking-wider font-black transition-all duration-200 overflow-hidden btn-fill-wipe group"
        style={isFeatured ? {
          backgroundColor: '#C7FF3D',
          color: '#080B12',
          boxShadow: '0 0 20px rgba(199,255,61,0.3)',
        } : {
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#525C71',
          backgroundColor: 'transparent',
        }}
        onMouseEnter={(e) => {
          if (!isFeatured) {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,255,61,0.3)';
            (e.currentTarget as HTMLElement).style.color = '#ECEEF2';
          }
        }}
        onMouseLeave={(e) => {
          if (!isFeatured) {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
            (e.currentTarget as HTMLElement).style.color = '#525C71';
          }
        }}
      >
        <span>Select Package</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
};

export const PricingSection: React.FC = () => {
  const scrollToAudit = () => {
    triggerSectionLoad('audit');
    const el = document.getElementById('audit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-36 bg-[#080B12] border-t border-white/[0.06] relative overflow-hidden" id="pricing">
      <div className="noise-section" />

      {/* Ambient background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(199,255,61,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#525C71] uppercase font-bold">
                PRICING // TRANSPARENT INVESTMENT
              </span>
            </div>
            <h2
              className="font-display font-black text-[#ECEEF2] tracking-tight leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              Clear Pricing.<br />
              Zero Retainer Traps.
            </h2>
          </div>
          <p className="text-[#8A92A6] text-base sm:text-lg max-w-md font-body leading-relaxed">
            No vague quotes or hidden fees. Choose an all-in-one growth bundle or an individual service sprint. Handcrafted directly by the 3 founders.
          </p>
        </div>

        {/* Featured-center pricing grid */}
        {/* On desktop: featured card is center-elevated; on mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-start mb-16">
          {BUNDLE_PACKAGES.map((bundle, idx) => {
            const isFeatured = bundle.id === 'bundle-get-leads';
            return (
              <div
                key={bundle.id}
                className={isFeatured ? 'lg:-mt-6 lg:mb-0 lg:z-10' : 'lg:mt-2'}
              >
                <PricingCard
                  bundle={bundle}
                  idx={idx}
                  isFeatured={isFeatured}
                  onSelect={scrollToAudit}
                />
              </div>
            );
          })}
        </div>

        {/* Standalone sprints bar */}
        <div className="p-6 sm:p-8 bg-[#0D1117] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold block mb-1" style={{ color: '#C7FF3D' }}>
              SINGLE DELIVERABLE SPRINT?
            </span>
            <p className="text-sm sm:text-base text-[#8A92A6] font-body font-semibold">
              We also offer standalone sprints: Website Pack (₹7,999 one-time), Social Media (₹5,999/mo), or Lead Ads (₹4,999/mo).
            </p>
          </div>
          <button
            onClick={scrollToAudit}
            data-cursor="cta"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] uppercase tracking-wider font-black text-[#080B12] hover:bg-white transition-colors shrink-0"
            style={{ background: '#C7FF3D', boxShadow: '0 0 20px rgba(199,255,61,0.25)' }}
          >
            <span>Discuss Custom Scope</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pricing FAQ */}
        <div className="bg-[#0D1117] border border-white/[0.06] p-6 sm:p-10">
          <PricingFAQ />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
