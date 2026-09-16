import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SignalCursor } from './components/ui/SignalCursor';
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider';
import { DualMarquee } from './components/ui/DualMarquee';
import { LazySection } from './components/ui/LazySection';
import { NotFoundPage } from './components/NotFoundPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';

// Lazy load below-the-fold studio components for optimal performance
const StudioStationsSection = React.lazy(() =>
  import('./components/services/StudioStationsSection').then((m) => ({ default: m.StudioStationsSection }))
);
const BuildYourGrowthSection = React.lazy(() =>
  import('./components/interactive/BuildYourGrowthSection').then((m) => ({ default: m.BuildYourGrowthSection }))
);
const WorkTapeSection = React.lazy(() =>
  import('./components/portfolio/WorkTapeSection').then((m) => ({ default: m.WorkTapeSection }))
);
const ProcessTimelineSection = React.lazy(() =>
  import('./components/process/ProcessTimelineSection').then((m) => ({ default: m.ProcessTimelineSection }))
);
const AboutStudioSection = React.lazy(() =>
  import('./components/about/AboutStudioSection').then((m) => ({ default: m.AboutStudioSection }))
);
const PricingSection = React.lazy(() =>
  import('./components/PricingSection').then((m) => ({ default: m.PricingSection }))
);
const InteractiveAuditSection = React.lazy(() =>
  import('./components/InteractiveAuditSection').then((m) => ({ default: m.InteractiveAuditSection }))
);
const Footer = React.lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

// Pathname-based route resolution
const getRoute = () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/privacy') return 'privacy';
  if (path === '/terms') return 'terms';
  if (path === '/') return 'home';
  return '404';
};

export const App: React.FC = () => {
  const route = getRoute();

  if (route === 'privacy') return <PrivacyPage />;
  if (route === 'terms') return <TermsPage />;
  if (route === '404') return <NotFoundPage />;

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-studio-bg text-studio-ink flex flex-col selection:bg-studio-ink selection:text-accent-acid relative">
        <SpeedInsights />
        <Analytics />

        {/* MEDIA-TARDS SIGNAL Custom Cursor System */}
        <SignalCursor />

        {/* Global Studio Header */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-grow">
          {/* 1. Kinetic Hero with 3D Media Object & Oversized Typography */}
          <HeroSection />

          {/* 2. Dual-Velocity Kinetic Studio Tape */}
          <DualMarquee />

          {/* 3. Interactive Studio Stations (01 Build, 02 Attention, 03 Acquisition) */}
          <LazySection
            id="services"
            minHeight="min-h-[700px]"
            bgClassName="bg-studio-bg"
            skeletonTitle="Loading Studio Stations..."
          >
            <StudioStationsSection />
          </LazySection>

          {/* 4. Signature Interactive Build Your Growth Engine */}
          <LazySection
            id="interactive-builder"
            minHeight="min-h-[700px]"
            bgClassName="bg-studio-ink"
            skeletonTitle="Loading Growth Builder..."
          >
            <BuildYourGrowthSection />
          </LazySection>

          {/* 5. Horizontal Work Tape Reel & Live Interactive Prototypes */}
          <LazySection
            id="work"
            minHeight="min-h-[750px]"
            bgClassName="bg-studio-bg"
            skeletonTitle="Loading Work Tape..."
          >
            <WorkTapeSection />
          </LazySection>

          {/* 6. Scroll-Linked Process Timeline */}
          <LazySection
            id="process"
            minHeight="min-h-[500px]"
            bgClassName="bg-studio-bg"
            skeletonTitle="Loading Studio Timeline..."
          >
            <ProcessTimelineSection />
          </LazySection>

          {/* 7. About The Studio (3 Founders. One Studio. Zero Account Managers.) */}
          <LazySection
            id="about"
            minHeight="min-h-[600px]"
            bgClassName="bg-studio-bg"
            skeletonTitle="Loading Founders..."
          >
            <AboutStudioSection />
          </LazySection>

          {/* 8. Transparent Pricing & Package Matrix */}
          <LazySection
            id="pricing"
            minHeight="min-h-[600px]"
            bgClassName="bg-studio-bg"
            skeletonTitle="Loading Pricing..."
          >
            <PricingSection />
          </LazySection>

          {/* 9. Initiate Project Brief & Direct WhatsApp Contact */}
          <LazySection
            id="audit"
            minHeight="min-h-[700px]"
            bgClassName="bg-studio-bg"
            skeletonTitle="Loading Project Intake..."
          >
            <InteractiveAuditSection />
          </LazySection>
        </main>

        {/* 10. Studio Colophon & Footer */}
        <LazySection
          id="footer"
          minHeight="min-h-[350px]"
          bgClassName="bg-studio-ink"
          skeletonTitle="Loading Footer..."
        >
          <Footer />
        </LazySection>
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
