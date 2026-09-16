import React, { useState, useEffect, useRef, Suspense, useCallback } from 'react';

// Custom event name for triggering immediate section load
export const SECTION_LOAD_EVENT = 'app:load-section';

export const triggerSectionLoad = (id: string) => {
  if (!id) return;
  window.dispatchEvent(new CustomEvent(SECTION_LOAD_EVENT, { detail: { id } }));
};

/**
 * Smoothly scrolls to a target element, dynamically computing the navbar offset.
 * Uses a polling loop to wait until the element's position stabilises (i.e. the
 * lazy-loaded content has fully rendered and its layout is no longer shifting).
 */
const smoothScrollToElement = (el: HTMLElement) => {
  // Compute navbar height dynamically
  const navbar = document.querySelector('header');
  const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
  const offset = navbarHeight + 16; // 16px extra breathing room

  let lastTop = -1;
  let stableCount = 0;
  let attempts = 0;
  const maxAttempts = 30; // ~900ms max wait

  const poll = () => {
    attempts++;
    const rect = el.getBoundingClientRect();
    const currentTop = rect.top + window.scrollY;

    if (Math.abs(currentTop - lastTop) < 2) {
      stableCount++;
    } else {
      stableCount = 0;
    }
    lastTop = currentTop;

    // Position is stable for 2 consecutive reads, or we've exceeded max attempts
    if (stableCount >= 2 || attempts >= maxAttempts) {
      const targetY = Math.max(0, currentTop - offset);
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      return;
    }

    requestAnimationFrame(poll);
  };

  requestAnimationFrame(poll);
};

// Global click listener to intercept any anchor clicks (<a href="#...">) and handle scroll
if (typeof window !== 'undefined') {
  document.addEventListener(
    'click',
    (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          // Prevent the browser's default instant jump
          e.preventDefault();

          const targetId = href.substring(1);

          // Update URL hash without triggering a jump
          history.pushState(null, '', `#${targetId}`);

          // Trigger lazy-load of the target section
          triggerSectionLoad(targetId);
        }
      }
    },
    { capture: true }
  );
}

interface LazySectionProps {
  id?: string;
  minHeight?: string;
  bgClassName?: string;
  skeletonTitle?: string;
  children: React.ReactNode;
}

const SectionSkeleton: React.FC<{
  title?: string;
  bgClassName?: string;
  minHeight?: string;
}> = ({ title, bgClassName = 'bg-[#080B12]', minHeight = 'min-h-[450px]' }) => {
  return (
    <div
      className={`w-full ${minHeight} ${bgClassName} flex flex-col items-center justify-center p-8 transition-opacity duration-300`}
    >
      <div className="max-w-md w-full flex flex-col items-center gap-4 text-center">
        {/* Loading indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 border border-white/[0.08] text-[10px] font-mono text-[#525C71] animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-ping" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
          <span>{title || 'Loading section...'}</span>
        </div>

        {/* Shimmer placeholders */}
        <div className="w-3/4 h-8 bg-white/[0.04] animate-pulse" />
        <div className="w-1/2 h-4 bg-white/[0.03] animate-pulse" />

        <div className="w-full grid grid-cols-3 gap-4 mt-6">
          <div className="h-28 bg-white/[0.03] animate-pulse" />
          <div className="h-28 bg-white/[0.03] animate-pulse" />
          <div className="h-28 bg-white/[0.03] animate-pulse" />
        </div>
      </div>
    </div>
  );
};


export const LazySection: React.FC<LazySectionProps> = ({
  id,
  minHeight = 'min-h-[450px]',
  bgClassName = 'bg-ivory-50',
  skeletonTitle,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // When the lazy chunk finishes loading, perform any pending hash-scroll
  const handleMount = useCallback(() => {
    setIsMounted(true);
    if (pendingScrollRef.current && containerRef.current) {
      pendingScrollRef.current = false;
      smoothScrollToElement(containerRef.current);
    }
  }, []);

  // Handle nav-link clicks and hash navigation (scroll-to only, no gating)
  useEffect(() => {
    // On initial load, scroll if the URL already has this section's hash
    if (id && window.location.hash === `#${id}`) {
      pendingScrollRef.current = true;
    }

    const handleCustomLoad = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (id && customEvent.detail?.id === id) {
        if (isMounted && containerRef.current) {
          smoothScrollToElement(containerRef.current);
        } else {
          pendingScrollRef.current = true;
        }
      }
    };

    const handleHashChange = () => {
      if (id && window.location.hash === `#${id}` && containerRef.current) {
        if (isMounted) {
          smoothScrollToElement(containerRef.current);
        } else {
          pendingScrollRef.current = true;
        }
      }
    };

    window.addEventListener(SECTION_LOAD_EVENT, handleCustomLoad);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener(SECTION_LOAD_EVENT, handleCustomLoad);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [id, isMounted]);

  // Always render children — IntersectionObserver cannot be used here because
  // Lenis smooth-scroll keeps the native browser scroll position at 0 and moves
  // content via CSS transform, so the observer never fires for below-fold sections.
  return (
    <div
      ref={containerRef}
      id={id}
      className="scroll-mt-24"
    >
      <Suspense
        fallback={
          <SectionSkeleton
            title={skeletonTitle}
            bgClassName={bgClassName}
            minHeight={minHeight}
          />
        }
      >
        <MountNotifier onMount={handleMount}>
          {children}
        </MountNotifier>
      </Suspense>
    </div>
  );
};

const MountNotifier: React.FC<{ onMount: () => void; children: React.ReactNode }> = ({
  onMount,
  children,
}) => {
  useEffect(() => {
    onMount();
  }, [onMount]);

  return <>{children}</>;
};
