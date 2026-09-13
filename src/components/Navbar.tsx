import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Philosophy', href: '#framework' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-surface-border/80 py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-obsidian-950 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-4 h-4 fill-obsidian-950 text-obsidian-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-lg leading-none font-sans">
                KINETIC<span className="text-brand-cyan">.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">
                Digital Growth Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-obsidian-800/60 border border-surface-border/60 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-obsidian-700/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / Availability Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>2 Client Spots for Q3</span>
            </div>

            <Button
              asLink
              href="#audit"
              size="sm"
              variant="glow"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Claim Free Audit
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              asLink
              href="#audit"
              size="sm"
              variant="glow"
              className="text-xs px-3 py-1.5"
            >
              Audit
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-obsidian-800 border border-surface-border transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Opaque Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#06070B] flex flex-col justify-between p-6 animate-fade-in">
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-surface-border">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-obsidian-950 shadow-md">
                <Zap className="w-4 h-4 fill-obsidian-950 text-obsidian-950" />
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg font-sans">
                KINETIC<span className="text-brand-cyan">.</span>
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-obsidian-800 border border-surface-border transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="py-8 overflow-y-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>2 Client Spots Available for Q3</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-200 hover:text-brand-cyan py-3 border-b border-surface-border/40 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500" />
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-surface-border">
            <Button
              asLink
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              size="lg"
              variant="glow"
              className="w-full text-base py-3.5"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Claim Free Digital Audit
            </Button>
            <p className="text-center text-xs text-slate-500 mt-3 font-mono">
              24-hour delivery • 100% free video audit
            </p>
          </div>
        </div>
      )}
    </>
  );
};
