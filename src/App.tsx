import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LazySection } from './components/ui/LazySection';

// Code-split all below-the-fold sections into independent dynamic chunks
const ProblemSection = React.lazy(() =>
  import('./components/ProblemSection').then((m) => ({ default: m.ProblemSection }))
);
const FrameworkSection = React.lazy(() =>
  import('./components/FrameworkSection').then((m) => ({ default: m.FrameworkSection }))
);
const CaseStudiesSection = React.lazy(() =>
  import('./components/CaseStudiesSection').then((m) => ({ default: m.CaseStudiesSection }))
);
const ServicesSection = React.lazy(() =>
  import('./components/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);
const ProcessSection = React.lazy(() =>
  import('./components/ProcessSection').then((m) => ({ default: m.ProcessSection }))
);
const WhyUsSection = React.lazy(() =>
  import('./components/WhyUsSection').then((m) => ({ default: m.WhyUsSection }))
);
const PricingSection = React.lazy(() =>
  import('./components/PricingSection').then((m) => ({ default: m.PricingSection }))
);
const TeamSection = React.lazy(() =>
  import('./components/TeamSection').then((m) => ({ default: m.TeamSection }))
);
const InteractiveAuditSection = React.lazy(() =>
  import('./components/InteractiveAuditSection').then((m) => ({ default: m.InteractiveAuditSection }))
);
const Footer = React.lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-50 text-slate-900 flex flex-col">
      <SpeedInsights />
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section (Immediate / Above-the-fold) */}
        <HeroSection />

        {/* 2. Problem Mirror Section (The 4 Leaks) */}
        <LazySection
          id="problem"
          minHeight="min-h-[600px]"
          bgClassName="bg-ivory-100"
          skeletonTitle="Loading Industry Diagnostics..."
        >
          <ProblemSection />
        </LazySection>

        {/* 3. The Core Philosophy (Discover -> Trust -> Convert) */}
        <LazySection
          id="framework"
          minHeight="min-h-[650px]"
          bgClassName="bg-ivory-50"
          skeletonTitle="Loading Core Philosophy..."
        >
          <FrameworkSection />
        </LazySection>

        {/* 4. High-Fidelity Concept Case Studies */}
        <LazySection
          id="work"
          minHeight="min-h-[700px]"
          bgClassName="bg-ivory-100"
          skeletonTitle="Loading Case Studies & Prototypes..."
        >
          <CaseStudiesSection />
        </LazySection>

        {/* 5. Business-First Services & Capabilities */}
        <LazySection
          id="services"
          minHeight="min-h-[700px]"
          bgClassName="bg-ivory-50"
          skeletonTitle="Loading Agency Capabilities..."
        >
          <ServicesSection />
        </LazySection>

        {/* 6. The 5-Step Launch Protocol */}
        <LazySection
          id="process"
          minHeight="min-h-[600px]"
          bgClassName="bg-ivory-100"
          skeletonTitle="Loading 5-Step Protocol..."
        >
          <ProcessSection />
        </LazySection>

        {/* 7. Why Work With Us (Direct Founders vs Bloated Agencies) */}
        <LazySection
          id="why-us"
          minHeight="min-h-[600px]"
          bgClassName="bg-ivory-50"
          skeletonTitle="Loading Direct Founder Advantage..."
        >
          <WhyUsSection />
        </LazySection>

        {/* 7.5. Transparent Investment & Squishy Pricing Tiers */}
        <LazySection
          id="pricing"
          minHeight="min-h-[600px]"
          bgClassName="bg-ivory-100/60"
          skeletonTitle="Loading Transparent Pricing..."
        >
          <PricingSection />
        </LazySection>

        {/* 8. Meet the 3 Founders */}
        <LazySection
          id="team"
          minHeight="min-h-[600px]"
          bgClassName="bg-ivory-100"
          skeletonTitle="Loading Founders & Leadership..."
        >
          <TeamSection />
        </LazySection>

        {/* 9. Interactive Scope & Digital Audit Form */}
        <LazySection
          id="audit"
          minHeight="min-h-[700px]"
          bgClassName="bg-ivory-50"
          skeletonTitle="Loading Digital Audit Calculator..."
        >
          <InteractiveAuditSection />
        </LazySection>
      </main>

      {/* Footer & Colophon */}
      <LazySection
        id="footer"
        minHeight="min-h-[350px]"
        bgClassName="bg-accent-navy"
        skeletonTitle="Loading Footer..."
      >
        <Footer />
      </LazySection>
    </div>
  );
};

export default App;
