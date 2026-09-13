import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { SquishyPricing, PricingCardProps, BGComponent1, BGComponent2, BGComponent3 } from './ui/squishy-pricing';

export const PricingSection: React.FC = () => {
  const scrollToAudit = () => {
    const auditElement = document.getElementById('audit');
    if (auditElement) {
      auditElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingTiers: PricingCardProps[] = [
    {
      label: "LOCAL GROWTH STARTER",
      pricePrefix: "Starting at",
      currency: "₹",
      monthlyPrice: "35,000",
      period: "ONE-TIME DIGITAL FOUNDATION",
      description: "Build a professional digital presence that makes your business easy to discover, trust, and contact.",
      features: [
        "High-converting business website",
        "Mobile-first UI/UX",
        "Google Business Profile optimization",
        "Local SEO foundation",
        "WhatsApp & enquiry integration",
        "Conversion-focused contact / booking flow",
        "Basic analytics & conversion tracking",
      ],
      bestFor: "New or growing local businesses",
      cta: "BUILD MY PRESENCE →",
      background: "bg-gradient-to-br from-[#1E3A5F] via-[#162B46] to-[#0F1E32]",
      BGComponent: () => <BGComponent1 />,
      onCtaClick: scrollToAudit,
    },
    {
      label: "GROWTH ENGINE",
      pricePrefix: "Starting at",
      currency: "₹",
      monthlyPrice: "75,000",
      period: "ONE-TIME GROWTH SYSTEM",
      popular: true,
      description: "Turn your online presence into a system designed to generate and convert local customers.",
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
      bestFor: "Businesses ready to actively grow",
      cta: "START MY GROWTH →",
      background: "bg-gradient-to-br from-[#9E6E1A] via-[#82560E] to-[#4F3305]",
      BGComponent: () => <BGComponent2 />,
      onCtaClick: scrollToAudit,
    },
    {
      label: "GROWTH PARTNER",
      pricePrefix: "Starting at",
      currency: "₹",
      monthlyPrice: "30,000",
      periodSuffix: "/ month",
      period: "MONTHLY GROWTH PARTNERSHIP",
      description: "An ongoing growth partnership focused on bringing more qualified customers through your digital channels.",
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
      bestFor: "Established businesses looking for consistent growth",
      cta: "BECOME A GROWTH PARTNER →",
      background: "bg-gradient-to-br from-[#1A6B4A] via-[#134932] to-[#0B2C1E]",
      BGComponent: () => <BGComponent3 />,
      onCtaClick: scrollToAudit,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-ivory-100/60 border-y border-sand-300 relative overflow-hidden scroll-mt-20">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="DISCOVER → TRUST → CONVERT → GROW"
          title="CHOOSE YOUR GROWTH PATH"
          subtitle="From building your digital presence to creating a system that consistently brings in customers."
          align="center"
        />

        {/* Squishy Interactive Pricing Cards */}
        <SquishyPricing cards={pricingTiers} className="mt-8 sm:mt-10" />

        {/* Guarantee Banner */}
        <div className="mt-14 sm:mt-16 max-w-2xl mx-auto text-center p-4 sm:p-5 rounded-xl bg-white border border-sand-300 shadow-warm-sm">
          <p className="text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-slate-900">The 100% Conversion Guarantee:</span> If our redesign does not demonstrably improve your primary conversion metrics within 30 days, we iterate until it does.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
