import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { ServicePricingItem } from '../../data/pricingData';
import { PricingFeature } from './PricingFeature';
import { Button } from '../ui/Button';

export interface ServicePricingCardProps {
  service: ServicePricingItem;
  onCtaClick?: () => void;
}

export const ServicePricingCard: React.FC<ServicePricingCardProps> = ({
  service,
  onCtaClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full rounded-2xl bg-white border border-sand-300 p-6 sm:p-7 flex flex-col justify-between shadow-warm hover:shadow-warm-lg hover:border-accent-gold/40 transition-all duration-300"
    >
      <div>
        {/* Category Label Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-100 border border-sand-300 text-[11px] font-mono font-bold tracking-widest text-slate-700 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          {service.category}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[3rem]">
          {service.description}
        </p>

        {/* Pricing Block */}
        <div className="mt-6 mb-5 pt-5 border-t border-sand-300/80">
          {service.pricePrefix && (
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              {service.pricePrefix}
            </span>
          )}
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-2xl font-bold text-slate-900">
              {service.currency || '₹'}
            </span>
            <span className="font-mono text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {service.price}
            </span>
          </div>
          <span className="text-xs font-mono font-semibold text-accent-gold-dark uppercase tracking-wider block mt-1">
            {service.billing}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-sand-300/80 my-4" />

        {/* Features List */}
        <div className="mt-4 mb-6">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
            What's Included:
          </span>
          <ul className="space-y-2.5">
            {service.features.map((feature, idx) => (
              <PricingFeature key={idx} text={feature} />
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Area: Ad Spend Note + CTA */}
      <div className="pt-2">
        {service.adSpendNote && (
          <div className="mb-4 p-3 rounded-xl bg-accent-gold/10 border border-accent-gold/25 text-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Info className="w-3.5 h-3.5 text-accent-gold shrink-0" />
              <span>{service.adSpendNote.title}</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-600 leading-tight">
              {service.adSpendNote.description}
            </p>
          </div>
        )}

        <Button
          onClick={onCtaClick}
          variant="primary"
          size="md"
          className="w-full justify-between group cursor-pointer"
          icon={<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
        >
          {service.cta}
        </Button>
      </div>
    </motion.div>
  );
};
