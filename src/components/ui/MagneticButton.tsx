import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  cursorText?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.28,
  className = '',
  as = 'button',
  href,
  target,
  rel,
  cursorText = "LET'S TALK ↗",
  onClick,
  style,
  ...rest
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!elementRef.current) return;
    const { left, top, width, height } = elementRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const transformStyle: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0
      ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
      : 'none',
    ...style,
  };

  const commonProps = {
    style: transformStyle,
    'data-cursor': 'cta' as const,
    'data-cursor-text': cursorText,
    className: `inline-flex items-center justify-center select-none ${className}`,
  };

  if (as === 'a' && href) {
    return (
      <div
        ref={elementRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a
          href={href}
          target={target}
          rel={rel}
          {...commonProps}
          onClick={onClick as any}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        {...commonProps}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};
