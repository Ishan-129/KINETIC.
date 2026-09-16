import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { MediaObjectCanvas } from './hero/MediaObjectCanvas';
import { MagneticButton } from './ui/MagneticButton';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 3 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const metaVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 } },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 } },
  };

  const headlineLines = ['WE MAKE', 'BUSINESSES', 'LOOK GOOD', 'ONLINE'];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#080B12] flex flex-col justify-between"
    >
      {/* Grain overlay */}
      <div className="noise-section" />

      {/* Grid background */}
      <motion.div
        className="absolute inset-0 bg-studio-grid pointer-events-none"
        style={{ y: bgY }}
      />

      {/* Radial glow from top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(199,255,61,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Three.js Canvas — right side, behind text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[60vw] lg:w-[48vw] h-[55vh] sm:h-[75vh] pointer-events-none z-0">
        <MediaObjectCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">

        {/* Top Studio Metadata Bar */}
        <motion.div
          variants={metaVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full bg-[#C7FF3D]"
              style={{ boxShadow: '0 0 8px rgba(199,255,61,0.8)' }}
            />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.28em] text-[#8A92A6] uppercase font-bold">
              MEDIA-TARDS / DIGITAL GROWTH STUDIO
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-5 text-[10px] font-mono text-[#525C71] uppercase tracking-widest">
            <span className="flex items-center gap-1.5 font-semibold text-[#C7FF3D]">
              <span
                className="w-1 h-1 rounded-full bg-[#C7FF3D] animate-pulse"
                style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }}
              />
              AVAILABLE FOR Q3
            </span>
            <span className="text-[#525C71]">·</span>
            <span>MUMBAI / IN · EST. 2024</span>
          </div>
        </motion.div>

        {/* Oversized Kinetic Headline — Barlow Condensed, fluid, asymmetric */}
        <motion.div style={{ y: headlineY }}>
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-black text-[#ECEEF2] uppercase tracking-tight leading-[0.85] select-none"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)', letterSpacing: '-0.01em' }}
          >
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.div variants={lineVariants} className="block">
                  {line === 'ONLINE' ? (
                    <span>
                      {/* "ONLINE" bleeds slightly right on large screens */}
                      <span>ONLINE</span>
                      <span
                        className="acid-flicker"
                        style={{
                          color: '#C7FF3D',
                          textShadow: '0 0 40px rgba(199,255,61,0.4), 0 0 80px rgba(199,255,61,0.15)',
                        }}
                      >.</span>
                    </span>
                  ) : (
                    line
                  )}
                </motion.div>
              </div>
            ))}
          </motion.h1>
        </motion.div>

        {/* Supporting copy + CTAs */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-10 sm:pt-14"
        >
          <div className="lg:col-span-7">
            <p
              className="text-[#ECEEF2]/75 font-body leading-relaxed max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 1.3rem)' }}
            >
              We build custom websites, manage social media systems, and run
              high-intent lead generation campaigns for businesses that want to
              look{' '}
              <em className="not-italic text-[#ECEEF2]">better</em> and grow{' '}
              <em className="not-italic text-[#ECEEF2]">faster</em>.
            </p>
            <div className="mt-4 flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-[#525C71]">
              <span className="text-[#8A92A6] font-bold">3 FOUNDERS</span>
              <span>/</span>
              <span>DIRECT ACCESS</span>
              <span>/</span>
              <span>ZERO JUNIOR HANDOFFS</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <MagneticButton
              as="a"
              href="#audit"
              cursorText="LET'S TALK ↗"
              className="w-full px-8 py-4 bg-[#C7FF3D] text-[#080B12] font-black font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors duration-200 group"
              style={{ boxShadow: '0 0 30px rgba(199,255,61,0.25)' } as React.CSSProperties}
            >
              <div className="flex items-center justify-center gap-3">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </MagneticButton>

            <a
              href="#work"
              data-cursor="explore"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-[#8A92A6] font-mono font-bold text-xs uppercase tracking-wider hover:border-[#C7FF3D]/40 hover:text-[#ECEEF2] transition-all duration-200 group glass-panel"
            >
              <span>See the Work</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#C7FF3D] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Service Quick Links — Bottom strip */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="mt-14 sm:mt-20 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[10px] font-mono text-[#525C71] uppercase tracking-wider"
        >
          {[
            { num: '01', label: 'BUILD', name: 'Complete Website Pack →', price: '₹7,999', href: '#services' },
            { num: '02', label: 'ATTENTION', name: 'Full Social Media →', price: '₹5,999/mo', href: '#services' },
            { num: '03', label: 'ACQUISITION', name: 'Marketing & Lead Ads →', price: '₹4,999/mo', href: '#services' },
          ].map((svc) => (
            <a
              key={svc.num}
              href={svc.href}
              data-cursor="explore"
              data-cursor-text={`EXPLORE ${svc.num}`}
              className="p-3.5 border border-white/[0.06] hover:border-[#C7FF3D]/25 glass-panel transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#525C71] font-bold">{svc.num} / {svc.label}</span>
                <span
                  className="text-[9px] font-bold"
                  style={{ color: '#C7FF3D' }}
                >
                  {svc.price}
                </span>
              </div>
              <span className="text-[#8A92A6] group-hover:text-[#C7FF3D] transition-colors font-bold">
                {svc.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
