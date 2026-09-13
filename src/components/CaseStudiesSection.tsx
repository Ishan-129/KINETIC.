import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Eye, Sparkles, Target } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Modal } from './ui/Modal';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudies';
const AuraClinicPreview = React.lazy(() => import('./case-previews/AuraClinicPreview').then(m => ({ default: m.AuraClinicPreview })));
const ForgeFitnessPreview = React.lazy(() => import('./case-previews/ForgeFitnessPreview').then(m => ({ default: m.ForgeFitnessPreview })));
const AtelierStudioPreview = React.lazy(() => import('./case-previews/AtelierStudioPreview').then(m => ({ default: m.AtelierStudioPreview })));

const accentClasses: Record<string, { bg: string; border: string; text: string; badge: 'gold' | 'coral' | 'forest' }> = {
  'aura-clinic':     { bg: 'from-sky-50 to-blue-50',   border: 'border-sky-200',   text: 'text-sky-700',   badge: 'gold' },
  'forge-athletics': { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'coral' },
  'atelier-studio':  { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'forest' },
};

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
          <div className="flex items-center justify-center p-16 text-slate-500 font-mono text-sm">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping mr-3" />
            Loading interactive prototype...
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
    <section id="work" className="py-24 sm:py-32 bg-ivory-100 border-t border-sand-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Demonstrated Craft"
          title="Concept Benchmarks Built for Real Business Outcomes"
          subtitle="We don't hide behind fabricated testimonials or generic WordPress themes. We build full-fidelity, interactive prototypes designed to solve actual conversion bottlenecks."
        />

        {/* Case Studies */}
        <div className="space-y-10 mt-4">
          {CASE_STUDIES.map((study, idx) => {
            const accent = accentClasses[study.id] ?? accentClasses['aura-clinic'];
            return (
              <div
                key={study.id}
                className="bg-white border border-sand-300 rounded-2xl overflow-hidden shadow-warm-md hover:shadow-warm-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left: Description */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="px-3 py-1 rounded-full bg-ivory-200 border border-sand-300 text-xs font-mono text-slate-500">
                          0{idx + 1}
                        </span>
                        <Badge variant={accent.badge} size="sm">
                          {study.badge}
                        </Badge>
                        <span className="text-xs font-mono text-slate-400">{study.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                        {study.name}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed mb-6 font-medium italic">
                        "{study.tagline}"
                      </p>

                      {/* Challenge & Solution */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl">
                          <div className="flex items-center gap-2 text-rose-600 text-xs font-mono mb-2">
                            <Target className="w-3.5 h-3.5" />
                            <span>THE BOTTLENECK</span>
                          </div>
                          <p className="text-xs text-rose-800 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                          <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>OUR STRATEGIC FIX</span>
                          </div>
                          <p className="text-xs text-emerald-900 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Deliverable Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-ivory-200 border border-sand-300 text-slate-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-sand-300">
                      <Button
                        variant="glow"
                        size="md"
                        onClick={() => handleOpenPreview(study)}
                        icon={<Eye className="w-4 h-4" />}
                      >
                        Test Interactive Demo
                      </Button>
                      <Button
                        asLink
                        href="#audit"
                        variant="ghost"
                        size="md"
                        icon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        Discuss Your Project
                      </Button>
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div
                    className={`lg:col-span-5 bg-gradient-to-br ${accent.bg} p-6 sm:p-10 border-t lg:border-t-0 lg:border-l ${accent.border} flex flex-col justify-between`}
                  >
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-4">
                        Expected Conversion Benchmarks
                      </span>

                      <div className="space-y-3 mb-8">
                        {study.keyOutcomes.map((outcome, oIdx) => (
                          <div
                            key={oIdx}
                            className="bg-white border border-sand-300 p-4 rounded-xl flex items-center justify-between shadow-warm-sm"
                          >
                            <span className="text-xs sm:text-sm text-slate-600">{outcome.label}</span>
                            <span
                              className="text-xl sm:text-2xl font-extrabold font-mono"
                              style={{ color: study.accentColor }}
                            >
                              {outcome.metric}
                            </span>
                          </div>
                        ))}
                      </div>

                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                        Conversion Mechanics
                      </span>
                      <ul className="space-y-2.5">
                        {study.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-sand-300 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Live Architecture</span>
                      <span className="text-accent-forest flex items-center gap-1.5 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-forest animate-pulse" />
                        Interactive Demo Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Preview Modal */}
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
