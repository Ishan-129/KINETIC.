import React from 'react';

export interface LogoProps {
  variant?: 'full' | 'mark' | 'wordmark' | 'compact';
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
    sm: { box: 28, stroke: 6, radius: 8 },
    md: { box: 34, stroke: 7, radius: 9 },
    lg: { box: 44, stroke: 8, radius: 12 },
    xl: { box: 56, stroke: 10, radius: 15 },
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

  // Unique ID prefix for gradients to prevent collisions if multiple logos render
  const idPrefix = `ed-logo-${theme}-${size}`;

  // Custom Merged E + D Monogram Icon Mark
  const EmblemMark = (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
        animated ? 'group-hover:scale-105 group-hover:shadow-gold' : ''
      }`}
      style={{
        width: currentSize.box,
        height: currentSize.box,
      }}
      role="img"
      aria-label="MEDIA-TARDS E+D Monogram"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Badge Background Gradient */}
          <linearGradient id={`${idPrefix}-bg`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#182030" />
            <stop offset="100%" stopColor="#080A0F" />
          </linearGradient>

          {/* Border Metallic Sheen */}
          <linearGradient id={`${idPrefix}-border`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#C9922A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#9B6E1A" stopOpacity="0.65" />
          </linearGradient>

          {/* E+D Left Spine Gradient */}
          <linearGradient id={`${idPrefix}-spine`} x1="14" y1="12" x2="22" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF0B3" />
            <stop offset="30%" stopColor="#FCD34D" />
            <stop offset="70%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#C9922A" />
          </linearGradient>

          {/* E+D Outer Loop Gradient (Top/Bottom E arms + D curve) */}
          <linearGradient id={`${idPrefix}-loop`} x1="18" y1="14" x2="52" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF5CC" />
            <stop offset="25%" stopColor="#FCD34D" />
            <stop offset="65%" stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#9B6E1A" />
          </linearGradient>

          {/* E Middle Horizontal Core Bar Gradient */}
          <linearGradient id={`${idPrefix}-mid`} x1="18" y1="32" x2="38" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF5CC" />
            <stop offset="50%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#E8B84B" />
          </linearGradient>

          {/* Subtle Ambient Drop Shadow */}
          <filter id={`${idPrefix}-glow`} x="4" y="4" width="56" height="56" filterUnits="userSpaceOnUse">
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
          fill={`url(#${idPrefix}-bg)`}
          stroke={`url(#${idPrefix}-border)`}
          strokeWidth="1.5"
        />

        {/* Ambient Center Glow */}
        <circle cx="32" cy="32" r="18" fill="#C9922A" opacity="0.12" />

        {/* Merged E+D Monogram Mark */}
        <g filter={`url(#${idPrefix}-glow)`}>
          {/* Shared Vertical Backbone (Spine of both E and D) */}
          <rect
            x="14"
            y="13.5"
            width="7.5"
            height="37"
            rx="3.75"
            fill={`url(#${idPrefix}-spine)`}
          />

          {/* D Outer Loop & E Top/Bottom Prongs */}
          <path
            d="M 18 17 L 33 17 C 44 17 49.5 23 49.5 32 C 49.5 41 44 47 33 47 L 18 47"
            stroke={`url(#${idPrefix}-loop)`}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* E Middle Arm (Extending into D's interior counter) */}
          <path
            d="M 18 32 L 35.5 32"
            stroke={`url(#${idPrefix}-mid)`}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );

  // Symbol-only variant
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {EmblemMark}
      </div>
    );
  }

  // Wordmark-only variant
  if (variant === 'wordmark') {
    return (
      <div className={`inline-flex flex-col justify-center select-none ${className}`}>
        <span
          className={`font-extrabold tracking-tight ${textStyles.title} ${titleColor} leading-none font-sans`}
        >
          MEDIA-TARDS<span className={dotColor}>.</span>
        </span>
        {showTagline && (
          <span
            className={`font-mono uppercase font-medium mt-0.5 ${textStyles.tag} ${tagColor}`}
          >
            Digital Growth Studio
          </span>
        )}
      </div>
    );
  }

  // Full and Compact variants
  return (
    <div className={`inline-flex items-center gap-2.5 group ${className}`}>
      {EmblemMark}

      <div className="flex flex-col justify-center select-none">
        <span
          className={`font-extrabold tracking-tight ${textStyles.title} ${titleColor} leading-none font-sans`}
        >
          MEDIA-TARDS<span className={dotColor}>.</span>
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

