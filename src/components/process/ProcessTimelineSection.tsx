import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProcessTimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const progressLineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      num: '01',
      title: 'FIND THE PROBLEM',
      tagline: '20-min strategy deep dive',
      desc: 'We get on a 20-minute call with you, dissect your local competitors, identify your biggest customer conversion leaks, and agree on the exact scope.',
      deliverable: 'Custom Sprint Scope & Architecture',
    },
    {
      num: '02',
      title: 'BUILD THE SYSTEM',
      tagline: '2–3 week intense sprint',
      desc: 'No junior interns. The 3 founders write the React code, craft the high-contrast Figma layouts, and write high-converting copy personally.',
      deliverable: 'Full-Fidelity Custom React App',
    },
    {
      num: '03',
      title: 'PUT IT OUT THERE',
      tagline: 'Frictionless launch sequence',
      desc: 'We connect your domain, configure Google Maps / local SEO schema, test mobile performance (100/100 Lighthouse), and verify WhatsApp routing.',
      deliverable: 'Live Production URL & Integrations',
    },
    {
      num: '04',
      title: 'MAKE IT GROW',
      tagline: 'Ongoing compounding scale',
      desc: 'Deploy consistent branded social media content, publish vertical reels, or activate targeted Meta/Google ads to keep customer inquiries flowing.',
      deliverable: 'Inbound Qualified Leads & Retainers',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 bg-studio-bg border-t border-studio-ink relative"
      id="process"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-studio-ink flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-acid" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-studio-ink/70 uppercase font-bold">
                TIMELINE // THE 4-STEP SPRINT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-studio-ink tracking-tight leading-none uppercase">
              How We Work.
            </h2>
          </div>
          <p className="text-studio-ink/80 text-base sm:text-lg max-w-md font-medium leading-relaxed">
            Fast, founder-led execution without agency bureaucracy, 30-page discovery decks, or months of delays.
          </p>
        </div>

        {/* ── Scroll-Linked Timeline Progress Line Bar ── */}
        <div className="relative mb-12 hidden lg:block">
          {/* Base Background Track */}
          <div className="h-[3px] bg-studio-ink/15 w-full" />
          {/* Animated Gold/Acid Progress Line */}
          <motion.div
            style={{ width: progressLineWidth }}
            className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-studio-gold via-accent-acid to-studio-gold shadow-gold-glow"
          />
        </div>

        {/* ── 4-Step Horizontal Studio Timeline Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16 border-b border-studio-ink/20">
          {steps.map((step) => (
            <div
              key={step.num}
              data-cursor="explore"
              data-cursor-text={`PHASE ${step.num}`}
              className="bg-[#F5F2EB] border-2 border-studio-ink p-6 sm:p-7 flex flex-col justify-between hover:border-studio-gold hover:shadow-studio-md transition-all duration-200 group"
            >
              <div>
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-studio-ink/20 font-mono text-xs">
                  <span className="text-3xl font-black text-studio-ink group-hover:text-studio-gold transition-colors">
                    {step.num}
                  </span>
                  <span className="px-2 py-0.5 bg-studio-ink text-white text-[10px] font-bold uppercase">
                    {step.tagline}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-studio-ink tracking-tight uppercase mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-studio-ink/80 font-medium leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable Badge */}
              <div className="pt-4 border-t border-studio-ink/15 flex items-center gap-2 text-[11px] font-mono text-studio-ink/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-acid shrink-0" />
                <span className="font-semibold">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Timeline Note & CTA */}
        <div className="pt-10 sm:pt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-mono text-sm sm:text-base text-studio-ink font-bold">
            Typical website builds launch in <span className="underline decoration-studio-gold decoration-2 underline-offset-4">2–3 weeks</span>.
          </p>

          <a
            href="#audit"
            data-cursor="cta"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-studio-ink hover:text-studio-gold transition-colors"
          >
            <span>Lock in your sprint date</span>
            <ArrowUpRight className="w-4 h-4 text-studio-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;

