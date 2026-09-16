import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT } from '../config/contact';
import { SITE_CONFIG } from '../config/site';
import { MagneticButton } from './ui/MagneticButton';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B12] text-[#ECEEF2] relative overflow-hidden border-t border-white/[0.06]" id="footer">
      <div className="noise-section" />

      {/* ── Kinetic-Type Closing CTA ── */}
      <div className="relative border-b border-white/[0.06] overflow-hidden">
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(199,255,61,0.06) 0%, transparent 60%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 relative z-10">
          {/* Label */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D]"
              style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }}
            />
            <span className="text-[10px] font-mono tracking-[0.28em] text-[#525C71] uppercase font-bold">
              READY TO START?
            </span>
          </motion.div>

          {/* Kinetic large headline */}
          <motion.div
            className="mb-10 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              className="font-display font-black text-[#ECEEF2] tracking-tight leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            >
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                  START A
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                  style={{ color: '#C7FF3D', textShadow: '0 0 60px rgba(199,255,61,0.25)' }}
                >
                  PROJECT
                  <span className="acid-flicker">.</span>
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Supporting copy + CTA row */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[#8A92A6] font-body leading-relaxed max-w-md" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              3 founding partners. Direct access. Custom websites, social media, and lead generation — built personally and launched in weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <MagneticButton
                as="a"
                href="#audit"
                cursorText="LET'S TALK ↗"
                className="px-8 py-4 font-mono text-[11px] font-black uppercase tracking-widest text-[#080B12] hover:bg-white transition-colors group"
                style={{ background: '#C7FF3D', boxShadow: '0 0 30px rgba(199,255,61,0.30)' } as React.CSSProperties}
              >
                <div className="flex items-center gap-2">
                  <span>Send a Project Brief</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </MagneticButton>

              {CONTACT.isWhatsappConfigured() && (
                <a
                  href={CONTACT.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="cta"
                  className="px-8 py-4 border border-white/10 font-mono text-[11px] font-bold uppercase tracking-widest text-[#8A92A6] hover:border-[#C7FF3D]/30 hover:text-[#ECEEF2] transition-all duration-200 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#C7FF3D]" />
                  <span>WhatsApp Direct</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Footer Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">

          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group" data-cursor="explore">
              <Logo theme="dark" size="md" variant="full" />
            </a>
            <p className="text-[#525C71] text-xs sm:text-sm leading-relaxed max-w-sm font-body">
              A kinetic digital growth studio. Custom websites, ongoing social media systems, and lead generation ads handcrafted directly by 3 founding partners.
            </p>
            <div className="flex items-center gap-2 font-mono text-[10px] pt-2 font-bold" style={{ color: '#C7FF3D' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-pulse" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
              <span>{SITE_CONFIG.availability.bannerText}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <span className="text-[10px] uppercase tracking-wider font-bold block" style={{ color: '#C7FF3D' }}>
              Navigation //
            </span>
            <ul className="space-y-2 text-[#525C71] text-xs font-semibold">
              {[
                { href: '#services', label: 'Services' },
                { href: '#work', label: 'Work Tape' },
                { href: '#process', label: 'Timeline' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#about', label: 'Studio' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-cursor="explore"
                    className="hover:text-[#ECEEF2] transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Selected Work */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <span className="text-[10px] uppercase tracking-wider font-bold block" style={{ color: '#C7FF3D' }}>
              Work Tape //
            </span>
            <ul className="space-y-3 text-[#525C71]">
              {[
                { name: 'AURA Aesthetics', sub: 'High-Ticket Aesthetic Healthcare' },
                { name: 'FORGE Athletic Club', sub: 'Performance Fitness & Pass Engine' },
                { name: 'ATELIER Studio', sub: 'Custom Architecture & Millwork' },
              ].map((project) => (
                <li key={project.name}>
                  <a
                    href="#work"
                    data-cursor="view"
                    className="hover:text-[#ECEEF2] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="block text-xs font-bold group-hover:text-[#C7FF3D] transition-colors">{project.name}</span>
                      <span className="block text-[10px] text-[#525C71]">{project.sub}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#525C71] group-hover:text-[#C7FF3D] transition-colors shrink-0 ml-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Access */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <span className="text-[10px] uppercase tracking-wider font-bold block" style={{ color: '#C7FF3D' }}>
              Direct Access //
            </span>
            <ul className="space-y-2.5 text-[#525C71]">
              <li>
                <a
                  href="mailto:founders@mediatards.agency"
                  data-cursor="cta"
                  className="hover:text-[#ECEEF2] transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C7FF3D] shrink-0" />
                  <span>Email Founders</span>
                </a>
              </li>
              {CONTACT.isWhatsappConfigured() && (
                <li>
                  <a
                    href={CONTACT.whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="cta"
                    className="hover:text-[#ECEEF2] transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#C7FF3D] shrink-0" />
                    <span>WhatsApp Direct</span>
                  </a>
                </li>
              )}
              <li className="pt-2">
                <a
                  href="#audit"
                  data-cursor="cta"
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-xs hover:text-white transition-colors"
                  style={{ color: '#C7FF3D' }}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#525C71]">
          <div>
            © {new Date().getFullYear()} MEDIA-TARDS. Digital Growth Studio. Handcrafted by Ishan, Aryan &amp; Kabir.
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-[#C7FF3D] transition-colors">Privacy</a>
            <span>·</span>
            <a href="/terms" className="hover:text-[#C7FF3D] transition-colors">Terms</a>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#8A92A6]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C7FF3D]" />
              <span>Zero-Bloat Custom React</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
