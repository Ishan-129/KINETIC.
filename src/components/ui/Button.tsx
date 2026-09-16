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
    'inline-flex items-center justify-center font-semibold rounded-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C7FF3D]/40 disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-none gap-1.5 font-mono',
    md: 'text-sm px-5 py-2.5 rounded-none gap-2 font-mono',
    lg: 'text-base px-7 py-3.5 rounded-none gap-2.5 font-mono',
  };

  const variantStyles = {
    /** Acid Green CTA — the primary action */
    glow: 'bg-[#C7FF3D] text-[#080B12] font-mono font-black uppercase tracking-wider hover:bg-white shadow-acid-glow active:scale-[0.98]',
    /** Solid CTA */
    primary: 'bg-[#C7FF3D] text-[#080B12] font-mono font-black uppercase tracking-wider hover:bg-white active:scale-[0.98]',
    /** Panel dark secondary button */
    secondary: 'bg-[#0D1117] text-[#ECEEF2] border border-white/[0.12] hover:border-[#C7FF3D]/40 hover:text-[#C7FF3D] font-mono font-bold uppercase tracking-wider active:scale-[0.98]',
    /** Outline with hairline border */
    outline: 'bg-transparent text-[#8A92A6] border border-white/[0.12] hover:border-[#C7FF3D]/40 hover:text-[#ECEEF2] font-mono font-bold uppercase tracking-wider active:scale-[0.98]',
    /** Ghost — minimal */
    ghost: 'bg-transparent text-[#8A92A6] hover:text-[#ECEEF2] hover:bg-white/5 font-mono font-bold uppercase tracking-wider',
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
