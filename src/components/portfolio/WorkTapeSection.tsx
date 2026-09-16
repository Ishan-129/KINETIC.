import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, ArrowUpRight } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { CASE_STUDIES, CaseStudy } from '../../data/caseStudies';

gsap.registerPlugin(ScrollTrigger);

const AuraClinicPreview = React.lazy(() =>
  import('../case-previews/AuraClinicPreview').then((m) => ({ default: m.AuraClinicPreview }))
);
const ForgeFitnessPreview = React.lazy(() =>
  import('../case-previews/ForgeFitnessPreview').then((m) => ({ default: m.ForgeFitnessPreview }))
);
const AtelierStudioPreview = React.lazy(() =>
  import('../case-previews/AtelierStudioPreview').then((m) => ({ default: m.AtelierStudioPreview }))
);

// Per-project color palettes — Kinetic-Dark editorial style
const projectPalettes: Record<string, { bg: string; text: string; accent: string; dim: string }> = {
  'aura-clinic': {
    bg: '#0A1520',
    text: '#B8D4E8',
    accent: '#3B8EFF',
    dim: '#1A2A3A',
  },
  'forge-athletics': {
    bg: '#12100A',
    text: '#E8C870',
    accent: '#C7FF3D',
    dim: '#1E1A0E',
  },
  'atelier-studio': {
    bg: '#140F0E',
    text: '#D4C4B8',
    accent: '#FF4F3B',
    dim: '#1E1815',
  },
};

