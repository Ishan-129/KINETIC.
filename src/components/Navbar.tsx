import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { MagneticButton } from './ui/MagneticButton';

const navLinks = [
  { label: 'Stations', href: '#services' },
  { label: 'Builder', href: '#interactive-builder' },
  { label: 'Work', href: '#work' },
  { label: 'Timeline', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Studio', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setupObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const sectionIds = navLinks.map((l) => l.href.substring(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const callback: IntersectionObserverCallback = (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActiveSection(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    elements.forEach((el) => observerRef.current!.observe(el));
  }, []);

  useEffect(() => {
    const timer = setTimeout(setupObserver, 800);
    window.addEventListener('hashchange', setupObserver);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', setupObserver);
      observerRef.current?.disconnect();
    };
  }, [setupObserver]);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
          isScrolled
            ? 'py-3.5 bg-studio-bg/90 backdrop-blur-md border-b border-studio-ink shadow-studio-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark & Studio Tag */}
          <a href="#" className="flex items-center group" data-cursor="explore" data-cursor-text="MEDIA-TARDS">
            <Logo size="md" variant="full" />
          </a>

          {/* Clean Editorial Studio Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  data-cursor="explore"
                  data-cursor-text={link.label.toUpperCase()}
                  className={`relative font-mono text-xs font-bold tracking-wider uppercase transition-colors duration-200 py-1 ${
                    isActive ? 'text-studio-ink font-extrabold' : 'text-studio-ink/65 hover:text-studio-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-studio-gold"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Studio CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-studio-ink/80 uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent-acid animate-pulse" />
              <span>Q3 OPEN</span>
            </div>

            <MagneticButton
              as="a"
              href="#audit"
              cursorText="LET'S TALK ↗"
              className="px-5 py-2.5 bg-studio-ink text-[#F5F2EB] font-mono text-xs font-bold uppercase tracking-wider hover:bg-studio-gold hover:text-studio-ink transition-all duration-200 border border-studio-ink shadow-studio-sm"
            >
              <div className="flex items-center gap-2">
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-acid" />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#audit"
              className="px-3 py-1.5 bg-studio-ink text-[#F5F2EB] font-mono text-xs font-bold tracking-wide hover:bg-studio-gold hover:text-studio-ink transition-colors border border-studio-ink"
            >
              Start ↗
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-studio-ink hover:bg-studio-ink/10 transition-colors border border-studio-ink"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 />" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-studio-bg flex flex-col justify-between p-7"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-studio-ink">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                <Logo size="md" variant="full" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-studio-ink border border-studio-ink bg-white"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links List */}
            <div className="py-8 overflow-y-auto flex-1 flex flex-col justify-center">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-4xl font-black text-studio-ink hover:text-studio-gold transition-colors flex items-center justify-between py-2 border-b border-studio-ink/15 uppercase"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.04,
                      duration: 0.3,
                    }}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-studio-ink/50 font-bold">
                      0{i + 1} ↗
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex items-center gap-2 font-mono text-xs text-studio-ink font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent-acid animate-pulse" />
                <span>Accepting 2 client partners for Q3</span>
              </div>
            </div>

            {/* Bottom Action */}
            <motion.div
              className="pt-6 border-t border-studio-ink"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <a
                href="#audit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-studio-ink text-[#F5F2EB] font-mono font-black text-xs uppercase tracking-widest hover:bg-studio-gold hover:text-studio-ink transition-colors border-2 border-studio-ink"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-accent-acid" />
              </a>
              <p className="text-center text-[11px] text-studio-ink/60 mt-3 font-mono">
                Direct founders • 24hr response • No junior handoffs
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
