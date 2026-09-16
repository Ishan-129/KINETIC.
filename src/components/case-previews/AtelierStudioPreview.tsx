import React, { useState } from 'react';
import { Compass, CheckCircle2, Sliders, Layers, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const AtelierStudioPreview: React.FC = () => {
  const [projectType, setProjectType] = useState('Architectural Kitchen & Scullery');
  const [finish, setFinish] = useState('Rift-Sawn White Oak');
  const [scopeSqFt, setScopeSqFt] = useState(650);
  const [consultationBooked, setConsultationBooked] = useState(false);

  const types = [
    { name: 'Architectural Kitchen & Scullery', baseCost: 65000 },
    { name: 'Executive Library & Custom Millwork', baseCost: 45000 },
    { name: 'Full Residence Architectural Joinery', baseCost: 110000 },
  ];

  const finishes = [
    { name: 'Rift-Sawn White Oak', multiplier: 1.0 },
    { name: 'American Black Walnut', multiplier: 1.2 },
    { name: 'Calacatta Honed Marble & Brass', multiplier: 1.35 },
  ];

  const currentType = types.find(t => t.name === projectType) || types[0];
  const currentFinish = finishes.find(f => f.name === finish) || finishes[0];

  const estimatedBudget = Math.round((currentType.baseCost + (scopeSqFt * 45)) * currentFinish.multiplier);

  if (consultationBooked) {
    return (
      <div className="bg-obsidian-950 border border-emerald-500/40 rounded-none p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-none bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-white mb-2">Project Brief Submitted</h4>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
          Your architectural scope for <strong className="text-white">{projectType}</strong> with <strong className="text-white">{finish}</strong> (~${estimatedBudget.toLocaleString()}) has been received. Our principal architect will contact you within 24 hours.
        </p>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setConsultationBooked(false)}
        >
          Reset Scope Estimator
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-obsidian-950 border border-surface-border rounded-none p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-surface-border gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>ATELIER STONE & TIMBER — ARCHITECTURAL ESTIMATOR</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Custom Millwork & Architectural Scope Estimator
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Pre-qualifying high-net-worth clients while establishing transparent craftsmanship value.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-none text-xs font-mono w-fit">
          <Sparkles className="w-3 h-3" />
          <span>Bespoke Engineering</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Project Type */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              01. Scope of Architecture
            </label>
            <div className="space-y-2">
              {types.map((t) => (
                <div
                  key={t.name}
                  onClick={() => setProjectType(t.name)}
                  className={`p-3 rounded-none border cursor-pointer transition-all flex items-center justify-between text-xs sm:text-sm ${
                    projectType === t.name
                      ? 'bg-emerald-500/10 border-emerald-400/50 text-white font-medium'
                      : 'bg-obsidian-900 border-surface-border text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{t.name}</span>
                  <span className="font-mono text-slate-500 text-xs">From ${t.baseCost.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Finishes */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              02. Primary Material Palette
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {finishes.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setFinish(f.name)}
                  className={`p-2.5 rounded-none border text-xs font-medium transition-all text-left ${
                    finish === f.name
                      ? 'bg-emerald-500/10 border-emerald-400 text-white'
                      : 'bg-obsidian-900 border-surface-border text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 mb-1.5 text-emerald-400" />
                  <div className="truncate">{f.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Footprint Slider */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                <span>03. Estimated Project Area</span>
              </span>
              <span className="font-mono text-white font-bold">{scopeSqFt} sq. ft.</span>
            </div>
            <input
              type="range"
              min="250"
              max="2000"
              step="50"
              value={scopeSqFt}
              onChange={(e) => setScopeSqFt(Number(e.target.value))}
              className="w-full h-2 bg-obsidian-900 rounded-none appearance-none cursor-pointer accent-emerald-400"
            />
          </div>
        </div>

        {/* Output Estimation Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-500/10 via-obsidian-900 to-obsidian-900 border border-emerald-500/30 rounded-none p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              Estimated Investment Scope
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              ${(Math.floor(estimatedBudget / 5000) * 5000).toLocaleString()} – ${(Math.ceil(estimatedBudget / 5000) * 5000 + 10000).toLocaleString()}
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Includes 3D architectural rendering, structural millwork fabrication, precision installation, and 10-year warranty.
            </p>

            <div className="mt-6 pt-6 border-t border-surface-border space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Focus:</span>
                <span className="font-medium text-white truncate max-w-[180px]">{projectType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Material Grade:</span>
                <span className="font-medium text-white">{finish}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Typical Build Timeline:</span>
                <span className="font-medium text-emerald-400">6–8 Weeks</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-surface-border">
            <Button
              variant="glow"
              size="md"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/20"
              onClick={() => setConsultationBooked(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Design Consultation
            </Button>
            <p className="text-[11px] text-slate-500 text-center mt-2">
              Filters out unqualified inquiries while setting realistic expectations before calls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
