import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080B12] text-[#ECEEF2] flex flex-col selection:bg-[#C7FF3D]/20 selection:text-[#C7FF3D]">
      {/* Minimal header */}
      <header className="py-5 px-6 border-b border-white/[0.08] bg-[#080B12]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="inline-flex items-center group">
            <Logo size="md" variant="full" />
          </a>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="text-center max-w-lg relative z-10">
          {/* Large 404 mark */}
          <div className="relative inline-block mb-8 select-none">
            <span className="text-[140px] sm:text-[180px] font-black font-display leading-none text-white/[0.04]">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-4 py-1.5 bg-[#0D1117] border border-[#C7FF3D]/30 shadow-acid-glow">
                <span className="text-xs font-mono font-bold text-[#C7FF3D] uppercase tracking-widest">
                  Page Not Found //
                </span>
              </div>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-black text-[#ECEEF2] uppercase tracking-tight mb-4">
            This page doesn't exist.
          </h1>
          <p className="text-[#8A92A6] text-sm sm:text-base font-body leading-relaxed mb-10 max-w-sm mx-auto">
            The URL you visited isn't a page on this site. It may have been moved,
            mistyped, or the link may be outdated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C7FF3D] text-[#080B12] font-mono text-xs font-black uppercase tracking-widest hover:bg-white transition-colors duration-200 shadow-acid-glow"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </a>
            <a
              href="/#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/[0.12] hover:border-[#C7FF3D]/40 text-[#ECEEF2] font-mono text-xs font-bold uppercase tracking-wider hover:text-[#C7FF3D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Request Free Audit</span>
            </a>
          </div>
        </div>
      </main>

      {/* Minimal footer strip */}
      <footer className="py-6 px-6 border-t border-white/[0.08] text-center">
        <p className="text-xs font-mono text-[#525C71]">
          © {new Date().getFullYear()} MEDIA-TARDS. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
