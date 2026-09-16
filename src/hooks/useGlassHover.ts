import { useRef, useCallback } from 'react';

interface GlassHoverOptions {
  maxTilt?: number;       // degrees (default: 8)
  scale?: number;         // scale on hover (default: 1.02)
  perspective?: number;   // px (default: 800)
}

/**
 * useGlassHover — Applies a perspective tilt + subtle scale to a card element
 * based on mouse position within the card. Returns a ref to attach and mouse handlers.
 * Respects prefers-reduced-motion.
 */
export const useGlassHover = (options: GlassHoverOptions = {}) => {
  const { maxTilt = 8, scale = 1.02, perspective = 800 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    ref.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    ref.current.style.transition = 'transform 0.05s ease-out';
  }, [maxTilt, scale, perspective]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    ref.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
  }, [perspective]);

  return { ref, handleMouseMove, handleMouseLeave };
};
