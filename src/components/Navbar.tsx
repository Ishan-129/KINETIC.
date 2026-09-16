import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { MagneticButton } from './ui/MagneticButton';
import { useTextScramble } from '../hooks/useTextScramble';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

// Individual nav link with scramble effect
const ScrambleNavLink: React.FC<{
  label: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}> = ({ label, href, isActive, onClick }) => {
  const { text, scramble, reset } = useTextScramble(label.toUpperCase());

  return (
    <a
      href={href}
      data-cursor="explore"
      data-cursor-text={label.toUpperCase()}
      onClick={onClick}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className={`relative font-mono text-[11px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 py-1 group ${
        isActive
          ? 'text-[#C7FF3D]'
          : 'text-[#8A92A6] hover:text-[#ECEEF2]'
      }`}
    >
      {text}
      {isActive && (
        <motion.span
          layoutId="navIndicator"
          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C7FF3D]"
          style={{ boxShadow: '0 0 8px rgba(199,255,61,0.8)' }}
          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
        />
      )}
    </a>
  );
};

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
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
          isScrolled
            ? 'py-3 bg-[#080B12]/92 backdrop-blur-md border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="flex items-center group"
            data-cursor="explore"
            data-cursor-text="MEDIA-TARDS"
          >
            <Logo size="md" variant="full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <ScrambleNavLink
                key={link.label}
                label={link.label}
                href={link.href}
                isActive={activeSection === link.href.substring(1)}
              />
            ))}
          </nav>

          {/* Right CTA cluster */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8A92A6] uppercase font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-pulse" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
              <span>Q3 OPEN</span>
            </div>

            <MagneticButton
              as="a"
              href="#audit"
              cursorText="LET'S TALK ↗"
              className="px-5 py-2.5 bg-[#C7FF3D] text-[#080B12] font-mono text-[11px] font-black uppercase tracking-wider hover:bg-white transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#audit"
              className="px-3 py-1.5 bg-[#C7FF3D] text-[#080B12] font-mono text-xs font-black tracking-wide"
            >
              Start ↗
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#ECEEF2] border border-white/10 hover:border-[#C7FF3D]/30 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-[#080B12] flex flex-col justify-between p-7"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                <Logo size="md" variant="full" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#ECEEF2] border border-white/10"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="py-8 flex-1 flex flex-col justify-center">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-5xl font-black text-[#ECEEF2] hover:text-[#C7FF3D] transition-colors flex items-center justify-between py-3 border-b border-white/[0.06] uppercase tracking-tight"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[#525C71] font-bold">
                      0{i + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex items-center gap-2 font-mono text-xs text-[#8A92A6] font-semibold">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-pulse"
                  style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }}
                />
                <span>Accepting 3 new client partners for Q3</span>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="pt-6 border-t border-white/[0.08]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <a
                href="#audit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#C7FF3D] text-[#080B12] font-mono font-black text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-[#525C71] mt-3 font-mono">
                Direct founders · 24hr response · Zero junior handoffs
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
