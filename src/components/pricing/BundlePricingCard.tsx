import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Info } from 'lucide-react';
import { BundlePricingItem } from '../../data/pricingData';
import { PricingFeature } from './PricingFeature';
import { Button } from '../ui/Button';

export interface BundlePricingCardProps {
  bundle: BundlePricingItem;
  onCtaClick?: () => void;
}

export const BundlePricingCard: React.FC<BundlePricingCardProps> = ({
  bundle,
  onCtaClick,
}) => {
  const isHighlighted = bundle.isHighlighted;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
        isHighlighted
          ? 'bg-white border-2 border-accent-gold shadow-gold-lg ring-2 ring-accent-gold/20 lg:-translate-y-2'
          : 'bg-white border border-sand-300 shadow-warm hover:shadow-warm-lg hover:border-sand-400'
      }`}
    >
      {/* Top Badge (if any) */}
      {bundle.badge && (
        <div className="absolute -top-3.5 left-6 right-auto">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-extrabold tracking-wider uppercase shadow-sm ${
              isHighlighted
                ? 'bg-gradient-to-r from-accent-gold to-accent-gold-light text-slate-950 shadow-gold'
                : bundle.badge === 'FULL GROWTH'
                ? 'bg-accent-navy text-white'
                : 'bg-ivory-200 text-slate-800 border border-sand-400'
            }`}
          >
            {isHighlighted && <Sparkles className="w-3 h-3 fill-slate-950 text-slate-950" />}
            {bundle.badge}
          </span>
        </div>
      )}

      <div>
        {/* Package Header */}
        <div className="pt-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {bundle.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[2.5rem]">
            {bundle.description}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="mt-5 mb-4 pt-4 border-t border-sand-300/80">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-mono text-2xl font-bold ${
                isHighlighted ? 'text-accent-gold-dark' : 'text-slate-900'
              }`}
            >
              {bundle.currency || '₹'}
            </span>
            <span
              className={`font-mono text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isHighlighted ? 'text-accent-gold-dark' : 'text-slate-900'
              }`}
            >
              {bundle.price}
            </span>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block mt-1">
            {bundle.billing}
          </span>
          {bundle.billingClarification && (
            <span className="text-[11px] font-medium text-slate-500 block mt-1.5 leading-snug">
              {bundle.billingClarification}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-sand-300/80 my-4" />

        {/* Deliverables / Includes */}
        <div className="mt-4 mb-6">
          {bundle.featureGroups && bundle.featureGroups.length > 0 ? (
            <div className="space-y-4">
              {bundle.featureGroups.map((group, gIdx) => {
                const isOneTime = group.title.toUpperCase().includes('ONE-TIME');
                return (
                  <div key={gIdx} className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${
                          isOneTime
                            ? isHighlighted
                              ? 'bg-accent-navy text-white border-accent-navy'
                              : 'bg-accent-navy/10 text-accent-navy border-accent-navy/20'
                            : isHighlighted
                            ? 'bg-accent-gold/20 text-accent-gold-dark border-accent-gold/30'
                            : 'bg-sand-200 text-slate-700 border-sand-300'
                        }`}
                      >
                        {group.title}
                      </span>
                    </div>
                    {group.subtitle && (
                      <span className="text-xs font-bold text-slate-900 block pl-0.5">
                        {group.subtitle}
                      </span>
                    )}
                    <ul className="space-y-2 pl-0.5">
                      {group.features.map((feature, idx) => (
                        <PricingFeature
                          key={idx}
                          text={feature}
                          variant={isHighlighted ? 'highlight' : 'default'}
                        />
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Includes:
              </span>
              <ul className="space-y-2.5">
                {bundle.includes?.map((inc, idx) => (
                  <PricingFeature
                    key={idx}
                    text={inc}
                    variant={isHighlighted ? 'highlight' : 'default'}
                  />
                ))}
              </ul>
            </>
          )}

          {/* Setup / Clarification Note if provided */}
          {bundle.setupNote && (
            <div className="mt-4 p-3 rounded-xl bg-ivory-100 border border-sand-300/80 text-[11px] text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-800">Note: </span>
              {bundle.setupNote}
            </div>
          )}
        </div>

        {/* Best For Tag */}
        {bundle.bestFor && (
          <div className="mb-4 pt-3 border-t border-sand-300/60">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
              Best for:
            </span>
            <span className="text-xs font-semibold text-slate-800 block mt-0.5">
              {bundle.bestFor}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Area: Ad Spend Note + CTA */}
      <div className="pt-2">
        {bundle.adSpendNote && (
          <div className="mb-4 p-2.5 rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Info className="w-3.5 h-3.5 text-accent-gold shrink-0" />
              <span>{bundle.adSpendNote.title}</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-600 leading-tight">
              {bundle.adSpendNote.description}
            </p>
          </div>
        )}

        <Button
          onClick={onCtaClick}
          variant={isHighlighted ? 'glow' : 'secondary'}
          size="md"
          className="w-full justify-between group cursor-pointer"
          icon={<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
        >
          {bundle.cta}
        </Button>
      </div>
    </motion.div>
  );
};
