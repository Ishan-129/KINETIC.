import React from 'react';
import { Target, Palette, Code2, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

export const TeamSection: React.FC = () => {
  const founders = [
    {
      name: 'Ishan',
      role: 'Strategy & Conversion Architecture',
      focus: 'Business Economics & Funnel Engineering',
      icon: <Target className="w-5 h-5 text-sky-400" />,
      bio: 'Deeply focused on conversion psychology and local business economics. Specializes in finding where local websites leak high-ticket leads and re-architecting visitor journeys into frictionless booking pipelines.',
      skills: ['Conversion Funnels', 'Customer Journey Mapping', 'Direct-Response Copy', 'Offer Architecture'],
      avatarBg: 'from-sky-500/20 to-blue-600/20'
    },
    {
      name: 'Aryan',
      role: 'UI/UX & Creative Direction',
      focus: 'Editorial Aesthetics & Mobile Ergonomics',
      icon: <Palette className="w-5 h-5 text-amber-400" />,
      bio: 'Crafts bespoke, authoritative visual systems that make local businesses look like the definitive market leader. Obsessed with typography, tactile spacing, and micro-interactions that build instant credibility.',
      skills: ['Design Systems', 'Editorial Typography', 'Micro-Interactions', 'Mobile UI Ergonomics'],
      avatarBg: 'from-amber-500/20 to-orange-600/20'
    },
    {
      name: 'Kabir',
      role: 'Frontend Engineering & Systems',
      focus: 'Custom React & Technical Performance',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      bio: 'Builds clean, modular, sub-second web applications with zero script bloat. Obsessed with achieving 100/100 Lighthouse performance, local schema search ranking, and instant mobile responsiveness.',
      skills: ['React & TypeScript', 'Lighthouse 100 Tuning', 'Local SEO Schemas', 'Workflow Automation'],
      avatarBg: 'from-emerald-500/20 to-teal-600/20'
    }
  ];

  return (
    <section id="team" className="py-24 sm:py-32 bg-obsidian-900 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Builders"
          title="Meet the 3 Partners Behind Your Digital Growth"
          subtitle="We are young, ambitious technologists who combine conversion strategy, visual design, and software engineering. We don't hide behind account managers—we build your product ourselves."
        />

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {founders.map((founder, idx) => (
            <div
              key={founder.name}
              className="bg-obsidian-950 border border-surface-border hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Founder Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${founder.avatarBg} border border-surface-border flex items-center justify-center text-white font-extrabold text-xl font-mono`}>
                    0{idx + 1}
                  </div>
                  <div className="p-2.5 rounded-xl bg-obsidian-900 border border-surface-border">
                    {founder.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-xs font-mono text-brand-cyan mt-0.5 mb-2">
                  {founder.role}
                </p>
                <div className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-obsidian-900 border border-surface-border text-slate-400 mb-4">
                  {founder.focus}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-surface-border/60">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2.5">
                  Core Craft Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {founder.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-900 border border-surface-border/80 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Young Builder Manifesto Banner */}
        <div className="mt-16 bg-gradient-to-br from-obsidian-950 via-obsidian-850 to-obsidian-950 border border-surface-border rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-brand-cyan text-xs font-mono mb-3">
              <Sparkles className="w-4 h-4" />
              <span>THE FOUNDING PRINCIPLE</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              "We have everything to prove—which is why your business wins."
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Established agencies treat local businesses as small retainer filler while reserving their best talent for multi-million corporate accounts. For us, your project is our headline case study. We bring obsessive craftsmanship, direct founder communication, and relentless drive to make your business the definitive market leader.
            </p>
            <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Direct Partner Access
              </span>
              <span>•</span>
              <span className="text-slate-300">Zero Junior Hand-offs</span>
              <span>•</span>
              <span className="text-slate-300">100% Custom Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
