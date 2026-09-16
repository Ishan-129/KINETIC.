import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT } from '../config/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-ink text-[#F5F2EB] relative overflow-hidden text-xs border-t-2 border-studio-ink">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-studio-gold via-accent-acid to-studio-gold opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group" data-cursor="explore">
              <Logo theme="light" size="md" variant="full" />
            </a>

            <p className="text-[#F5F2EB]/70 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              A kinetic digital growth studio. Custom websites, ongoing social media systems, and lead generation ads handcrafted directly by 3 founding partners.
            </p>

            <div className="flex items-center gap-2 text-accent-acid font-mono text-[11px] pt-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-accent-acid animate-pulse" />
              <span>Accepting 3 new client partners for Q3</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <span className="text-xs uppercase tracking-wider text-studio-gold font-bold block">
              Navigation //
            </span>
            <ul className="space-y-2.5 text-[#F5F2EB]/80 text-xs font-semibold">
              {[
                { href: '#services', label: 'Stations' },
                { href: '#interactive-builder', label: 'Growth Builder' },
                { href: '#work', label: 'Work Tape' },
                { href: '#process', label: 'Timeline' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#about', label: 'Studio' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-cursor="explore"
                    className="hover:text-accent-acid transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Selected Work */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <span className="text-xs uppercase tracking-wider text-studio-gold font-bold block">
              Work Tape //
            </span>
            <ul className="space-y-3 text-[#F5F2EB]/80">
              {[
                { name: 'AURA Aesthetics', sub: 'High-Ticket Aesthetic Healthcare' },
                { name: 'FORGE Athletic Club', sub: 'Performance Fitness & Pass Engine' },
                { name: 'ATELIER Studio', sub: 'Custom Architecture & Millwork' },
              ].map((project) => (
                <li key={project.name}>
                  <a href="#work" data-cursor="view" className="hover:text-accent-acid transition-colors flex items-center justify-between group">
                    <div>
                      <span className="block text-xs font-bold group-hover:text-accent-acid transition-colors">{project.name}</span>
                      <span className="block text-[10px] text-[#F5F2EB]/50">{project.sub}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#F5F2EB]/40 group-hover:text-accent-acid transition-colors shrink-0 ml-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Access */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <span className="text-xs uppercase tracking-wider text-studio-gold font-bold block">
              Direct Access //
            </span>
            <ul className="space-y-2.5 text-[#F5F2EB]/80">
              <li>
                <a
                  href="mailto:founders@mediatards.agency"
                  data-cursor="cta"
                  className="hover:text-accent-acid transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-studio-gold shrink-0 />" />
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
                    className="hover:text-accent-acid transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-accent-acid shrink-0 />" />
                    <span>WhatsApp Direct</span>
                  </a>
                </li>
              )}
              <li className="pt-2">
                <a
                  href="#audit"
                  data-cursor="cta"
                  className="inline-flex items-center gap-1.5 text-accent-acid hover:text-white font-mono font-bold"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#F5F2EB]/60">
          <div>
            © {new Date().getFullYear()} MEDIA-TARDS. Digital Growth Studio. Handcrafted by Ishan, Aryan &amp; Kabir.
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-studio-gold transition-colors">
              Privacy
            </a>
            <span>·</span>
            <a href="/terms" className="hover:text-studio-gold transition-colors">
              Terms
            </a>
            <span>·</span>
            <span className="flex items-center gap-1 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-acid" />
              <span>Zero-Bloat Custom React</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
