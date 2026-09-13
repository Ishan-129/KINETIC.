import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export interface PricingCardProps {
  label: string;
  monthlyPrice: string;
  currency?: string;
  pricePrefix?: string;
  period?: string;
  periodSuffix?: string;
  priceRange?: string;
  description: string;
  supportingContext?: string;
  bestFor?: string;
  cta: string;
  background: string;
  BGComponent: React.ComponentType;
  popular?: boolean;
  avatarUrl?: string;
  advisorName?: string;
  partnerBadge?: string;
  partnerLabel?: string;
  features?: string[];
  onCtaClick?: () => void;
}

export interface SquishyPricingProps {
  title?: string;
  subtitle?: string;
  cards?: PricingCardProps[];
  className?: string;
}

const DEFAULT_TIERS: PricingCardProps[] = [
  {
    label: "LOCAL GROWTH STARTER",
    pricePrefix: "Starting at",
    currency: "₹",
    monthlyPrice: "35,000",
    period: "ONE-TIME DIGITAL FOUNDATION",
    description: "Build a professional digital presence that makes your business easy to discover, trust, and contact.",
    cta: "BUILD MY PRESENCE →",
    background: "bg-gradient-to-br from-[#1E3A5F] via-[#162B46] to-[#0F1E32]",
    BGComponent: () => <BGComponent1 />,
    bestFor: "New or growing local businesses",
    features: [
      "High-converting business website",
      "Mobile-first UI/UX",
      "Google Business Profile optimization",
      "Local SEO foundation",
      "WhatsApp & enquiry integration",
      "Conversion-focused contact / booking flow",
      "Basic analytics & conversion tracking",
    ],
  },
  {
    label: "GROWTH ENGINE",
    pricePrefix: "Starting at",
    currency: "₹",
    monthlyPrice: "75,000",
    period: "ONE-TIME GROWTH SYSTEM",
    popular: true,
    description: "Turn your online presence into a system designed to generate and convert local customers.",
    cta: "START MY GROWTH →",
    background: "bg-gradient-to-br from-[#9E6E1A] via-[#82560E] to-[#4F3305]",
    BGComponent: () => <BGComponent2 />,
    bestFor: "Businesses ready to actively grow",
    features: [
      "Everything in Local Growth Starter",
      "Custom brand & website experience",
      "Advanced local SEO",
      "Service-specific landing pages",
      "Lead capture & automated follow-ups",
      "WhatsApp enquiry system",
      "Conversion rate optimization",
      "Google Analytics & conversion tracking",
      "Google Search & Maps optimization",
      "30-day post-launch optimization",
    ],
  },
  {
    label: "GROWTH PARTNER",
    pricePrefix: "Starting at",
    currency: "₹",
    monthlyPrice: "30,000",
    periodSuffix: "/ month",
    period: "MONTHLY GROWTH PARTNERSHIP",
    description: "An ongoing growth partnership focused on bringing more qualified customers through your digital channels.",
    cta: "BECOME A GROWTH PARTNER →",
    background: "bg-gradient-to-br from-[#1A6B4A] via-[#134932] to-[#0B2C1E]",
    BGComponent: () => <BGComponent3 />,
    bestFor: "Established businesses looking for consistent growth",
    features: [
      "Continuous website optimization",
      "Local SEO & Google Maps growth",
      "New landing pages & campaigns",
      "Lead-generation optimization",
      "Conversion rate optimization",
      "Analytics & monthly performance reporting",
      "Automated lead follow-ups",
      "Priority design & development support",
      "Monthly growth strategy",
    ],
  },
];

export const SquishyPricing: React.FC<SquishyPricingProps> = ({
  cards = DEFAULT_TIERS,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
        {cards.map((card) => (
          <PricingCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  );
};

export const Component = () => {
  return <SquishyPricing />;
};

export const PricingCard: React.FC<PricingCardProps> = ({
  label,
  monthlyPrice,
  currency = "₹",
  pricePrefix = "Starting at",
  period,
  periodSuffix,
  priceRange,
  description,
  bestFor,
  cta,
  background,
  BGComponent,
  popular,
  features,
  onCtaClick,
}) => {
  const ctaText = cta.replace(/\s*→\s*$/, '');

  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.02 } }}
      className={`relative w-full h-full overflow-hidden rounded-3xl p-7 sm:p-8 lg:p-7 xl:p-8 ${background} shadow-warm-lg hover:shadow-warm-xl border border-white/10 transition-shadow flex flex-col justify-between`}
    >
      <div className="relative z-10 text-white flex-1 flex flex-col">
        {/* Header row: Label badge and popular tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-block rounded-full bg-white/15 backdrop-blur-md px-3.5 py-1 text-xs font-mono font-bold tracking-wider uppercase text-white border border-white/20">
            {label}
          </span>
          {popular && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-gold-light text-slate-900 px-3 py-1 text-xs font-mono font-extrabold shadow-gold shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-slate-900 fill-slate-900" />
              Most Popular
            </span>
          )}
        </div>

        {/* Pricing Big Number and Cadence */}
        <div className="my-3 sm:my-4">
          {pricePrefix && (
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/70 block mb-1">
              {pricePrefix}
            </span>
          )}
          <motion.div
            initial={{ scale: 0.95 }}
            variants={{ hover: { scale: 1 } }}
            transition={{ duration: 0.8, ease: "backInOut" }}
            className="flex items-baseline gap-1"
          >
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white/85">
              {currency}
            </span>
            <span className="font-mono text-4xl sm:text-5xl font-black tracking-tight leading-none text-white">
              {monthlyPrice}
            </span>
            {periodSuffix && (
              <span className="font-mono text-xs sm:text-sm font-bold text-white/75 uppercase ml-1">
                {periodSuffix}
              </span>
            )}
          </motion.div>
          {period && (
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/80 block mt-2">
              {period}
            </span>
          )}
          {priceRange && (
            <span className="font-mono text-[11px] text-white/60 block mt-1">
              Typical scope: {priceRange}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-white/90 leading-relaxed mt-2 sm:mt-3">
          {description}
        </p>

        {/* Deliverables / Features Checklist */}
        {features && features.length > 0 && (
          <div className="my-6 sm:my-7 flex-1">
            <ul className="space-y-3 text-sm text-white/95">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 leading-snug">
                  <div className="p-0.5 rounded-full bg-white/20 text-white shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Best For Footer */}
        {bestFor && (
          <div className="mt-auto pt-5 border-t border-white/15">
            <div className="flex items-baseline gap-2 text-xs sm:text-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white/60 shrink-0">
                Best for:
              </span>
              <span className="font-medium text-white/95 leading-normal">
                {bestFor}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Action CTA Button */}
      <button
        type="button"
        onClick={onCtaClick}
        className="relative z-20 mt-6 w-full rounded-xl border border-white/90 bg-white py-3.5 px-4 text-center font-mono font-bold uppercase text-xs sm:text-sm tracking-wider text-slate-900 transition-all duration-200 hover:bg-white/90 hover:shadow-gold hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-gold flex items-center justify-center gap-2 group cursor-pointer shadow-md"
      >
        <span>{ctaText}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {/* Animated SVG Backdrop */}
      <BGComponent />
    </motion.div>
  );
};


export const BGComponent1 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
  </motion.svg>
);

export const BGComponent2 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
      variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 12 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
    <motion.rect
      x="155"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);

export const BGComponent3 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.25 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
      d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
      fill="rgba(0, 0, 0, 0.2)"
      className="dark:fill-white/10"
    />
  </motion.svg>
);

export default SquishyPricing;
