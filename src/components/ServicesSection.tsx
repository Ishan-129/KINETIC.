import React, { useState } from 'react';
import { Layout, Zap, Palette, MapPin, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      id: 'websites',
      icon: <Layout className="w-6 h-6 text-accent-navy" />,
      iconBg: 'bg-accent-navy/8 border-accent-navy/20',
      title: 'Custom Performance Websites',
      subtitle: 'Engineered for sub-second speeds and maximum local authority.',
      description:
        'We do not sell fragile WordPress templates with 45 bloated plugins. We handcraft ultra-fast, responsive web experiences tailored to your business economics and customer expectations.',
      idealFor: 'Established local businesses looking to outshine dated market competitors.',
      deliverables: [
        'Bespoke React/Vite custom web architecture',
        '100/100 Mobile & Desktop Google Lighthouse target',
        'Seamless mobile navigation & touch ergonomics',
        'Direct CMS integration for effortless staff updates',
      ],
      impact: 'Eliminates mobile bounce rates and captures 40%+ more website inquiries.',
    },
    {
      id: 'landing-pages',
      icon: <Zap className="w-6 h-6 text-accent-gold" />,
      iconBg: 'bg-accent-gold/8 border-accent-gold/20',
      title: 'Conversion Landing Pages',
      subtitle: 'Hyper-focused campaign pages built to turn traffic into revenue.',
      description:
        'Whether you run Google Ads, Instagram campaigns, or local promotions, sending paid clicks to a generic homepage burns money. We build laser-focused landing funnels designed to drive one action: booking or inquiring.',
      idealFor: 'Practices running paid advertising or seasonal promotions.',
      deliverables: [
        'High-converting single-action layout architecture',
        'Benefit-led sales copy with psychological triggers',
        'A/B testing instrumentation and event tracking',
        'Sub-second page speeds preventing ad spend waste',
      ],
      impact: 'Typically doubles return on local advertising spend.',
    },
    {
      id: 'ui-ux',
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      iconBg: 'bg-purple-50 border-purple-200',
      title: 'Brand & Digital UI/UX Systems',
      subtitle: 'Editorial visual hierarchy that establishes instant trust.',
      description:
        "75% of consumers judge a business's credibility based on design alone. We establish a cohesive, modern visual language—typography, color theory, and tactile component design—that commands premium pricing.",
      idealFor: 'Businesses whose physical quality exceeds their digital appearance.',
      deliverables: [
        'Digital brand guideline & typography hierarchy',
        'Custom iconography and interactive micro-animations',
        'Mobile-first UX flow and thumb-reach optimization',
        'Comprehensive multi-device visual design tokens',
      ],
      impact: 'Enables high-ticket businesses to justify premium rates.',
    },
    {
      id: 'local-growth',
      icon: <MapPin className="w-6 h-6 text-accent-forest" />,
      iconBg: 'bg-accent-forest/8 border-accent-forest/20',
      title: 'Local Discovery & SEO Architecture',
      subtitle: 'Dominating neighborhood search and Google Maps pack rankings.',
      description:
        'If you are not in the top 3 results when nearby customers search for your category, you do not exist to them. We implement structured local schemas and review funnels that elevate your search prominence.',
      idealFor: 'High-ticket local service providers, clinics, and studios.',
      deliverables: [
        'Technical schema markup for Google rich snippets',
        'Google Business Profile audit and synchronization',
        'Localized keyword and service area architecture',
        'Reputation & Google Review capture funnels',
      ],
      impact: 'Captures ready-to-buy customers at the precise moment of intent.',
    },
    {
      id: 'automation',
      icon: <Cpu className="w-6 h-6 text-accent-coral" />,
      iconBg: 'bg-accent-coral/8 border-accent-coral/20',
      title: 'Smart Booking & Workflow Automation',
      subtitle: 'Instant lead routing that ensures zero missed inquiries.',
      description:
        'Leads lose 80% of conversion value if not responded to within 5 minutes. We build automated notification systems connecting your website directly to your phone, calendar, and CRM.',
      idealFor: 'Busy business owners who cannot answer phone calls all day.',
      deliverables: [
        'Direct 2-way Google/Apple Calendar booking sync',
        'Instant SMS & WhatsApp lead notifications to staff',
        'Interactive pre-qualification questionnaires',
        'Automated intake confirmation and appointment reminders',
      ],
      impact: 'Stops leads from slipping away when you are off the clock.',
    },
  ];

  const current = services[selectedService];

  return (
    <section id="services" className="py-24 sm:py-32 bg-ivory-50 border-t border-sand-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Deliver"
          title="Capabilities Designed Around Revenue, Not Technical Jargon"
          subtitle="We don't throw buzzwords at you. Every capability we offer exists to solve a specific friction point between a local prospect and your bank account."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4 items-start">
          {/* Left Selector */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((svc, idx) => {
              const isSelected = selectedService === idx;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-accent-gold shadow-warm-md ring-1 ring-accent-gold/30'
                      : 'bg-white border-sand-300 hover:border-sand-400 hover:shadow-warm-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl border ${svc.iconBg}`}>{svc.icon}</div>
                    <div>
                      <h4 className={`text-base font-bold tracking-tight ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                        {svc.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{svc.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      isSelected ? 'text-accent-gold translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div className="lg:col-span-7 bg-white border border-sand-300 rounded-2xl p-6 sm:p-10 shadow-warm-lg relative overflow-hidden">
            {/* Gold top stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold via-accent-gold-light to-accent-coral rounded-t-2xl" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sand-300 pb-6 mb-8 pt-2">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl border ${current.iconBg}`}>{current.icon}</div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs text-accent-gold font-mono mt-0.5 font-semibold">{current.subtitle}</p>
                </div>
              </div>
              <Badge variant="gold" size="sm">
                Production Ready
              </Badge>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  The Strategy
                </h5>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{current.description}</p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  What You Receive
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-xl bg-ivory-100 border border-sand-300 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-forest shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-ivory-100 border border-sand-300 p-5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Business Return
                  </span>
                  <span className="text-xs font-mono text-accent-forest font-bold">Expected ROI</span>
                </div>
                <p className="text-sm font-bold text-slate-900">"{current.impact}"</p>
                <div className="mt-3 pt-3 border-t border-sand-300 text-xs text-slate-400">
                  <span className="text-slate-400">Best Suited For: </span>
                  <span className="text-slate-600">{current.idealFor}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <Button
                  asLink
                  href="#audit"
                  variant="glow"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire About This Service
                </Button>
                <span className="text-xs font-mono text-slate-400">Sprint Turnaround: 2–3 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
