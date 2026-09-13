import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Eye, Sparkles, Target } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Modal } from './ui/Modal';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudies';
import { AuraClinicPreview } from './case-previews/AuraClinicPreview';
import { ForgeFitnessPreview } from './case-previews/ForgeFitnessPreview';
import { AtelierStudioPreview } from './case-previews/AtelierStudioPreview';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const handleOpenPreview = (cs: CaseStudy) => {
    setSelectedCase(cs);
    setIsPreviewOpen(true);
  };

  const renderPreviewContent = () => {
    if (!selectedCase) return null;
    if (selectedCase.id === 'aura-clinic') return <AuraClinicPreview />;
    if (selectedCase.id === 'forge-athletics') return <ForgeFitnessPreview />;
    if (selectedCase.id === 'atelier-studio') return <AtelierStudioPreview />;
    return null;
  };

  return (
    <section id="work" className="py-24 sm:py-32 bg-obsidian-900 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Demonstrated Craft"
          title="Concept Benchmarks Built for Real Business Outcomes"
          subtitle="We don't hide behind fabricated testimonials or generic WordPress themes. We build full-fidelity, interactive prototypes designed to solve actual conversion bottlenecks."
        />

        {/* Case Studies List */}
        <div className="space-y-12 mt-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="bg-obsidian-950 border border-surface-border hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-obsidian-800 border border-surface-border text-xs font-mono text-slate-300">
                        0{idx + 1}
                      </span>
                      <Badge variant="cyan" size="sm">
                        {study.badge}
                      </Badge>
                      <span className="text-xs font-mono text-slate-400">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                      {study.name}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-6 font-medium">
                      "{study.tagline}"
                    </p>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="bg-obsidian-900/90 border border-surface-border p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-rose-400 text-xs font-mono mb-2">
                          <Target className="w-3.5 h-3.5" />
                          <span>THE BOTTLENECK</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="bg-obsidian-900/90 border border-surface-border p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>OUR STRATEGIC FIX</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Deliverables Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-obsidian-900 border border-surface-border text-slate-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-surface-border/60">
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

                {/* Right Metrics & Feature Column */}
                <div className={`lg:col-span-5 bg-gradient-to-br ${study.color} p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-surface-border flex flex-col justify-between`}>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
                      Expected Conversion Benchmarks
                    </span>

                    {/* Metric Cards */}
                    <div className="space-y-3 mb-8">
                      {study.keyOutcomes.map((outcome, oIdx) => (
                        <div
                          key={oIdx}
                          className="bg-obsidian-900/80 border border-surface-border/80 backdrop-blur-md p-4 rounded-xl flex items-center justify-between"
                        >
                          <span className="text-xs sm:text-sm text-slate-300">{outcome.label}</span>
                          <span className="text-xl sm:text-2xl font-bold text-white font-mono" style={{ color: study.accentColor }}>
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
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Live Architecture</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Interactive Demo Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Prototype Preview Modal */}
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
