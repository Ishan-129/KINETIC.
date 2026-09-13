import React from 'react';

export interface LogoProps {
  variant?: 'full' | 'mark' | 'compact';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  className = '',
  showTagline = true,
  animated = true,
}) => {
  // Dimensions for the icon mark based on size
  const iconSizeMap = {
    sm: { box: 28, stroke: 8, radius: 8 },
    md: { box: 34, stroke: 8, radius: 9 },
    lg: { box: 44, stroke: 8, radius: 12 },
    xl: { box: 56, stroke: 8, radius: 15 },
  };

  const currentSize = iconSizeMap[size];

  // Typography styles based on size
  const textStyles = {
    sm: { title: 'text-base', tag: 'text-[9px] tracking-[1.5px]' },
    md: { title: 'text-lg', tag: 'text-[10px] tracking-[1.8px]' },
    lg: { title: 'text-2xl', tag: 'text-xs tracking-[2px]' },
    xl: { title: 'text-3xl', tag: 'text-sm tracking-[2.2px]' },
  }[size];

  // Theme-specific colors
  const titleColor = theme === 'light' ? 'text-white' : 'text-slate-900';
  const dotColor = 'text-accent-gold';
  const tagColor = theme === 'light' ? 'text-blue-200/80' : 'text-slate-500';

  // The Kinetic Emblem Icon Mark
  const EmblemMark = (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
        animated ? 'group-hover:scale-105 group-hover:shadow-gold' : ''
      }`}
      style={{
        width: currentSize.box,
        height: currentSize.box,
      }}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Badge Background Gradient */}
          <linearGradient id="logo-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#182030" />
            <stop offset="100%" stopColor="#080A0F" />
          </linearGradient>

          {/* Border Metallic Sheen */}
          <linearGradient id="logo-border" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#C9922A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9B6E1A" stopOpacity="0.6" />
          </linearGradient>

          {/* Vertical Pillar Light-Sweep Gradient */}
          <linearGradient id="logo-pillar" x1="14" y1="12" x2="22" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF0B3" />
            <stop offset="30%" stopColor="#FCD34D" />
            <stop offset="70%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#C9922A" />
          </linearGradient>

          {/* Kinetic Velocity Chevron Gradient */}
          <linearGradient id="logo-chevron" x1="28" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF5CC" />
            <stop offset="25%" stopColor="#FCD34D" />
            <stop offset="65%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#9B6E1A" />
          </linearGradient>

          {/* Subtle Ambient Drop Shadow */}
          <filter id="logo-glow" x="6" y="6" width="52" height="52" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#C9922A" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Squircle Badge Container */}
        <rect
          x="1.5"
          y="1.5"
          width="61"
          height="61"
          rx="16"
          fill="url(#logo-bg)"
          stroke="url(#logo-border)"
          strokeWidth="1.5"
        />

        {/* Ambient Center Glow */}
        <circle cx="32" cy="32" r="18" fill="#C9922A" opacity="0.1" />

        {/* Vector Mark with Subtle Glow */}
        <g filter="url(#logo-glow)">
          {/* Stability Anchor Pillar */}
          <rect
            x="14"
            y="13"
            width="8"
            height="38"
            rx="4"
            fill="url(#logo-pillar)"
          />

          {/* Kinetic Velocity Chevron (Growth & Conversion Vector) */}
          <path
            d="M 48 14 L 29.5 32 L 48 50"
            stroke="url(#logo-chevron)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {EmblemMark}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 group ${className}`}>
      {EmblemMark}

      <div className="flex flex-col justify-center select-none">
        <span
          className={`font-extrabold tracking-tight ${textStyles.title} ${titleColor} leading-none font-sans`}
        >
          KINETIC<span className={dotColor}>.</span>
        </span>

        {showTagline && variant === 'full' && (
          <span
            className={`font-mono uppercase font-medium mt-0.5 ${textStyles.tag} ${tagColor}`}
          >
            Digital Growth Studio
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
