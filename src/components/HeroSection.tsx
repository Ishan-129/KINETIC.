import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { MediaObjectCanvas } from './hero/MediaObjectCanvas';
import { MagneticButton } from './ui/MagneticButton';

export const HeroSection: React.FC = () => {
  const headlineLines = [
    'WE MAKE',
    'BUSINESSES',
    'LOOK GOOD',
    'ONLINE.',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 40, skewY: 2 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const metaVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.65 },
    },
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-studio-bg bg-studio-grid flex flex-col justify-between">
      {/* 3D Kinetic Media Object Canvas Layer (Positioned behind/around typography) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[65vw] lg:w-[50vw] h-[55vh] sm:h-[75vh] pointer-events-none z-0 opacity-85 mix-blend-multiply">
        <MediaObjectCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        {/* Top Studio Metadata Bar */}
        <motion.div
          variants={metaVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between border-b border-studio-ink pb-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-acid border border-studio-ink shadow-sm" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-studio-ink uppercase font-bold">
              MEDIA-TARDS / DIGITAL GROWTH STUDIO
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-studio-ink/80 uppercase tracking-widest hidden sm:flex">
            <span className="flex items-center gap-1.5 font-semibold text-studio-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-studio-gold animate-pulse" />
              AVAILABLE FOR Q3
            </span>
            <span>•</span>
            <span>MUMBAI / IN • EST. 2024</span>
          </div>
        </motion.div>

        {/* Oversized Kinetic Editorial Typography */}
        <div className="max-w-5xl">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-[3.2rem] sm:text-[4.75rem] md:text-[6.25rem] lg:text-[7.5rem] font-black text-studio-ink tracking-tighter leading-[0.88] uppercase select-none"
          >
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.div variants={lineVariants} className="inline-block">
                  {line === 'ONLINE.' ? (
                    <span>
                      ONLINE<span className="text-studio-gold">.</span>
                    </span>
                  ) : (
                    line
                  )}
                </motion.div>
              </div>
            ))}
          </motion.h1>

          {/* Supporting Human Descriptor + Magnetic CTAs */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 sm:pt-12"
          >
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl md:text-2xl text-studio-ink/90 font-medium leading-snug max-w-2xl">
                We build custom websites, manage social media systems, and run high-intent lead generation campaigns for businesses that want to look better and grow.
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-studio-ink/60">
                <span className="text-studio-ink font-bold">3 FOUNDERS</span>
                <span>/</span>
                <span>DIRECT ACCESS</span>
                <span>/</span>
                <span>ZERO JUNIOR HANDOFFS</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <MagneticButton
                as="a"
                href="#audit"
                cursorText="LET'S TALK ↗"
                className="w-full px-8 py-4.5 bg-studio-ink text-[#F5F2EB] font-bold font-mono text-xs uppercase tracking-widest hover:bg-studio-gold hover:text-studio-ink transition-colors duration-200 border border-studio-ink shadow-studio-md group"
              >
                <div className="flex items-center justify-center gap-3">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 text-accent-acid group-hover:text-studio-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </MagneticButton>

              <a
                href="#work"
                data-cursor="explore"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-studio-ink text-studio-ink font-mono font-bold text-xs uppercase tracking-wider hover:bg-studio-ink hover:text-[#F5F2EB] transition-all duration-200 group"
              >
                <span>See the Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-studio-gold group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Studio Stations Quick Ticker Bar */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 sm:mt-16 pt-6 border-t border-studio-ink/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-studio-ink uppercase tracking-wider"
        >
          <a
            href="#services"
            data-cursor="explore"
            data-cursor-text="EXPLORE 01"
            className="p-3 border border-studio-ink/20 hover:border-studio-ink bg-[#F5F2EB]/80 transition-colors group"
          >
            <div className="flex items-center justify-between text-studio-ink/50 font-bold mb-1">
              <span>01 / BUILD</span>
              <span className="text-[10px] text-studio-gold font-bold">₹7,999</span>
            </div>
            <span className="text-studio-ink font-bold group-hover:text-studio-gold transition-colors">
              Complete Website Pack →
            </span>
          </a>

          <a
            href="#services"
            data-cursor="explore"
            data-cursor-text="EXPLORE 02"
            className="p-3 border border-studio-ink/20 hover:border-studio-ink bg-[#F5F2EB]/80 transition-colors group"
          >
            <div className="flex items-center justify-between text-studio-ink/50 font-bold mb-1">
              <span>02 / ATTENTION</span>
              <span className="text-[10px] text-studio-gold font-bold">₹5,999/mo</span>
            </div>
            <span className="text-studio-ink font-bold group-hover:text-studio-gold transition-colors">
              Full Social Media →
            </span>
          </a>

          <a
            href="#services"
            data-cursor="explore"
            data-cursor-text="EXPLORE 03"
            className="p-3 border border-studio-ink/20 hover:border-studio-ink bg-[#F5F2EB]/80 transition-colors group"
          >
            <div className="flex items-center justify-between text-studio-ink/50 font-bold mb-1">
              <span>03 / ACQUISITION</span>
              <span className="text-[10px] text-studio-gold font-bold">₹4,999/mo</span>
            </div>
            <span className="text-studio-ink font-bold group-hover:text-studio-gold transition-colors">
              Marketing &amp; Lead Ads →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
