import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div className={cn(
      "max-w-3xl mb-12 sm:mb-16",
      align === 'center' ? "mx-auto text-center" : "text-left",
      className
    )}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-700/80 border border-surface-border text-xs font-mono font-medium text-brand-cyan mb-4 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
