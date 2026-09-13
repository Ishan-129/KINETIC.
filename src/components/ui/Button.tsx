import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-slate-100 text-obsidian-950 hover:bg-white hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]",
    secondary: "bg-obsidian-700 text-slate-200 hover:bg-obsidian-600 hover:text-white border border-surface-border active:scale-[0.98]",
    outline: "bg-transparent text-slate-300 hover:text-white border border-surface-subtle hover:border-slate-400 active:scale-[0.98]",
    ghost: "bg-transparent text-slate-400 hover:text-slate-100 hover:bg-obsidian-700/50",
    glow: "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110 active:scale-[0.98] border border-sky-400/30",
  };

  const combinedClass = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (asLink && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
