import React from 'react';
import { Target, Palette, Code2, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

export const TeamSection: React.FC = () => {
  const founders = [
    {
      name: 'Ishan',
      role: 'Strategy & Conversion Architecture',
      focus: 'Business Economics & Funnel Engineering',
      icon: <Target className="w-5 h-5 text-accent-navy" />,
      iconBg: 'bg-accent-navy/10 border-accent-navy/25',
      avatarBg: 'bg-gradient-to-br from-accent-navy/20 to-blue-200',
      avatarText: 'text-accent-navy',
      topBorder: 'border-t-accent-navy',
      bio: 'Deeply focused on conversion psychology and local business economics. Specializes in finding where local websites leak high-ticket leads and re-architecting visitor journeys into frictionless booking pipelines.',
      skills: ['Conversion Funnels', 'Customer Journey Mapping', 'Direct-Response Copy', 'Offer Architecture'],
    },
    {
      name: 'Aryan',
      role: 'UI/UX & Creative Direction',
      focus: 'Editorial Aesthetics & Mobile Ergonomics',
      icon: <Palette className="w-5 h-5 text-accent-gold" />,
      iconBg: 'bg-accent-gold/10 border-accent-gold/25',
      avatarBg: 'bg-gradient-to-br from-accent-gold/20 to-amber-200',
      avatarText: 'text-accent-gold-dark',
      topBorder: 'border-t-accent-gold',
      bio: 'Crafts bespoke, authoritative visual systems that make local businesses look like the definitive market leader. Obsessed with typography, tactile spacing, and micro-interactions that build instant credibility.',
      skills: ['Design Systems', 'Editorial Typography', 'Micro-Interactions', 'Mobile UI Ergonomics'],
    },
    {
      name: 'Kabir',
      role: 'Frontend Engineering & Systems',
      focus: 'Custom React & Technical Performance',
      icon: <Code2 className="w-5 h-5 text-accent-forest" />,
      iconBg: 'bg-accent-forest/10 border-accent-forest/25',
      avatarBg: 'bg-gradient-to-br from-accent-forest/20 to-emerald-200',
      avatarText: 'text-accent-forest',
      topBorder: 'border-t-accent-forest',
      bio: 'Builds clean, modular, sub-second web applications with zero script bloat. Obsessed with achieving 100/100 Lighthouse performance, local schema search ranking, and instant mobile responsiveness.',
      skills: ['React & TypeScript', 'Lighthouse 100 Tuning', 'Local SEO Schemas', 'Workflow Automation'],
    },
  ];

  return (
    <section id="team" className="py-24 sm:py-32 bg-ivory-100 border-t border-sand-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Builders"
          title="Meet the 3 Partners Behind Your Digital Growth"
          subtitle="We are young, ambitious technologists who combine conversion strategy, visual design, and software engineering. We don't hide behind account managers—we build your product ourselves."
        />

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {founders.map((founder, idx) => (
            <div
              key={founder.name}
              className={`bg-white border border-sand-300 border-t-4 ${founder.topBorder} rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-warm-sm card-hover`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${founder.avatarBg} border border-sand-300 flex items-center justify-center font-extrabold text-xl font-mono ${founder.avatarText}`}
                  >
                    0{idx + 1}
                  </div>
                  <div className={`p-2.5 rounded-xl border ${founder.iconBg}`}>{founder.icon}</div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{founder.name}</h3>
                <p className="text-xs font-mono text-accent-gold mt-0.5 mb-2 font-semibold">{founder.role}</p>
                <div className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-ivory-200 border border-sand-300 text-slate-500 mb-4">
                  {founder.focus}
                </div>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">{founder.bio}</p>
              </div>

              <div className="pt-6 border-t border-sand-300">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Core Craft Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {founder.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-ivory-200 border border-sand-300 text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto Banner — Navy dark contrast */}
        <div className="mt-16 bg-accent-navy rounded-2xl p-8 sm:p-12 shadow-warm-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold via-accent-gold-light to-accent-coral" />

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-accent-gold text-xs font-mono mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="uppercase tracking-widest font-semibold">The Founding Principle</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              "We have everything to prove—which is why your business wins."
            </h4>
            <p className="text-blue-200 text-sm sm:text-base leading-relaxed mb-8">
              Established agencies treat local businesses as small retainer filler while reserving their best
              talent for multi-million corporate accounts. For us, your project is our headline case study. We
              bring obsessive craftsmanship, direct founder communication, and relentless drive to make your
              business the definitive market leader.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-blue-300">
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                Direct Partner Access
              </span>
              <span className="text-blue-500">•</span>
              <span className="text-white">Zero Junior Hand-offs</span>
              <span className="text-blue-500">•</span>
              <span className="text-white">100% Custom Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
