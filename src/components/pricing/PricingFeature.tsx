import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface PricingFeatureProps {
  text: string;
  variant?: 'default' | 'highlight' | 'dark';
  className?: string;
}

export const PricingFeature: React.FC<PricingFeatureProps> = ({
  text,
  variant = 'default',
  className,
}) => {
  return (
    <li className={cn('flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed', className)}>
      <div
        className={cn(
          'w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5',
          variant === 'highlight'
            ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/40'
            : variant === 'dark'
            ? 'bg-white/20 text-white border border-white/30'
            : 'bg-accent-gold/15 text-accent-gold-dark border border-accent-gold/30'
        )}
      >
        <Check className="w-2.5 h-2.5 stroke-[3]" />
      </div>
      <span
        className={cn(
          variant === 'dark' ? 'text-white/90' : 'text-slate-700'
        )}
      >
        {text}
      </span>
    </li>
  );
};
