import React, { useState, useEffect, useRef, Suspense } from 'react';

// Custom event name for triggering immediate section load
export const SECTION_LOAD_EVENT = 'app:load-section';

export const triggerSectionLoad = (id: string) => {
  if (!id) return;
  window.dispatchEvent(new CustomEvent(SECTION_LOAD_EVENT, { detail: { id } }));
};

// Global click listener to intercept any anchor clicks (<a href="#...">) and load the target section
if (typeof window !== 'undefined') {
  document.addEventListener(
    'click',
    (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const targetId = href.substring(1);
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
  rootMargin?: string;
  children: React.ReactNode;
}

const SectionSkeleton: React.FC<{
  title?: string;
  bgClassName?: string;
  minHeight?: string;
}> = ({ title, bgClassName = 'bg-ivory-50', minHeight = 'min-h-[450px]' }) => {
  return (
    <div
      className={`w-full ${minHeight} ${bgClassName} flex flex-col items-center justify-center p-8 transition-opacity duration-300`}
    >
      <div className="max-w-md w-full flex flex-col items-center gap-4 text-center">
        {/* Subtle glowing pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-200/60 border border-sand-300 text-xs font-mono text-slate-500 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
          <span>{title || 'Loading section...'}</span>
        </div>

        {/* Shimmer placeholders */}
        <div className="w-3/4 h-8 bg-sand-200/50 rounded-lg animate-pulse" />
        <div className="w-1/2 h-4 bg-sand-200/30 rounded-md animate-pulse" />

        <div className="w-full grid grid-cols-3 gap-4 mt-6">
          <div className="h-28 bg-sand-200/40 rounded-xl animate-pulse" />
          <div className="h-28 bg-sand-200/40 rounded-xl animate-pulse" />
          <div className="h-28 bg-sand-200/40 rounded-xl animate-pulse" />
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
  rootMargin = '350px 0px',
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if current URL hash matches this section's id
    if (id && window.location.hash === `#${id}`) {
      setIsVisible(true);
    }

    // Custom event to force-load on nav link click
    const handleCustomLoad = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (id && customEvent.detail?.id === id) {
        setIsVisible(true);
        // Ensure smooth scroll to section after short tick for mounting
        setTimeout(() => {
          if (containerRef.current) {
            const yOffset = -70; // Offset for fixed navbar
            const y = containerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 60);
      }
    };

    const handleHashChange = () => {
      if (id && window.location.hash === `#${id}`) {
        setIsVisible(true);
      }
    };

    window.addEventListener(SECTION_LOAD_EVENT, handleCustomLoad);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener(SECTION_LOAD_EVENT, handleCustomLoad);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [id]);

  useEffect(() => {
    if (isVisible) return; // Already triggered

    const node = containerRef.current;
    if (!node) return;

    // Use IntersectionObserver to load when user approaches
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, rootMargin]);

  return (
    <div
      ref={containerRef}
      id={!isMounted ? id : undefined}
      className={`scroll-mt-20 ${!isMounted ? minHeight : ''}`}
    >
      {isVisible ? (
        <Suspense
          fallback={
            <SectionSkeleton
              title={skeletonTitle}
              bgClassName={bgClassName}
              minHeight={minHeight}
            />
          }
        >
          <MountNotifier onMount={() => setIsMounted(true)}>
            {children}
          </MountNotifier>
        </Suspense>
      ) : (
        <SectionSkeleton
          title={skeletonTitle}
          bgClassName={bgClassName}
          minHeight={minHeight}
        />
      )}
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
