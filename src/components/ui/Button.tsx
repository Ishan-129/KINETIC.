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
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/40 disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5',
  };

  const variantStyles = {
    /** Rich gold CTA — the primary action */
    glow: 'bg-gradient-to-r from-accent-gold to-accent-gold-light text-white shadow-gold hover:shadow-gold-lg hover:brightness-105 active:scale-[0.98] btn-gold-shimmer',
    /** Navy solid — strong secondary CTA */
    primary: 'bg-accent-navy text-white hover:bg-accent-navy-dark hover:shadow-warm-md active:scale-[0.98]',
    /** White card button */
    secondary: 'bg-white text-slate-800 border border-sand-300 hover:border-sand-400 hover:shadow-warm-sm active:scale-[0.98]',
    /** Transparent with warm border */
    outline: 'bg-transparent text-slate-700 border border-sand-400 hover:border-accent-gold hover:text-accent-gold active:scale-[0.98]',
    /** Ghost — minimal */
    ghost: 'bg-transparent text-slate-600 hover:text-accent-gold hover:bg-sand-300/40',
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
      <a href={href} target={target} rel={rel} className={combinedClass} onClick={props.onClick as any}>
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
