import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-navy relative overflow-hidden text-xs">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block group">
              <Logo theme="light" size="md" variant="full" />
            </a>

            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed max-w-sm">
              Turning overlooked local businesses into the obvious choice in their market. High-performance
              custom web systems engineered for maximum conversion.
            </p>

            <div className="flex items-center gap-2 text-accent-gold font-mono text-[11px] pt-2">
              <span className="w-2 h-2 rounded-full bg-accent-forest animate-pulse" />
              <span>Accepting 2 new client sprints for Q3</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/60 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-blue-200">
              {[
                { href: '#framework', label: 'Philosophy' },
                { href: '#work', label: 'Concept Benchmarks' },
                { href: '#services', label: 'Capabilities' },
                { href: '#process', label: '5-Step Process' },
                { href: '#why-us', label: 'Why Us' },
                { href: '#team', label: 'The Founders' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Concept Projects */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/60 font-semibold block">
              Live Concept Projects
            </span>
            <ul className="space-y-2 text-blue-200">
              {[
                'AURA Dental & Aesthetics',
                'FORGE Athletic Club',
                'ATELIER Stone & Timber',
              ].map((project) => (
                <li key={project}>
                  <a href="#work" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                    <span>{project}</span>
                    <ArrowUpRight className="w-3 h-3 text-blue-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Access */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/60 font-semibold block">
              Direct Access
            </span>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a
                  href="mailto:founders@kineticstudio.agency"
                  className="hover:text-accent-gold transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Email Founders</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-forest transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-accent-forest" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a href="#audit" className="text-accent-gold hover:brightness-110 font-mono font-semibold">
                  Claim Free Audit →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-blue-300">
          <div>
            © {new Date().getFullYear()} KINETIC DIGITAL STUDIO. Handcrafted by 3 collegiate builders with React, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
              <span>Zero-Bloat Architecture</span>
            </span>
            <span className="text-blue-500">•</span>
            <span>100/100 Lighthouse Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
