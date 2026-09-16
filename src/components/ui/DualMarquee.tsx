import React, { useRef, useEffect } from 'react';

/**
 * Kinetic-Dark DualMarquee
 * - Velocity-reactive speed via --marquee-speed CSS custom property
 * - Reverses direction + slows on hover
 * - Acid green separators + glowing text on hover
 */
export const DualMarquee: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  const row1 = [
    'WEBSITES THAT CONVERT',
    'DIRECT FOUNDER EXECUTION',
    'SUB-SECOND REACT SPEED',
    'FULL SOCIAL MEDIA SYSTEMS',
    'HIGH-INTENT LEAD ADS',
    'ZERO ACCOUNT MANAGERS',
  ];

  const row2 = [
    'DISCOVER → TRUST → CONVERT',
    '2–3 WEEK RAPID SPRINTS',
    'NO WORDPRESS BLOAT',
    'CLEAR UPFRONT PRICING',
    'MUMBAI / GLOBAL EDGE',
    'LOOKS GOOD. WORKS HARDER.',
  ];

  // Double for seamless loop
  const r1 = [...row1, ...row1];
  const r2 = [...row2, ...row2];

  useEffect(() => {
    if (!wrapperRef.current) return;
    const el = wrapperRef.current;

    const handleScroll = () => {
      const now = Date.now();
      const dt = Math.max(now - lastTime.current, 1);
      const dy = Math.abs(window.scrollY - lastScrollY.current);
      const velocity = Math.min(dy / dt, 4); // cap

      const baseSpeed = 28;
      const newSpeed = Math.max(8, baseSpeed - velocity * 20);
      el.style.setProperty('--marquee-speed', `${newSpeed}s`);
      el.style.setProperty('--marquee-speed-r', `${Math.max(6, newSpeed * 0.85)}s`);

      lastScrollY.current = window.scrollY;
      lastTime.current = now;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="marquee-wrapper border-y border-white/[0.06] bg-[#0D1117] py-3 overflow-hidden select-none space-y-2 relative"
      style={{ '--marquee-speed': '28s', '--marquee-speed-r': '24s' } as React.CSSProperties}
    >
      {/* Subtle grain */}
      <div className="noise-section" />

      {/* Row 1 — Left scroll */}
      <div className="overflow-hidden">
        <div className="animate-marquee-left flex items-center gap-0 font-mono text-xs tracking-[0.22em] uppercase font-bold text-[#525C71]">
          {r1.map((item, idx) => (
            <React.Fragment key={`r1-${idx}`}>
              <span className="px-5 hover:text-[#ECEEF2] transition-colors duration-200 cursor-default whitespace-nowrap">
                {item}
              </span>
              <span
                className="text-[#C7FF3D] flex-shrink-0"
                style={{ textShadow: '0 0 8px rgba(199,255,61,0.6)' }}
              >
                ◆
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2 — Right scroll */}
      <div className="overflow-hidden border-t border-white/[0.04] pt-2">
        <div className="animate-marquee-right flex items-center gap-0 font-mono text-[10px] tracking-[0.18em] uppercase font-semibold text-[#525C71]">
          {r2.map((item, idx) => (
            <React.Fragment key={`r2-${idx}`}>
              <span className="px-5 hover:text-[#8A92A6] transition-colors duration-200 cursor-default whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#C7FF3D]/50 flex-shrink-0">◇</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
