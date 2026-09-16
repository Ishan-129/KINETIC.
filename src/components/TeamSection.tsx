import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const founders = [
    {
      name: 'Ishan',
      role: 'Strategy & Conversion',
      focus: 'Visitor psychology, commercial positioning, and frictionless inquiry funnels.',
      tag: 'STRATEGY',
    },
    {
      name: 'Aryan',
      role: 'Creative & Visual Direction',
      focus: 'Editorial aesthetics, contemporary typography hierarchy, and brand presence.',
      tag: 'CREATIVE',
    },
    {
      name: 'Kabir',
      role: 'Engineering & Systems',
      focus: 'Custom React architectures, sub-second edge performance, and tracking pipelines.',
      tag: 'ENGINEERING',
    },
  ];

  const principles = [
    {
      num: '01',
      title: 'Direct Founder Execution',
      text: 'Big agencies pitch you with their senior partners, then secretly pass your project to junior interns. At MEDIA-TARDS, the 3 founders design, code, and optimize everything personally.',
    },
    {
      num: '02',
      title: '2–3 Week Sprints',
      text: 'We eliminate bloated committee meetings and endless discovery phases. We agree on the scope, build with intensity, and launch your presence in weeks rather than quarters.',
    },
    {
      num: '03',
      title: 'Custom Edge Code',
      text: 'No clunky 40-plugin WordPress templates that break or take 6 seconds to load. We build clean, modern React applications with sub-second performance on global edge servers.',
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#FDFCF9] border-t border-slate-900 relative" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-slate-900 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block mb-3">
              About / The Studio
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-none uppercase">
              3 Founders.<br />
              Zero Account Managers.
            </h2>
          </div>
          <p className="text-slate-700 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            MEDIA-TARDS is a young, internet-native creative agency. We build websites that look sharp, run socials that feel alive, and deploy ads that generate customers.
          </p>
        </div>

        {/* The Belief Statement */}
        <div className="p-8 sm:p-12 bg-ivory-100 border border-slate-900 rounded-xl mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
            Our Core Conviction
          </span>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug max-w-4xl">
            "Most businesses don't have a traffic problem. They have a trust problem: slow websites, forgettable branding, and confusing friction. We fix all three."
          </p>
        </div>

        {/* 3 Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {founders.map((founder, idx) => (
            <div
              key={founder.name}
              className="bg-ivory-100 border border-sand-400 rounded-xl p-8 flex flex-col justify-between hover:border-slate-950 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-sand-300">
                  <span className="font-mono text-xs tracking-widest text-slate-500 uppercase font-semibold">
                    0{idx + 1} / {founder.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-accent-gold" />
                </div>

                <h3 className="font-display text-3xl font-extrabold text-slate-950 tracking-tight mb-1">
                  {founder.name}
                </h3>
                <p className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
                  {founder.role}
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {founder.focus}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-sand-300 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Direct Access</span>
                <span className="text-slate-950 font-semibold">Partner</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Studio Principles */}
        <div className="pt-16 border-t border-sand-400/80">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-bold block mb-10">
            Why Work Directly With Us
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {principles.map((item) => (
              <div key={item.num} className="space-y-3">
                <span className="font-mono text-2xl font-bold text-slate-950 block">
                  {item.num}
                </span>
                <h4 className="font-display text-xl font-bold text-slate-950">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 pt-8 border-t border-sand-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-mono text-sm text-slate-700 font-medium">
            Ready to give your business an unfair internet advantage?
          </p>
          <a
            href="#audit"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-slate-950 hover:text-accent-gold transition-colors"
          >
            <span>Talk with the founders</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
