import React from 'react';
import { ArrowUpRight, Zap, ShieldCheck, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 sm:pt-44 sm:pb-32 overflow-hidden bg-ivory-50 bg-dot-pattern">
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] radial-glow-gold pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-coral/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 left-0 w-80 h-80 bg-accent-gold/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-300 text-xs sm:text-sm font-mono text-slate-500 mb-8 shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
            <span>Modern Digital Growth Studio for Ambitious Local Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
            We turn overlooked local businesses into the{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-gold-light to-accent-coral">
                obvious choice
              </span>
              {/* Underline accent */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #C9922A, #E8B84B, #E05C3A)' }}
              />
            </span>{' '}
            in their market.
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
            High-performance custom websites, sharp brand positioning, and frictionless conversion systems.
            Handcrafted directly by{' '}
            <span className="text-slate-800 font-semibold">3 founding partners</span>
            —no junior interns, no bloated agency markups, and no generic templates.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asLink
              href="#audit"
              size="lg"
              variant="glow"
              icon={<ArrowUpRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-gold text-base py-4 px-8"
            >
              Audit My Digital Presence
            </Button>
            <Button
              asLink
              href="#work"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base py-4 px-8"
            >
              Explore Concept Work
            </Button>
          </div>

          {/* Trust Guarantees Strip */}
          <div className="mt-16 pt-10 border-t border-sand-300 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              {
                icon: <Zap className="w-4 h-4" />,
                label: 'Speed',
                value: '100/100',
                sub: 'Google Lighthouse Target',
                color: 'text-accent-gold',
                border: 'border-l-accent-gold',
              },
              {
                icon: <Clock className="w-4 h-4" />,
                label: 'Velocity',
                value: '2–3 Weeks',
                sub: 'Rapid Sprint Delivery',
                color: 'text-accent-coral',
                border: 'border-l-accent-coral',
              },
              {
                icon: <ShieldCheck className="w-4 h-4" />,
                label: 'Execution',
                value: 'Direct Founders',
                sub: 'No Account Managers',
                color: 'text-accent-forest',
                border: 'border-l-accent-forest',
              },
              {
                icon: <TrendingUp className="w-4 h-4" />,
                label: 'Philosophy',
                value: 'Conversion First',
                sub: 'Revenue Over Fluff',
                color: 'text-accent-navy',
                border: 'border-l-accent-navy',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`bg-white border border-sand-300 border-l-4 ${stat.border} rounded-xl p-4 shadow-warm-sm card-hover`}
              >
                <div className={`flex items-center gap-2 ${stat.color} mb-2`}>
                  {stat.icon}
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
                <p className="text-slate-900 font-bold text-lg leading-tight">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
