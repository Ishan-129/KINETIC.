import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'coral' | 'forest' | 'navy' | 'subtle' | 'outline'
    | 'cyan' | 'amber' | 'emerald'; // legacy aliases
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className,
  icon,
}) => {
  const baseStyles =
    'inline-flex items-center font-mono font-medium rounded-full tracking-wider uppercase';

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  const variantStyles: Record<string, string> = {
    gold:    'bg-accent-gold/10 text-accent-gold border border-accent-gold/25',
    coral:   'bg-accent-coral/10 text-accent-coral border border-accent-coral/25',
    forest:  'bg-accent-forest/10 text-accent-forest border border-accent-forest/25',
    navy:    'bg-accent-navy/10 text-accent-navy border border-accent-navy/25',
    subtle:  'bg-ivory-200 text-slate-600 border border-sand-300',
    outline: 'bg-transparent text-slate-500 border border-sand-400',
    // Legacy aliases used in case-preview dark components
    cyan:    'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    amber:   'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant] ?? variantStyles.gold, className)}>
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
