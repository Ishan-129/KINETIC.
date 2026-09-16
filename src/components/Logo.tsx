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
    sm: { box: 28 },
    md: { box: 34 },
    lg: { box: 44 },
    xl: { box: 56 },
  };

  const currentSize = iconSizeMap[size];

  // Typography styles based on size
  const textStyles = {
    sm: { title: 'text-base', tag: 'text-[9px] tracking-[1.5px]' },
    md: { title: 'text-lg', tag: 'text-[10px] tracking-[1.8px]' },
    lg: { title: 'text-2xl', tag: 'text-xs tracking-[2px]' },
    xl: { title: 'text-3xl', tag: 'text-sm tracking-[2.2px]' },
  }[size];

  // Theme-specific colors: theme="dark" means intended for dark backgrounds
  const titleColor = theme === 'dark' ? 'text-[#ECEEF2]' : 'text-[#080B12]';
  const dotColor = 'text-[#C7FF3D]';
  const tagColor = theme === 'dark' ? 'text-[#8A92A6]' : 'text-[#525C71]';

  // Sharp Kinetic-Dark Monogram Icon Mark (Brutalist 0px radius)
  const EmblemMark = (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-none overflow-hidden transition-all duration-300 ${
        animated ? 'group-hover:scale-105' : ''
      }`}
      style={{
        width: currentSize.box,
        height: currentSize.box,
      }}
      role="img"
      aria-label="MEDIA-TARDS Kinetic Monogram"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Sharp Box Container */}
        <rect
          x="1.5"
          y="1.5"
          width="61"
          height="61"
          fill="#0D1117"
          stroke="#C7FF3D"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />

        {/* Ambient Top Glow */}
        <rect
          x="2"
          y="2"
          width="60"
          height="12"
          fill="#C7FF3D"
          fillOpacity="0.06"
        />

        {/* Kinetic MT Monogram */}
        <g strokeLinecap="square" strokeLinejoin="miter">
          {/* M Glyph — Acid Green */}
          <path
            d="M 13 47 L 13 17 L 23.5 31.5 L 34 17 L 34 47"
            stroke="#C7FF3D"
            strokeWidth="4"
          />

          {/* T Glyph — Off-White */}
          <path
            d="M 33 17 L 51 17"
            stroke="#ECEEF2"
            strokeWidth="4"
          />
          <path
            d="M 42 17 L 42 47"
            stroke="#ECEEF2"
            strokeWidth="4"
          />
        </g>

        {/* Acid Accent Dot */}
        <rect x="48" y="43" width="4" height="4" fill="#C7FF3D" />
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
          className={`font-black tracking-tight ${textStyles.title} ${titleColor} leading-none font-display uppercase`}
        >
          MEDIA-TARDS<span className={dotColor}>.</span>
        </span>
        {showTagline && (
          <span
            className={`font-mono uppercase font-bold mt-0.5 ${textStyles.tag} ${tagColor}`}
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
          className={`font-black tracking-tight ${textStyles.title} ${titleColor} leading-none font-display uppercase`}
        >
          MEDIA-TARDS<span className={dotColor}>.</span>
        </span>

        {showTagline && variant === 'full' && (
          <span
            className={`font-mono uppercase font-bold mt-0.5 ${textStyles.tag} ${tagColor}`}
          >
            Digital Growth Studio
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;

