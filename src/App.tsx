import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { FrameworkSection } from './components/FrameworkSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TeamSection } from './components/TeamSection';
import { InteractiveAuditSection } from './components/InteractiveAuditSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Problem Mirror Section (The 4 Leaks) */}
        <ProblemSection />

        {/* 3. The Core Philosophy (Discover -> Trust -> Convert) */}
        <FrameworkSection />

        {/* 4. High-Fidelity Concept Case Studies */}
        <CaseStudiesSection />

        {/* 5. Business-First Services & Capabilities */}
        <ServicesSection />

        {/* 6. The 5-Step Launch Protocol */}
        <ProcessSection />

        {/* 7. Why Work With Us (Direct Founders vs Bloated Agencies) */}
        <WhyUsSection />

        {/* 8. Meet the 3 Founders */}
        <TeamSection />

        {/* 9. Interactive Scope & Digital Audit Form */}
        <InteractiveAuditSection />
      </main>

      {/* Footer & Colophon */}
      <Footer />
    </div>
  );
};

export default App;