export const WorkTapeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);

  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleOpenPreview = (cs: CaseStudy) => {
    setSelectedCase(cs);
    setIsPreviewOpen(true);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) return;

    const triggerEl = triggerRef.current;
    const reelEl = reelRef.current;
    if (!triggerEl || !reelEl) return;

    const totalScroll = reelEl.scrollWidth - window.innerWidth;

    const pinTween = gsap.to(reelEl, {
      x: () => -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top top',
        end: () => `+=${totalScroll + 200}`,
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      pinTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.trigger === triggerEl && t.kill());
    };
  }, []);

  const renderProjectVisual = (study: CaseStudy) => {
    const palette = projectPalettes[study.id] || projectPalettes['aura-clinic'];
    const isHovered = hoveredId === study.id;

    return (
      <div
        className="relative w-full h-[320px] sm:h-[400px] flex flex-col justify-between overflow-hidden transition-all duration-500 p-6 sm:p-8"
        style={{ backgroundColor: palette.bg }}
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-studio-grid opacity-30" />

        {/* Accent glow */}
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${palette.accent}20 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0.5,
          }}
        />

        {/* Top bar */}
        <div className="relative flex items-center justify-between pb-3 border-b border-white/[0.08] font-mono text-[10px] z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: palette.accent }} />
            <span style={{ color: palette.text }}>{study.name.toLowerCase().replace(' ', '')}.co</span>
          </div>
          <span
            className="px-2 py-0.5 font-bold"
            style={{ color: palette.accent, background: `${palette.accent}18`, border: `1px solid ${palette.accent}30` }}
          >
            {study.badge}
          </span>
        </div>

        {/* Central content */}
        <div className="relative my-auto text-center py-4 z-10">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] font-bold block mb-3" style={{ color: palette.accent }}>
            {study.category}
          </span>
          <h4
            className="font-display font-black tracking-tight leading-tight max-w-xs mx-auto mb-5"
            style={{
              fontSize: 'clamp(1.4rem, 4vw, 2rem)',
              color: palette.text,
              filter: isHovered ? 'none' : 'saturate(0.6)',
              transition: 'filter 0.4s ease',
            }}
          >
            {study.tagline}
          </h4>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-[10px] font-black"
            style={{ backgroundColor: palette.accent, color: '#080B12' }}
          >
            <span>Launch Prototype</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom meta */}
        <div className="relative flex items-center justify-between pt-3 border-t border-white/[0.08] font-mono text-[10px] z-10" style={{ color: `${palette.text}80` }}>
          {study.focusHighlights?.slice(0, 2).map((hl, i) => (
            <span key={i}>{hl.spec} {hl.label}</span>
          ))}
        </div>
      </div>
    );
  };

  const renderPreviewContent = () => {
    if (!selectedCase) return null;
    return (
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center p-20 text-[#8A92A6] font-mono text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C7FF3D] animate-ping mr-3" style={{ boxShadow: '0 0 8px rgba(199,255,61,0.8)' }} />
            Loading live prototype...
          </div>
        }
      >
        {selectedCase.id === 'aura-clinic' && <AuraClinicPreview />}
        {selectedCase.id === 'forge-athletics' && <ForgeFitnessPreview />}
        {selectedCase.id === 'atelier-studio' && <AtelierStudioPreview />}
      </React.Suspense>
    );
  };

  return (
    <section ref={sectionRef} className="bg-[#080B12] border-t border-white/[0.06] relative overflow-hidden" id="work">
      <div className="noise-section" />

      <div ref={triggerRef} className="w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-12 relative z-10">
          {/* Section Header */}
          <div className="pb-8 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#525C71] uppercase font-bold">
                  PORTFOLIO // HORIZONTAL WORK TAPE
                </span>
              </div>
              <h2
                className="font-display font-black text-[#ECEEF2] tracking-tight leading-[0.88] uppercase"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
              >
                Selected Work &<br />
                Live Prototypes.
              </h2>
            </div>
            <p className="text-[#8A92A6] text-base sm:text-lg max-w-md font-body leading-relaxed">
              Full-fidelity conversion systems engineered for real verticals. Click any project to launch the interactive live prototype.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Reel */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible pb-20 no-scrollbar">
          <div
            ref={reelRef}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-6 sm:px-8 lg:px-12 lg:w-max items-stretch"
          >
            {CASE_STUDIES.map((study, idx) => (
              <div
                key={study.id}
                onClick={() => handleOpenPreview(study)}
                onMouseEnter={() => setHoveredId(study.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="view"
                data-cursor-text={`INSPECT 0${idx + 1}`}
                className="w-full lg:w-[640px] shrink-0 bg-[#0D1117] border border-white/[0.07] p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 group"
                style={{
                  borderColor: hoveredId === study.id
                    ? `${projectPalettes[study.id]?.accent}30`
                    : undefined,
                  boxShadow: hoveredId === study.id
                    ? `0 0 40px ${projectPalettes[study.id]?.accent}08`
                    : undefined,
                }}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-black text-[#1A2030]">0{idx + 1}</span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#525C71] uppercase">
                      / {study.category}
                    </span>
                  </div>
                  <div
                    className="font-mono text-[10px] font-black px-2.5 py-1 uppercase"
                    style={{
                      color: projectPalettes[study.id]?.accent,
                      background: `${projectPalettes[study.id]?.accent}15`,
                    }}
                  >
                    {study.badge}
                  </div>
                </div>

                {/* Project Visual */}
                <div className="border border-white/[0.06] overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-[1.005]">
                  {renderProjectVisual(study)}
                </div>

                {/* Project Info */}
                <div>
                  <h3
                    className="font-display text-2xl sm:text-3xl font-black text-[#ECEEF2] tracking-tight uppercase mb-2 transition-colors duration-200"
                    style={{ color: hoveredId === study.id ? projectPalettes[study.id]?.accent : undefined }}
                  >
                    {study.name}
                  </h3>
                  <p className="text-sm text-[#8A92A6] font-body leading-snug mb-5">{study.tagline}</p>

                  {/* Metric strip */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/[0.06] mb-5 font-mono">
                    {study.focusHighlights?.map((hl, hIdx) => (
                      <div key={hIdx}>
                        <div className="text-base font-extrabold text-[#ECEEF2]">{hl.spec}</div>
                        <div className="text-[9px] text-[#525C71] leading-tight">{hl.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#525C71] font-semibold uppercase">
                      Click to test prototype
                    </span>
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 font-mono text-[10px] font-black uppercase transition-colors duration-200"
                      style={{
                        backgroundColor: hoveredId === study.id ? projectPalettes[study.id]?.accent : '#13181F',
                        color: hoveredId === study.id ? '#080B12' : '#8A92A6',
                      }}
                    >
                      <span>Launch Prototype</span>
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title={selectedCase?.name}
        maxWidth="6xl"
      >
        {renderPreviewContent()}
      </Modal>
    </section>
  );
};

export default WorkTapeSection;
