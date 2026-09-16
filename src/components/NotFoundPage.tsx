import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-50 bg-dot-pattern flex flex-col">
      {/* Minimal header */}
      <header className="py-5 px-6 border-b border-sand-300 bg-white/80 backdrop-blur-md">
        <a href="/" className="inline-flex items-center group">
          <Logo size="md" variant="full" />
        </a>
      </header>

      {/* 404 Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          {/* Large 404 mark */}
          <div className="relative inline-block mb-8">
            <span className="text-[140px] sm:text-[180px] font-extrabold font-mono leading-none text-sand-200 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-white border border-sand-300 shadow-warm-sm">
                <span className="text-xs font-mono font-semibold text-accent-gold uppercase tracking-widest">
                  Page Not Found
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            This page doesn't exist.
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-10 max-w-sm mx-auto">
            The URL you visited isn't a page on this site. It may have been moved,
            mistyped, or the link may be outdated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asLink
              href="/"
              variant="glow"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Back to Home
            </Button>
            <Button
              asLink
              href="/#audit"
              variant="secondary"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Request Free Audit
            </Button>
          </div>
        </div>
      </main>

      {/* Minimal footer strip */}
      <footer className="py-6 px-6 border-t border-sand-300 text-center">
        <p className="text-xs font-mono text-slate-400">
          © {new Date().getFullYear()} MEDIA-TARDS. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
