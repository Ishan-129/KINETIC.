import React from 'react';
import { ArrowUpRight, Zap, ShieldCheck, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-architectural-grid">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow-cyan pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-80 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-800/90 border border-surface-border text-xs sm:text-sm font-mono text-slate-300 mb-6 shadow-inner backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Modern Digital Growth Studio for Ambitious Local Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] sm:leading-[1.08]">
            We turn overlooked local businesses into the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">
              obvious choice
            </span>{' '}
            in their market.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            High-performance custom websites, sharp brand positioning, and frictionless conversion systems. 
            Handcrafted directly by <span className="text-slate-200 font-medium">3 founding partners</span>—no junior interns, no bloated agency markups, and no generic templates.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asLink
              href="#audit"
              size="lg"
              variant="glow"
              icon={<ArrowUpRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-xl shadow-sky-500/20 text-base py-4 px-8"
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
          <div className="mt-14 pt-10 border-t border-surface-border/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-obsidian-800/50 border border-surface-border/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-brand-cyan mb-1">
                <Zap className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">Speed</span>
              </div>
              <p className="text-white font-bold text-lg">100/100</p>
              <p className="text-xs text-slate-400 mt-0.5">Google Lighthouse Target</p>
            </div>

            <div className="bg-obsidian-800/50 border border-surface-border/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-brand-amber mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">Velocity</span>
              </div>
              <p className="text-white font-bold text-lg">2–3 Weeks</p>
              <p className="text-xs text-slate-400 mt-0.5">Rapid Sprint Delivery</p>
            </div>

            <div className="bg-obsidian-800/50 border border-surface-border/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-brand-emerald mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">Execution</span>
              </div>
              <p className="text-white font-bold text-lg">Direct Founders</p>
              <p className="text-xs text-slate-400 mt-0.5">No Account Managers</p>
            </div>

            <div className="bg-obsidian-800/50 border border-surface-border/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">Philosophy</span>
              </div>
              <p className="text-white font-bold text-lg">Conversion First</p>
              <p className="text-xs text-slate-400 mt-0.5">Revenue Over Fluff</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
