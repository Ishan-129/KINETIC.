import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'amber' | 'emerald' | 'subtle' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className,
  icon,
}) => {
  const baseStyles = "inline-flex items-center font-mono font-medium rounded-full tracking-wider uppercase";

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    cyan: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    amber: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    subtle: "bg-obsidian-700 text-slate-300 border border-surface-border",
    outline: "bg-transparent text-slate-400 border border-surface-subtle",
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
