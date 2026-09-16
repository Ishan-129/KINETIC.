import React, { useEffect, useState, useRef } from 'react';

export type CursorState = 'default' | 'view' | 'explore' | 'cta' | 'drag' | 'select' | 'hidden';

export const SignalCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [customText, setCustomText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch / coarse pointer
    const checkTouch = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsTouch(isCoarse);
      if (!isCoarse) {
        document.body.classList.add('custom-cursor-enabled');
      } else {
        document.body.classList.remove('custom-cursor-enabled');
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as CursorState;
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorState(type || 'default');
        setCustomText(text);
      } else if (target.closest('a, button, input[type="submit"]')) {
        const isCta = target.closest('[data-cursor="cta"]') || (target.textContent && (target.textContent.toLowerCase().includes('talk') || target.textContent.toLowerCase().includes('start')));
        setCursorState(isCta ? 'cta' : 'explore');
        setCustomText('');
      } else {
        setCursorState('default');
        setCustomText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const render = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.35;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.35;

      trailPos.current.x += (mouse.current.x - trailPos.current.x) * 0.12;
      trailPos.current.y += (mouse.current.y - trailPos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isTouch, isVisible]);

  if (isTouch) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Restrained Motion Trail Ring */}
      <div
        ref={trailRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            cursorState === 'default'
              ? 'w-9 h-9 border-studio-ink/20'
              : cursorState === 'view'
              ? 'w-20 h-20 border-studio-gold/40 scale-105'
              : cursorState === 'cta'
              ? 'w-24 h-24 border-accent-acid/50 bg-accent-acid/5 scale-110'
              : 'w-14 h-14 border-studio-ink/30'
          }`}
        />
      </div>

      {/* Primary Dynamic Signal Cursor */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        {cursorState === 'default' && (
          <div className="flex items-center gap-1.5 bg-studio-ink text-[#F5F2EB] px-2.5 py-1 rounded shadow-studio-sm transition-transform duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-acid animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-widest leading-none">
              MT / 01
            </span>
          </div>
        )}

        {cursorState === 'view' && (
          <div className="flex items-center gap-1.5 bg-studio-gold text-studio-ink px-3.5 py-1.5 rounded font-mono text-xs font-extrabold tracking-wider shadow-studio-md scale-110 transition-all duration-200">
            <span>{customText || 'VIEW →'}</span>
          </div>
        )}

        {cursorState === 'explore' && (
          <div className="flex items-center gap-1 bg-studio-ink text-[#F5F2EB] px-3 py-1 rounded font-mono text-[11px] font-bold tracking-wider shadow-studio-sm transition-all duration-200">
            <span className="text-studio-gold">●</span>
            <span>{customText || 'EXPLORE'}</span>
          </div>
        )}

        {cursorState === 'cta' && (
          <div className="flex items-center gap-1.5 bg-accent-acid text-studio-ink px-3.5 py-1.5 rounded font-mono text-xs font-black tracking-wider shadow-studio-md scale-110 transition-all duration-200">
            <span>{customText || "LET'S TALK ↗"}</span>
          </div>
        )}

        {cursorState === 'select' && (
          <div className="flex items-center gap-1 bg-studio-ink text-accent-acid px-3 py-1 rounded font-mono text-[11px] font-bold tracking-wider shadow-studio-sm transition-all duration-200">
            <span>{customText || 'SELECT ◈'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

