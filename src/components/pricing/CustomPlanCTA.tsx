import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export interface CustomPlanCTAProps {
  onCtaClick?: () => void;
}

export const CustomPlanCTA: React.FC<CustomPlanCTAProps> = ({ onCtaClick }) => {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-accent-navy via-[#162B46] to-[#0F1E32] p-8 sm:p-10 text-white shadow-warm-lg overflow-hidden border border-white/10">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-coral/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent-gold-light text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-gold-light" />
            <span>Bespoke Solutions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Need Something More Custom?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
            Every business is different. Tell us what you're trying to achieve and we'll build the right package around it.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <Button
            onClick={onCtaClick}
            variant="glow"
            size="lg"
            className="w-full md:w-auto cursor-pointer"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </div>
  );
};
