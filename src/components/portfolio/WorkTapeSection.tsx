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

export const WorkTapeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);

  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const handleOpenPreview = (cs: CaseStudy) => {
    setSelectedCase(cs);
    setIsPreviewOpen(true);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) {
      return;
    }

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
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      pinTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.trigger === triggerEl && t.kill());
    };
  }, []);

  const renderPreviewContent = () => {
    if (!selectedCase) return null;
    return (
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center p-20 text-studio-ink font-mono text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-studio-gold animate-ping mr-3" />
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

  const renderProjectVisual = (study: CaseStudy) => {
    if (study.id === 'aura-clinic') {
      return (
        <div className="relative w-full h-[360px] sm:h-[440px] bg-[#EBF3F7] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group-hover:bg-[#E2EFF5] transition-colors">
          {/* Top Tape Header */}
          <div className="flex items-center justify-between pb-3 border-b border-studio-ink/15 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span className="text-studio-ink font-bold">auraclinic.co</span>
            </div>
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 font-bold border border-emerald-500/20">
              0.8s load
            </span>
          </div>

          {/* Central Editorial Layout */}
          <div className="my-auto text-center py-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-800 font-bold block mb-2">
              Aesthetic Dentistry &amp; Facial Practice
            </span>
            <h4 className="font-display text-3xl sm:text-4xl font-black text-studio-ink tracking-tight leading-tight max-w-sm mx-auto mb-4">
              Calm, modern care for your smile.
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-studio-ink text-white font-mono text-xs font-bold shadow-studio-sm">
              <span>2-Tap Instant Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-acid" />
            </div>
          </div>

          {/* Bottom Metas */}
          <div className="flex items-center justify-between pt-3 border-t border-studio-ink/15 font-mono text-xs text-studio-ink/70">
            <span>Direct WhatsApp Booking</span>
            <span className="font-bold text-studio-ink">Zero Phone Bottleneck</span>
          </div>
        </div>
      );
    }

    if (study.id === 'forge-athletics') {
      return (
        <div className="relative w-full h-[360px] sm:h-[440px] bg-studio-ink text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden group-hover:bg-[#080B1E] transition-colors">
          {/* Top Tape Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/15 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-white font-bold">forgeclub.fit</span>
            </div>
            <span className="px-2 py-0.5 bg-amber-400/15 text-amber-300 font-bold border border-amber-400/30">
              100/100 Perf
            </span>
          </div>

          {/* Central Editorial Layout */}
          <div className="my-auto text-center py-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400 font-bold block mb-2">
              Boutique Performance Facility
            </span>
            <h4 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight max-w-sm mx-auto mb-4">
              Strength forged without compromise.
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-studio-ink font-mono text-xs font-black shadow-studio-sm">
              <span>Claim Digital Day Pass</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bottom Metas */}
          <div className="flex items-center justify-between pt-3 border-t border-white/15 font-mono text-xs text-white/70">
            <span>Apple Wallet Pass Engine</span>
            <span className="font-bold text-amber-400">1-Click Pass Flow</span>
          </div>
        </div>
      );
    }

    // Atelier Studio
    return (
      <div className="relative w-full h-[360px] sm:h-[440px] bg-[#EAE2D2] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group-hover:bg-[#E3D9C5] transition-colors">
        {/* Top Tape Header */}
        <div className="flex items-center justify-between pb-3 border-b border-studio-ink/15 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sand-500" />
            <span className="text-studio-ink font-bold">atelierstudio.craft</span>
          </div>
          <span className="px-2 py-0.5 bg-studio-ink/10 text-studio-ink font-bold border border-studio-ink/20">
            Editorial Craft
          </span>
        </div>

        {/* Central Editorial Layout */}
        <div className="my-auto text-center py-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-studio-ink/70 font-bold block mb-2">
            Bespoke Architecture &amp; Millwork
          </span>
          <h4 className="font-display text-3xl sm:text-4xl font-black text-studio-ink tracking-tight leading-tight max-w-sm mx-auto mb-4">
            Tactile spaces crafted for generations.
          </h4>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-studio-ink text-[#F5F2EB] font-mono text-xs font-bold shadow-studio-sm">
            <span>Project Scope Estimator</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-studio-gold" />
          </div>
        </div>

        {/* Bottom Metas */}
        <div className="flex items-center justify-between pt-3 border-t border-studio-ink/15 font-mono text-xs text-studio-ink/70">
          <span>High-Ticket Budget Qualifier</span>
          <span className="font-bold text-studio-ink">Pre-Qualified Leads</span>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="bg-studio-bg border-t border-studio-ink relative overflow-hidden" id="work">
      {/* Pinned Reel Trigger Container */}
      <div ref={triggerRef} className="w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-12">
          {/* Section Header */}
          <div className="pb-8 border-b border-studio-ink flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-studio-gold" />
                <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-studio-ink/70 uppercase font-bold">
                  PORTFOLIO // HORIZONTAL WORK TAPE
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-studio-ink tracking-tight leading-none uppercase">
                Selected Work &amp;<br />
                Live Prototypes.
              </h2>
            </div>
            <p className="text-studio-ink/80 text-base sm:text-lg max-w-md font-medium leading-relaxed">
              Full-fidelity conversion systems engineered for real verticals. Click any project to launch and test the interactive live prototype.
            </p>
          </div>
        </div>

        {/* ── Horizontal Scroll Tape Reel ── */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible pb-20 no-scrollbar">
          <div
            ref={reelRef}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 sm:px-8 lg:px-12 lg:w-max items-stretch"
          >
            {CASE_STUDIES.map((study, idx) => (
              <div
                key={study.id}
                onClick={() => handleOpenPreview(study)}
                data-cursor="view"
                data-cursor-text={`INSPECT 0${idx + 1}`}
                className="w-full lg:w-[680px] shrink-0 bg-[#F5F2EB] border-2 border-studio-ink p-6 sm:p-8 flex flex-col justify-between cursor-pointer hover:shadow-studio-lg hover:border-studio-gold transition-all duration-300 group"
              >
                {/* Project Header Tag */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-studio-ink/20">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-black text-studio-ink">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-bold tracking-widest text-studio-ink/60 uppercase">
                      / {study.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 bg-studio-ink text-accent-acid uppercase">
                    {study.badge}
                  </span>
                </div>

                {/* Project Visual Canvas */}
                <div className="border border-studio-ink overflow-hidden mb-6 group-hover:scale-[1.01] transition-transform duration-300">
                  {renderProjectVisual(study)}
                </div>

                {/* Project Metadata & Headline */}
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-studio-ink tracking-tight uppercase mb-2 group-hover:text-studio-gold transition-colors">
                    {study.name}
                  </h3>
                  <p className="text-sm sm:text-base text-studio-ink/80 font-medium leading-snug mb-6">
                    {study.tagline}
                  </p>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-studio-ink/20 mb-6 font-mono">
                    {study.focusHighlights.map((hl, hIdx) => (
                      <div key={hIdx}>
                        <div className="text-base font-extrabold text-studio-ink">
                          {hl.spec}
                        </div>
                        <div className="text-[10px] text-studio-ink/60 leading-tight">
                          {hl.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-studio-ink/60 font-semibold uppercase">
                      Click to test prototype
                    </span>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-studio-ink text-[#F5F2EB] font-mono text-xs font-bold uppercase group-hover:bg-studio-gold group-hover:text-studio-ink transition-colors">
                      <span>Launch Prototype</span>
                      <Eye className="w-3.5 h-3.5 text-accent-acid group-hover:text-studio-ink" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Interactive Demo Modal */}
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

