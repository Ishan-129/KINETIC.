import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGlassHover } from '../../hooks/useGlassHover';

const founders = [
  {
    name: 'Ishan',
    role: 'Strategy & Conversion Architecture',
    focus: 'Customer conversion psychology, commercial positioning, and eliminating friction in lead capture pipelines.',
    tag: 'STRATEGY',
    deliverable: 'Funnel Blueprint & Offer Structuring',
    accent: '#C7FF3D',
    letter: 'S',
  },
  {
    name: 'Aryan',
    role: 'Creative & Visual Direction',
    focus: 'Editorial design, custom Figma aesthetics, typography hierarchy, and branded video assets.',
    tag: 'CREATIVE',
    deliverable: 'High-Fidelity Figma UI & Brand System',
    accent: '#3B8EFF',
    letter: 'C',
  },
  {
    name: 'Kabir',
    role: 'Engineering & Edge Systems',
    focus: 'Custom React architecture, sub-second edge hosting, WhatsApp API webhooks, and analytics tracking.',
    tag: 'ENGINEERING',
    deliverable: 'Clean React Codebase & Integrations',
    accent: '#FF4F3B',
    letter: 'E',
  },
];

const pillars = [
  {
    title: 'Direct Founder Execution',
    desc: 'Big agencies pitch you with their senior partners, then secretly hand your project to unpaid interns. At MEDIA-TARDS, the 3 founders design, code, and optimize everything personally.',
    num: '01',
  },
  {
    title: '2–3 Week Sprints',
    desc: 'We eliminate bloated committee meetings and endless discovery phases. We scope the deliverables, build with intensity, and launch in weeks rather than quarters.',
    num: '02',
  },
  {
    title: 'Custom Edge Code',
    desc: 'No slow WordPress themes bloated with 40 broken plugins. We build clean, lightweight React applications with sub-second performance on global edge servers.',
    num: '03',
  },
];

const FounderCard: React.FC<typeof founders[0] & { idx: number }> = ({
  name, role, focus, tag, deliverable, accent, letter, idx,
}) => {
  const { ref, handleMouseMove, handleMouseLeave } = useGlassHover({ maxTilt: 6, scale: 1.015 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { handleMouseLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      data-cursor="explore"
      data-cursor-text={name.toUpperCase()}
      className="tilt-card bg-[#0D1117] border border-white/[0.07] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden cursor-none group"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
    >
      {/* Background lettermark */}
      <div
        className="absolute -bottom-4 -right-2 font-display font-black leading-none pointer-events-none select-none transition-opacity duration-500"
        style={{
          fontSize: '10rem',
          color: `${accent}06`,
          opacity: hovered ? 1 : 0.6,
        }}
      >
        {letter}
      </div>

      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${accent}08 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 pointer-events-none rounded-none transition-all duration-300"
        style={{
          boxShadow: hovered ? `inset 0 0 0 1px ${accent}30` : 'none',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06] font-mono text-[10px] font-bold">
          <span style={{ color: accent }}>0{idx + 1} / {tag}</span>
          <span className="px-2 py-0.5 text-[8px] uppercase" style={{ color: '#525C71', background: 'rgba(255,255,255,0.04)' }}>
            PARTNER
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-display font-black text-[#ECEEF2] tracking-tight uppercase mb-1 transition-colors duration-200"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: hovered ? accent : '#ECEEF2',
          }}
        >
          {name}
        </h3>
        <p className="font-mono text-[10px] font-bold text-[#525C71] uppercase tracking-wider mb-5">
          {role}
        </p>

        <p className="text-sm text-[#8A92A6] font-body leading-relaxed">
          {focus}
        </p>
      </div>

      {/* Specialty hover reveal container */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.06] font-mono text-[10px] min-h-[42px] flex items-center">
        {/* Hover-reveal specialty */}
        <div
          className="w-full flex items-center justify-between transition-all duration-300 select-none"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(4px)',
            pointerEvents: hovered ? 'auto' : 'none',
          }}
        >
          <span className="text-[#525C71]">Domain:</span>
          <span className="font-bold text-right" style={{ color: accent }}>{deliverable}</span>
        </div>

        {/* Default prompt */}
        <div
          className="absolute inset-0 pt-4 flex items-center justify-between text-[#525C71] transition-all duration-200 pointer-events-none select-none"
          style={{
            opacity: hovered ? 0 : 1,
            transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          }}
        >
          <span>Hover to reveal specialty →</span>
        </div>
      </div>
    </motion.div>
  );
};

export const AboutStudioSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#0D1117] border-t border-white/[0.06] relative overflow-hidden" id="about">
      <div className="noise-section" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#525C71] uppercase font-bold">
                THE STUDIO // HUMAN & DIRECT
              </span>
            </div>
            <h2
              className="font-display font-black text-[#ECEEF2] tracking-tight leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              3 People.<br />
              One Studio.
            </h2>
          </div>
          <p className="text-[#8A92A6] text-base sm:text-lg max-w-md font-body leading-relaxed">
            The people selling the work are the people doing the work. Zero account managers, zero bureaucratic middlemen, 100% direct access.
          </p>
        </div>

        {/* Manifesto — full-width kinetic type */}
        <div className="mb-16 sm:mb-24 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(199,255,61,0.03) 0%, transparent 70%)' }}
          />
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-[#ECEEF2] tracking-tight leading-tight relative z-10"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
          >
            <span className="text-[#C7FF3D]">"</span>
            Most businesses don't have a traffic problem. They have a{' '}
            <span className="text-[#C7FF3D]">trust problem</span>: slow websites,
            forgettable branding, and confusing friction.{' '}
            <span className="text-[#8A92A6]">We fix all three.</span>
            <span className="text-[#C7FF3D]">"</span>
          </motion.blockquote>
        </div>

        {/* 3 Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-20">
          {founders.map((founder, idx) => (
            <FounderCard key={founder.name} {...founder} idx={idx} />
          ))}
        </div>

        {/* Studio Pillars */}
        <div className="pt-16 border-t border-white/[0.06]">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#525C71] font-bold block mb-8">
            WHY WORK DIRECTLY WITH US //
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, pIdx) => (
              <motion.div
                key={pillar.title}
                className="p-6 bg-[#080B12] border border-white/[0.06] hover:border-white/[0.10] transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pIdx * 0.1, duration: 0.5 }}
              >
                <span
                  className="font-mono text-2xl font-black block mb-3"
                  style={{ color: '#C7FF3D', textShadow: '0 0 20px rgba(199,255,61,0.3)' }}
                >
                  {pillar.num}
                </span>
                <h4 className="font-display text-lg font-black text-[#ECEEF2] uppercase tracking-tight mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#8A92A6] font-body leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudioSection;
