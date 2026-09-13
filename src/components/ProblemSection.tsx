import React, { useState } from 'react';
import { Smartphone, AlertTriangle, UserX, EyeOff, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

interface LeakItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  problemStat: string;
  reality: string;
  consequence: string;
  fix: string;
}

export const ProblemSection: React.FC = () => {
  const [activeLeak, setActiveLeak] = useState<string>('bounce');

  const leaks: LeakItem[] = [
    {
      id: 'bounce',
      icon: <Smartphone className="w-5 h-5 text-rose-400" />,
      title: "The 3-Second Mobile Bounce",
      problemStat: "68% Drop-Off",
      reality: "Your website takes 6+ seconds to load on mobile with bloated scripts and uncompressed assets.",
      consequence: "Local customers searching on their phones bounce back to Google before seeing your work.",
      fix: "Sub-second React architectures engineered with 100/100 performance scores that render immediately."
    },
    {
      id: 'credibility',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
      title: "The Credibility Gap",
      problemStat: "75% Judge By Design",
      reality: "Your physical service is 9/10, but your website was built in 2017 with generic stock photos and broken fonts.",
      consequence: "High-ticket prospects assume your craft is outdated and choose the competitor with a sharper brand.",
      fix: "Bespoke editorial design systems and tactile typography that position you as the market authority."
    },
    {
      id: 'booking',
      icon: <UserX className="w-5 h-5 text-sky-400" />,
      title: "The Friction Wall",
      problemStat: "60%+ Lost Bookings",
      reality: "Requiring customers to download PDF menus or call a landline during busy business hours.",
      consequence: "High-intent buyers leave for a business that allows 2-tap online scheduling or instant WhatsApp chat.",
      fix: "Frictionless direct booking flows, interactive pricing visualizers, and instant lead notification routing."
    },
    {
      id: 'discovery',
      icon: <EyeOff className="w-5 h-5 text-purple-400" />,
      title: "The Invisible Local Entity",
      problemStat: "#1 Search Ranking = 38% Clicks",
      reality: "Missing local schema markup, unoptimized Google Business profiles, and poor mobile crawlability.",
      consequence: "You rely solely on slow word-of-mouth while competitors monopolize prime neighborhood search results.",
      fix: "Rigorous local SEO architecture, semantic schemas, and lightning-fast pages favored by search engines."
    }
  ];

  const selectedLeak = leaks.find(l => l.id === activeLeak) || leaks[0];

  return (
    <section className="py-24 sm:py-32 bg-obsidian-900 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Local Business Reality"
          title="Most businesses don't have a traffic problem. They have a trust leak."
          subtitle="If your website doesn't instantly prove authority, remove booking friction, and load in under a second, you are paying to send customers to your competitors."
        />

        {/* Interactive Problem Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          {/* Left List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {leaks.map((leak) => {
              const isActive = leak.id === activeLeak;
              return (
                <button
                  key={leak.id}
                  onClick={() => setActiveLeak(leak.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-obsidian-800 border-brand-cyan/40 shadow-lg shadow-sky-500/5 ring-1 ring-brand-cyan/20'
                      : 'bg-obsidian-950/60 border-surface-border hover:border-slate-700 hover:bg-obsidian-800/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-obsidian-900 border border-surface-border">
                      {leak.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold text-base ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {leak.title}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        Impact: <span className="text-rose-400 font-medium">{leak.problemStat}</span>
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-brand-cyan translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Diagnostic Breakdown */}
          <div className="lg:col-span-7 bg-obsidian-950 border border-surface-border rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-surface-border pb-5 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Critical Revenue Leak
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {selectedLeak.title}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Diagnostic Card
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  The Hidden Symptom
                </h5>
                <p className="text-slate-300 text-base leading-relaxed bg-obsidian-900/80 p-4 rounded-xl border border-surface-border">
                  {selectedLeak.reality}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2">
                  What It Costs Your Business
                </h5>
                <p className="text-slate-300 text-base leading-relaxed bg-rose-950/20 p-4 rounded-xl border border-rose-900/30 text-rose-200">
                  {selectedLeak.consequence}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  The Kinetic Strategic Fix
                </h5>
                <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-emerald-200 text-base leading-relaxed">
                    {selectedLeak.fix}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
