import React, { useEffect, useState, useRef } from 'react';

export type CursorState = 'default' | 'view' | 'explore' | 'cta' | 'drag' | 'select' | 'hidden';

export const SignalCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [customText, setCustomText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const mouse = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
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
        const isCta = target.closest('[data-cursor="cta"]') ||
          (target.textContent && (
            target.textContent.toLowerCase().includes('talk') ||
            target.textContent.toLowerCase().includes('start')
          ));
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
      // Dot follows mouse closely
      pos.current.x += (mouse.current.x - pos.current.x) * 0.4;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.4;

      // Ring lags behind
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.10;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.10;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
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

  const ringSize = {
    default: 'w-8 h-8',
    view:    'w-20 h-20',
    cta:     'w-24 h-24',
    explore: 'w-12 h-12',
    drag:    'w-16 h-16',
    select:  'w-14 h-14',
    hidden:  'w-0 h-0',
  }[cursorState];

  const ringColor = {
    default: 'border-white/15',
    view:    'border-[#C7FF3D]/40',
    cta:     'border-[#C7FF3D]/60',
    explore: 'border-white/20',
    drag:    'border-[#3B8EFF]/40',
    select:  'border-[#FF4F3B]/40',
    hidden:  'border-transparent',
  }[cursorState];

  const ringGlow = {
    default: '',
    view:    '0 0 20px rgba(199,255,61,0.25)',
    cta:     '0 0 30px rgba(199,255,61,0.40)',
    explore: '',
    drag:    '0 0 20px rgba(59,142,255,0.25)',
    select:  '0 0 20px rgba(255,79,59,0.25)',
    hidden:  '',
  }[cursorState];

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Lagged Ring */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full border transition-all duration-300 ${ringSize} ${ringColor}`}
          style={{ boxShadow: ringGlow }}
        />
      </div>

      {/* Primary Dot + Label */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        {cursorState === 'default' && (
          <div
            className="w-2.5 h-2.5 rounded-full bg-[#C7FF3D] transition-all duration-200"
            style={{ boxShadow: '0 0 8px rgba(199,255,61,0.8), 0 0 16px rgba(199,255,61,0.4)' }}
          />
        )}

        {(cursorState === 'view' || cursorState === 'explore') && (
          <div className="flex items-center gap-1 bg-[#C7FF3D] text-[#080B12] px-3 py-1.5 font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-200 select-none whitespace-nowrap">
            <span>{customText || (cursorState === 'view' ? 'VIEW →' : 'EXPLORE')}</span>
          </div>
        )}

        {cursorState === 'cta' && (
          <div
            className="flex items-center gap-1 bg-[#C7FF3D] text-[#080B12] px-4 py-2 font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-200 select-none whitespace-nowrap"
            style={{ boxShadow: '0 0 20px rgba(199,255,61,0.5)' }}
          >
            <span>{customText || "LET'S TALK ↗"}</span>
          </div>
        )}

        {cursorState === 'select' && (
          <div className="flex items-center gap-1 bg-[#FF4F3B] text-white px-3 py-1.5 font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-200 select-none whitespace-nowrap">
            <span>{customText || 'SELECT'}</span>
          </div>
        )}

        {cursorState === 'drag' && (
          <div className="flex items-center gap-1 bg-[#3B8EFF] text-white px-3 py-1.5 font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-200 select-none whitespace-nowrap">
            <span>{customText || 'DRAG'}</span>
          </div>
        )}
      </div>
    </div>
  );
};
