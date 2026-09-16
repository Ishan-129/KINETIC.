import React from 'react';
import { Sparkles } from 'lucide-react';

export const AboutStudioSection: React.FC = () => {
  const founders = [
    {
      name: 'Ishan',
      role: 'Strategy & Conversion Architecture',
      focus: 'Customer conversion psychology, commercial positioning, and eliminating friction in lead capture pipelines.',
      tag: 'STRATEGY',
      deliverable: 'Funnel Blueprint & Offer Structuring',
    },
    {
      name: 'Aryan',
      role: 'Creative & Visual Direction',
      focus: 'Editorial design, custom Figma aesthetics, typography hierarchy, and branded video assets.',
      tag: 'CREATIVE',
      deliverable: 'High-Fidelity Figma UI & Brand System',
    },
    {
      name: 'Kabir',
      role: 'Engineering & Edge Systems',
      focus: 'Custom React architecture, sub-second edge hosting, WhatsApp API webhooks, and analytics tracking.',
      tag: 'ENGINEERING',
      deliverable: 'Clean React Codebase & Integrations',
    },
  ];

  const pillars = [
    {
      title: 'Direct Founder Execution',
      desc: 'Big agencies pitch you with their senior partners, then secretly hand your project to unpaid interns. At MEDIA-TARDS, the 3 founders design, code, and optimize everything personally.',
    },
    {
      title: '2–3 Week Sprints',
      desc: 'We eliminate bloated committee meetings and endless discovery phases. We scope the deliverables, build with intensity, and launch in weeks rather than quarters.',
    },
    {
      title: 'Custom Edge Code',
      desc: 'No slow WordPress themes bloated with 40 broken plugins. We build clean, lightweight React applications with sub-second performance on global edge servers.',
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-studio-bg border-t border-studio-ink relative" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-studio-ink flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-studio-gold" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-studio-ink/70 uppercase font-bold">
                THE STUDIO // HUMAN &amp; DIRECT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-studio-ink tracking-tight leading-none uppercase">
              3 People.<br />
              One Studio.
            </h2>
          </div>
          <p className="text-studio-ink/80 text-base sm:text-lg max-w-md font-medium leading-relaxed">
            The people selling the work are the people doing the work. Zero account managers, zero bureaucratic middlemen, 100% direct access.
          </p>
        </div>

        {/* ── Studio Manifesto Banner ── */}
        <div className="p-8 sm:p-12 bg-studio-ink text-[#F5F2EB] border-2 border-studio-ink shadow-studio-lg mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs font-bold text-accent-acid uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-accent-acid" />
            OUR OPERATING PRINCIPLE
          </div>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight max-w-4xl text-white">
            "Most businesses don't have a traffic problem. They have a trust problem: slow websites, forgettable branding, and confusing friction. We fix all three."
          </p>
        </div>

        {/* ── 3 Founders Interactive Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {founders.map((founder, idx) => (
            <div
              key={founder.name}
              data-cursor="explore"
              data-cursor-text={founder.name.toUpperCase()}
              className="bg-[#F5F2EB] border-2 border-studio-ink p-7 sm:p-8 flex flex-col justify-between hover:shadow-studio-md hover:border-studio-gold transition-all duration-200 group"
            >
              <div>
                {/* Founder Number & Tag */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-studio-ink/20 font-mono text-xs font-bold">
                  <span className="text-studio-gold text-sm">0{idx + 1} / {founder.tag}</span>
                  <span className="px-2 py-0.5 bg-studio-ink text-white text-[10px] uppercase">
                    PARTNER
                  </span>
                </div>

                <h3 className="font-display text-3xl font-black text-studio-ink tracking-tight uppercase mb-1">
                  {founder.name}
                </h3>
                <p className="font-mono text-xs font-bold text-studio-ink/60 uppercase tracking-wider mb-6">
                  {founder.role}
                </p>

                <p className="text-sm text-studio-ink/80 font-medium leading-relaxed mb-6">
                  {founder.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-studio-ink/15 font-mono text-[11px] text-studio-ink/70 flex items-center justify-between">
                <span>Domain:</span>
                <span className="font-bold text-studio-ink">{founder.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3 Studio Pillars ── */}
        <div className="pt-16 border-t border-studio-ink/20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-studio-ink font-bold block mb-8">
            WHY WORK DIRECTLY WITH US //
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, pIdx) => (
              <div key={pillar.title} className="p-6 bg-white border border-studio-ink/20">
                <span className="font-mono text-xl font-black text-studio-gold block mb-2">
                  0{pIdx + 1}
                </span>
                <h4 className="font-display text-xl font-black text-studio-ink uppercase tracking-tight mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-studio-ink/80 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudioSection;

