import React from 'react';
import { Zap, ArrowUpRight, MessageSquare, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-950 border-t border-surface-border py-16 sm:py-20 relative overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-surface-border">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-obsidian-950 shadow-md shadow-sky-500/20">
                <Zap className="w-4 h-4 fill-obsidian-950 text-obsidian-950" />
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg leading-none font-sans">
                KINETIC<span className="text-brand-cyan">.</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Turning overlooked local businesses into the obvious choice in their market. High-performance custom web systems engineered for maximum conversion.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Accepting 2 new client sprints for Q3</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#framework" className="hover:text-brand-cyan transition-colors">Philosophy</a></li>
              <li><a href="#work" className="hover:text-brand-cyan transition-colors">Concept Benchmarks</a></li>
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Capabilities</a></li>
              <li><a href="#process" className="hover:text-brand-cyan transition-colors">5-Step Process</a></li>
              <li><a href="#why-us" className="hover:text-brand-cyan transition-colors">Why Us</a></li>
              <li><a href="#team" className="hover:text-brand-cyan transition-colors">The Founders</a></li>
            </ul>
          </div>

          {/* Col 3: Concept Benchmarks */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Live Concept Projects
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>AURA Dental & Aesthetics</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>FORGE Athletic Club</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>ATELIER Stone & Timber</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Access */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Direct Access
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="mailto:founders@kineticstudio.agency" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Founders</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a href="#audit" className="text-brand-cyan hover:underline font-mono">
                  Claim Free Audit →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} KINETIC DIGITAL STUDIO. Handcrafted by 3 collegiate builders with React, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero-Bloat Architecture</span>
            </span>
            <span>•</span>
            <span>100/100 Lighthouse Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
