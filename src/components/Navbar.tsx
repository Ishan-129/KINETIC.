import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './Logo';

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
    { label: 'Pricing', href: '#pricing' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-sand-300 py-3 shadow-warm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a href="#" className="flex items-center group">
            <Logo size="md" variant="full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-ivory-100/80 border border-sand-300 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-accent-gold px-3 py-1.5 rounded-full transition-colors hover:bg-accent-gold/8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-forest/8 border border-accent-forest/20 text-accent-forest text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-accent-forest animate-pulse" />
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

          {/* Mobile Hamburger */}
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
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-ivory-200 border border-sand-300 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-sand-300">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <Logo size="md" variant="compact" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-ivory-100 border border-sand-300 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="py-8 overflow-y-auto flex-1">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-forest/8 border border-accent-forest/20 text-accent-forest text-xs font-mono w-fit mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-forest animate-pulse" />
              <span>2 Client Spots Available for Q3</span>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-800 hover:text-accent-gold py-4 border-b border-sand-300 transition-colors flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-accent-gold transition-colors" />
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-sand-300">
            <Button
              asLink
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              size="lg"
              variant="glow"
              className="w-full text-base py-4"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Claim Free Digital Audit
            </Button>
            <p className="text-center text-xs text-slate-400 mt-3 font-mono">
              24-hour delivery • 100% free video audit
            </p>
          </div>
        </div>
      )}
    </>
  );
};
