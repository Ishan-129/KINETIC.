import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { Modal } from './ui/Modal';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudies';

const AuraClinicPreview = React.lazy(() =>
  import('./case-previews/AuraClinicPreview').then((m) => ({ default: m.AuraClinicPreview }))
);
const ForgeFitnessPreview = React.lazy(() =>
  import('./case-previews/ForgeFitnessPreview').then((m) => ({ default: m.ForgeFitnessPreview }))
);
const AtelierStudioPreview = React.lazy(() =>
  import('./case-previews/AtelierStudioPreview').then((m) => ({ default: m.AtelierStudioPreview }))
);

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const handleOpenPreview = (cs: CaseStudy) => {
    setSelectedCase(cs);
    setIsPreviewOpen(true);
  };

  const renderPreviewContent = () => {
    if (!selectedCase) return null;
    return (
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center p-20 text-slate-500 font-mono text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-gold animate-ping mr-3" />
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
        <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] bg-gradient-to-br from-[#F4F8FA] via-[#E8F0F5] to-[#DCE8F0] p-6 sm:p-10 flex flex-col justify-between overflow-hidden group">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-sky-900/10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-sky-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-sky-200" />
            </div>
            <span className="text-[11px] font-mono text-sky-800/70 tracking-wider">auraclinic.co</span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded font-semibold">0.8s load</span>
          </div>

          {/* Mockup Canvas */}
          <div className="my-auto py-8 text-center">
            <span className="text-xs font-mono tracking-[0.2em] text-sky-800 uppercase block mb-3 font-semibold">
              Dental &amp; Facial Aesthetics
            </span>
            <h4 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-md mx-auto mb-4">
              Calm, modern care for your smile.
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-950 text-white text-xs font-medium shadow-sm">
              <span>2-Tap Instant Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Outcome Tag */}
          <div className="flex items-center justify-between pt-4 border-t border-sky-900/10 text-xs font-mono text-sky-900">
            <span>Mobile Booking Flow</span>
            <span className="font-bold text-sky-950">Zero Friction Scheduler</span>
          </div>
        </div>
      );
    }

    if (study.id === 'forge-athletics') {
      return (
        <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] bg-gradient-to-br from-[#0F131D] via-[#161B28] to-[#0A0D14] text-white p-6 sm:p-10 flex flex-col justify-between overflow-hidden group">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-mono text-white/50 tracking-wider">forgeclub.fit</span>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded font-semibold">100/100 Perf</span>
          </div>

          {/* Mockup Canvas */}
          <div className="my-auto py-8 text-center">
            <span className="text-xs font-mono tracking-[0.2em] text-amber-400 uppercase block mb-3 font-semibold">
              Performance Strength Facility
            </span>
            <h4 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-md mx-auto mb-4">
              Strength forged without compromise.
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold shadow-sm">
              <span>Claim Digital Day Pass</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Outcome Tag */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-white/70">
            <span>Pass Redemption Engine</span>
            <span className="font-bold text-amber-400">Mobile Wallet Flow</span>
          </div>
        </div>
      );
    }

    // Atelier Studio
    return (
      <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] bg-gradient-to-br from-[#EDE6D8] via-[#E2D8C5] to-[#D5C8B0] p-6 sm:p-10 flex flex-col justify-between overflow-hidden group">
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-sand-500/30">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sand-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-sand-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-sand-400" />
          </div>
          <span className="text-[11px] font-mono text-slate-700 tracking-wider">atelierstudio.craft</span>
          <span className="text-[10px] font-mono text-slate-700 bg-sand-300/60 px-2 py-0.5 rounded font-semibold">Editorial</span>
        </div>

        {/* Mockup Canvas */}
        <div className="my-auto py-8 text-center">
          <span className="text-xs font-mono tracking-[0.2em] text-slate-700 uppercase block mb-3 font-semibold">
            Custom Architecture &amp; Millwork
          </span>
          <h4 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-md mx-auto mb-4">
            Tactile spaces crafted for generations.
          </h4>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-sm">
            <span>Inspect Project Estimator</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Outcome Tag */}
        <div className="flex items-center justify-between pt-4 border-t border-sand-500/30 text-xs font-mono text-slate-800">
          <span>Scope Pre-Qualification</span>
          <span className="font-bold text-slate-950">High-Ticket Filter</span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 sm:py-36 bg-[#FDFCF9] border-t border-slate-900 relative" id="work">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-slate-900 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block mb-3">
              Portfolio / Selected Work
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-none uppercase">
              Recent Work &amp;<br />
              Prototypes.
            </h2>
          </div>
          <p className="text-slate-700 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            Full-fidelity conversion engines engineered for real verticals. Click any prototype to test the interactive experience live in your browser.
          </p>
        </div>

        {/* Large Project Showcases */}
        <div className="space-y-24 sm:space-y-32">
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-20 border-b border-sand-400/70 last:border-b-0 last:pb-0"
            >
              {/* Left Details */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-slate-950">
                    0{idx + 1}
                  </span>
                  <span className="text-sand-400">/</span>
                  <span className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
                    {study.category} • {study.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
                  {study.name}
                </h3>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
                  {study.tagline}
                </p>

                {/* Craft Focus Highlights */}
                <div className="mb-8 pt-4 border-t border-sand-300 grid grid-cols-3 gap-3">
                  {study.focusHighlights.map((item, i) => (
                    <div key={i}>
                      <span className="text-base sm:text-lg font-bold text-slate-950 font-mono block">
                        {item.spec}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 leading-tight block">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Primary CTA */}
                <div>
                  <button
                    onClick={() => handleOpenPreview(study)}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-slate-950 text-[#FDFCF9] text-xs sm:text-sm font-semibold hover:bg-accent-gold hover:text-slate-950 transition-all duration-200 group shadow-sm"
                  >
                    <span>Inspect Live Prototype</span>
                    <Eye className="w-4 h-4 text-sand-400 group-hover:text-slate-950 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Right Large Project Visual Showcase */}
              <div
                onClick={() => handleOpenPreview(study)}
                className={`lg:col-span-7 rounded-xl overflow-hidden border border-slate-900 shadow-warm hover:shadow-warm-lg transition-all duration-300 cursor-pointer ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
                title="Click to test live interactive prototype"
              >
                {renderProjectVisual(study)}
              </div>
            </article>
          ))}
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

export default CaseStudiesSection;

