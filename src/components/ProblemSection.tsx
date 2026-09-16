import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-ivory-100 border-t border-sand-300/80 relative" id="problem">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-gold" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold">
            The Local Reality
          </span>
        </div>

        {/* Core Editorial Headline */}
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-950 tracking-tight leading-[1.04] max-w-4xl mb-16 sm:mb-24">
          Most businesses don't have a traffic problem.{' '}
          <span className="text-accent-gold underline decoration-accent-gold/40 decoration-4 sm:decoration-6 underline-offset-8">
            They have a trust problem.
          </span>
        </h2>

        {/* 3 Clean Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-16 sm:pb-20 border-b border-sand-400/60">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase font-semibold block">
              01 — SLOW
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              Slow
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              People leave before the page loads.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase font-semibold block">
              02 — FORGETTABLE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              Forgettable
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              Competitors look more credible.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase font-semibold block">
              03 — FRICTION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              Friction
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              Visitors don't know what to do next.
            </p>
          </div>
        </div>

        {/* Clean Conclusion */}
        <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-display text-3xl sm:text-5xl font-extrabold text-slate-950">
            We fix all three.
          </p>

          <a
            href="#framework"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-900 hover:text-accent-gold transition-colors font-mono uppercase tracking-wider group"
          >
            <span>Our 3-stage framework</span>
            <ArrowRight className="w-4 h-4 text-accent-gold group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
