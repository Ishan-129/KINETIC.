import React, { useState } from 'react';
import { Smartphone, AlertTriangle, UserX, EyeOff, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

interface LeakItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  problemStat: string;
  statColor: string;
  reality: string;
  consequence: string;
  fix: string;
}

export const ProblemSection: React.FC = () => {
  const [activeLeak, setActiveLeak] = useState<string>('bounce');

  const leaks: LeakItem[] = [
    {
      id: 'bounce',
      icon: <Smartphone className="w-5 h-5 text-accent-coral" />,
      title: 'The 3-Second Mobile Bounce',
      problemStat: '68% Drop-Off',
      statColor: 'text-accent-coral',
      reality: 'Your website takes 6+ seconds to load on mobile with bloated scripts and uncompressed assets.',
      consequence: 'Local customers searching on their phones bounce back to Google before seeing your work.',
      fix: 'Sub-second React architectures engineered with 100/100 performance scores that render immediately.',
    },
    {
      id: 'credibility',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      title: 'The Credibility Gap',
      problemStat: '75% Judge By Design',
      statColor: 'text-amber-600',
      reality: 'Your physical service is 9/10, but your website was built in 2017 with generic stock photos and broken fonts.',
      consequence: 'High-ticket prospects assume your craft is outdated and choose the competitor with a sharper brand.',
      fix: 'Bespoke editorial design systems and tactile typography that position you as the market authority.',
    },
    {
      id: 'booking',
      icon: <UserX className="w-5 h-5 text-accent-navy" />,
      title: 'The Friction Wall',
      problemStat: '60%+ Lost Bookings',
      statColor: 'text-accent-navy',
      reality: 'Requiring customers to download PDF menus or call a landline during busy business hours.',
      consequence: 'High-intent buyers leave for a business that allows 2-tap online scheduling or instant WhatsApp chat.',
      fix: 'Frictionless direct booking flows, interactive pricing visualizers, and instant lead notification routing.',
    },
    {
      id: 'discovery',
      icon: <EyeOff className="w-5 h-5 text-purple-600" />,
      title: 'The Invisible Local Entity',
      problemStat: '#1 Search Ranking = 38% Clicks',
      statColor: 'text-purple-700',
      reality: 'Missing local schema markup, unoptimized Google Business profiles, and poor mobile crawlability.',
      consequence: 'You rely solely on slow word-of-mouth while competitors monopolize prime neighborhood search results.',
      fix: 'Rigorous local SEO architecture, semantic schemas, and lightning-fast pages favored by search engines.',
    },
  ];

  const selectedLeak = leaks.find((l) => l.id === activeLeak) || leaks[0];

  return (
    <section id="problem" className="py-24 sm:py-32 bg-ivory-100 border-t border-sand-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Local Business Reality"
          title="Most businesses don't have a traffic problem. They have a trust leak."
          subtitle="If your website doesn't instantly prove authority, remove booking friction, and load in under a second, you are paying to send customers to your competitors."
        />

        {/* Interactive Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
          {/* Left Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {leaks.map((leak) => {
              const isActive = leak.id === activeLeak;
              return (
                <button
                  key={leak.id}
                  onClick={() => setActiveLeak(leak.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-white border-accent-gold shadow-warm-md ring-1 ring-accent-gold/30'
                      : 'bg-white border-sand-300 hover:border-sand-400 hover:shadow-warm-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-accent-gold/8 border-accent-gold/25' : 'bg-ivory-100 border-sand-300'}`}>
                      {leak.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold text-base ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {leak.title}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        Impact:{' '}
                        <span className={`${leak.statColor} font-semibold`}>{leak.problemStat}</span>
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      isActive ? 'text-accent-gold translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Diagnostic Panel */}
          <div className="lg:col-span-7 bg-white border border-sand-300 rounded-2xl p-6 sm:p-8 shadow-warm-lg relative overflow-hidden">
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold via-accent-gold-light to-accent-coral rounded-t-2xl" />

            <div className="flex items-center justify-between border-b border-sand-300 pb-5 mb-6 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                  Critical Revenue Leak
                </span>
                <span className="text-sm font-bold text-slate-800">{selectedLeak.title}</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Diagnostic Card</span>
            </div>

            <div className="space-y-5">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  The Hidden Symptom
                </h5>
                <p className="text-slate-700 text-base leading-relaxed bg-ivory-100 p-4 rounded-xl border border-sand-300">
                  {selectedLeak.reality}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-accent-coral mb-2">
                  What It Costs Your Business
                </h5>
                <p className="text-rose-700 text-base leading-relaxed bg-rose-50 p-4 rounded-xl border border-rose-200">
                  {selectedLeak.consequence}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-accent-forest mb-2">
                  The Kinetic Strategic Fix
                </h5>
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-forest shrink-0 mt-0.5" />
                  <p className="text-emerald-800 text-base leading-relaxed">{selectedLeak.fix}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
