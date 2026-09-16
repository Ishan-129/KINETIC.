import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { triggerSectionLoad } from './ui/LazySection';
import { BUNDLE_PACKAGES } from '../data/pricingData';
import { PricingFAQ } from './pricing/PricingFAQ';

export const PricingSection: React.FC = () => {
  const scrollToAudit = () => {
    triggerSectionLoad('audit');
    const el = document.getElementById('audit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-studio-bg border-t border-studio-ink relative" id="pricing">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-studio-ink flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-studio-gold" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-studio-ink/70 uppercase font-bold">
                PRICING // TRANSPARENT INVESTMENT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-studio-ink tracking-tight leading-none uppercase">
              Clear Pricing.<br />
              Zero Retainer Traps.
            </h2>
          </div>
          <p className="text-studio-ink/80 text-base sm:text-lg max-w-md font-medium leading-relaxed">
            No vague quotes or hidden fees. Choose an all-in-one growth bundle or an individual service sprint. Handcrafted directly by the 3 founders.
          </p>
        </div>

        {/* 4 Studio Growth Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {BUNDLE_PACKAGES.map((bundle, idx) => {
            const isFeatured = bundle.id === 'bundle-get-leads';
            return (
              <div
                key={bundle.id}
                data-cursor="explore"
                data-cursor-text={`PKG 0${idx + 1}`}
                className={`p-7 sm:p-8 flex flex-col justify-between border-2 transition-all duration-200 relative ${
                  isFeatured
                    ? 'bg-studio-ink text-[#F5F2EB] border-studio-ink shadow-studio-lg -translate-y-2'
                    : 'bg-white text-studio-ink border-studio-ink shadow-studio-sm hover:shadow-studio-md'
                }`}
              >
                <div>
                  {/* Top Label */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-current/20">
                    <span className="font-mono text-xs uppercase tracking-widest font-bold opacity-70">
                      0{idx + 1}
                    </span>
                    {bundle.badge && (
                      <span
                        className={`text-[10px] font-mono uppercase font-black tracking-wider px-2 py-0.5 ${
                          isFeatured
                            ? 'bg-accent-acid text-studio-ink'
                            : 'bg-studio-gold text-studio-ink'
                        }`}
                      >
                        {bundle.badge}
                      </span>
                    )}
                  </div>

                  {/* Package Name */}
                  <h3 className="font-display text-2xl font-black tracking-tight uppercase mb-2">
                    {bundle.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-6 min-h-[2.5rem] font-medium">
                    {bundle.description}
                  </p>

                  {/* Price Tag */}
                  <div className="py-4 border-y border-current/20 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-xl font-bold">₹</span>
                      <span className="font-display text-3xl sm:text-4xl font-black tracking-tight">
                        {bundle.price}
                      </span>
                      <span className="font-mono text-xs opacity-70 ml-1 font-semibold">
                        {bundle.billing}
                      </span>
                    </div>
                    {bundle.billingClarification && (
                      <span className="text-[11px] font-mono opacity-60 block mt-1">
                        {bundle.billingClarification}
                      </span>
                    )}
                  </div>

                  {/* Who It's For */}
                  <div className="mb-6 font-mono">
                    <span className="text-[10px] uppercase tracking-wider opacity-60 block mb-1 font-bold">
                      BEST FOR //
                    </span>
                    <p className="text-xs font-semibold leading-snug">
                      {bundle.bestFor}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-8 text-xs font-mono">
                    <span className="text-[10px] uppercase tracking-wider opacity-60 block mb-2 font-bold">
                      INCLUDED //
                    </span>
                    {bundle.featureGroups.flatMap((g) => g.features).slice(0, 5).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFeatured ? 'text-accent-acid' : 'text-studio-gold'}`} />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToAudit}
                  data-cursor="cta"
                  data-cursor-text="SELECT PKG ↗"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 font-mono text-xs uppercase tracking-wider font-extrabold transition-all duration-200 border border-current ${
                    isFeatured
                      ? 'bg-accent-acid text-studio-ink hover:bg-studio-gold'
                      : 'bg-studio-bg text-studio-ink hover:bg-studio-ink hover:text-[#F5F2EB]'
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Standalone Sprints Bar */}
        <div className="p-6 sm:p-8 bg-[#F5F2EB] border-2 border-studio-ink flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20 shadow-studio-sm">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-studio-gold font-bold block mb-1">
              SINGLE DELIVERABLE SPRINT?
            </span>
            <p className="text-sm sm:text-base text-studio-ink font-semibold">
              We also offer standalone sprints: Complete Website Pack (₹7,999 one-time), Full Social Media (₹5,999/mo), or Lead Ads (₹4,999/mo).
            </p>
          </div>
          <button
            onClick={scrollToAudit}
            data-cursor="cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-studio-ink text-[#F5F2EB] font-mono text-xs uppercase tracking-wider font-extrabold hover:bg-studio-gold hover:text-studio-ink transition-colors shrink-0 border border-studio-ink"
          >
            <span>Discuss Custom Scope</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-acid" />
          </button>
        </div>

        {/* Pricing FAQ Accordion */}
        <div className="bg-white border-2 border-studio-ink p-6 sm:p-10 shadow-studio-md">
          <PricingFAQ />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
