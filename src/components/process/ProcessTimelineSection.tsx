import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'FIND THE PROBLEM',
    tagline: '20-min strategy deep dive',
    desc: 'We get on a 20-minute call with you, dissect your local competitors, identify your biggest customer conversion leaks, and agree on the exact scope.',
    deliverable: 'Custom Sprint Scope & Architecture',
    accent: '#C7FF3D',
  },
  {
    num: '02',
    title: 'BUILD THE SYSTEM',
    tagline: '2–3 week intense sprint',
    desc: 'No junior interns. The 3 founders write the React code, craft the high-contrast Figma layouts, and write high-converting copy personally.',
    deliverable: 'Full-Fidelity Custom React App',
    accent: '#3B8EFF',
  },
  {
    num: '03',
    title: 'PUT IT OUT THERE',
    tagline: 'Frictionless launch sequence',
    desc: 'We connect your domain, configure Google Maps / local SEO schema, test mobile performance (100/100 Lighthouse), and verify WhatsApp routing.',
    deliverable: 'Live Production URL & Integrations',
    accent: '#C7FF3D',
  },
  {
    num: '04',
    title: 'MAKE IT GROW',
    tagline: 'Ongoing compounding scale',
    desc: 'Deploy consistent branded social media content, publish vertical reels, or activate targeted Meta/Google ads to keep customer inquiries flowing.',
    deliverable: 'Inbound Qualified Leads & Retainers',
    accent: '#FF4F3B',
  },
];

export const ProcessTimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) return;

    const trigger = triggerRef.current;
    const stepsEl = stepsRef.current;
    const progressEl = progressRef.current;
    if (!trigger || !stepsEl) return;

    // Horizontal pin + scrub for step cards

    const ctx = gsap.context(() => {
      // Animate each step card in as it scrolls into view
      const cards = stepsEl.querySelectorAll('.step-card');
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Progress line grow
      if (progressEl) {
        gsap.fromTo(progressEl,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: trigger,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      }
    }, trigger);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#080B12] border-t border-white/[0.06] relative overflow-hidden"
      id="process"
    >
      <div className="noise-section" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(199,255,61,0.03) 0%, transparent 70%)' }}
      />

      <div ref={triggerRef} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]"
                style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }}
              />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#525C71] uppercase font-bold">
                TIMELINE // THE 4-STEP SPRINT
              </span>
            </div>
            <h2
              className="font-display font-black text-[#ECEEF2] tracking-tight leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              How We Work.
            </h2>
          </div>
          <p className="text-[#8A92A6] text-base sm:text-lg max-w-md font-body leading-relaxed">
            Fast, founder-led execution without agency bureaucracy, 30-page discovery decks, or months of delays.
          </p>
        </div>

        {/* Scroll-linked progress line */}
        <div className="relative mb-16 hidden lg:block">
          <div className="h-px bg-white/[0.06] w-full" />
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-px w-full origin-left"
            style={{
              background: 'linear-gradient(90deg, #C7FF3D, #3B8EFF, #FF4F3B, #C7FF3D)',
              boxShadow: '0 0 8px rgba(199,255,61,0.5)',
            }}
          />
          {/* Step marker dots */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0">
            {steps.map((step) => (
              <div
                key={step.num}
                className="w-2 h-2 rounded-full border-2"
                style={{ backgroundColor: '#080B12', borderColor: step.accent }}
              />
            ))}
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 pb-16 border-b border-white/[0.06]"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              data-cursor="explore"
              data-cursor-text={`PHASE ${step.num}`}
              className="step-card bg-[#0D1117] border border-white/[0.06] p-6 sm:p-7 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${step.accent}08 0%, transparent 60%)` }}
              />

              <div className="relative z-10">
                {/* Large number */}
                <div className="mb-5">
                  <span
                    className="font-display font-black leading-none block"
                    style={{
                      fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                      color: `${step.accent}18`,
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Step header */}
                <div className="flex items-center justify-between mb-4 font-mono text-[9px]">
                  <span className="text-[#525C71] font-bold uppercase tracking-widest">PHASE {step.num}</span>
                  <span
                    className="px-2 py-0.5 font-bold text-[8px] uppercase"
                    style={{ color: step.accent, background: `${step.accent}15` }}
                  >
                    {step.tagline}
                  </span>
                </div>

                <h3
                  className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] tracking-tight uppercase mb-3 group-hover:transition-colors duration-200"
                  style={{ color: undefined }}
                >
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8A92A6] font-body leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable */}
              <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-[#525C71]">
                <span className="text-base" style={{ color: step.accent }}>◆</span>
                <span className="font-semibold">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note + CTA */}
        <div className="pt-10 sm:pt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-mono text-sm sm:text-base text-[#8A92A6]">
            Typical website builds launch in{' '}
            <span
              className="text-[#ECEEF2] font-bold underline underline-offset-4"
              style={{ textDecorationColor: '#C7FF3D' }}
            >
              2–3 weeks
            </span>.
          </p>

          <a
            href="#audit"
            data-cursor="cta"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-extrabold text-[#8A92A6] hover:text-[#C7FF3D] transition-colors group"
          >
            <span>Lock in your sprint date</span>
            <ArrowUpRight className="w-4 h-4 text-[#C7FF3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
