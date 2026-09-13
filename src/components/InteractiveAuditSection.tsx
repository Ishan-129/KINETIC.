import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Mail, Clock } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export const InteractiveAuditSection: React.FC = () => {
  const [industry, setIndustry] = useState('Medical & Cosmetic Clinic');
  const [bottleneck, setBottleneck] = useState('Our website looks dated and embarrassing');
  const [businessName, setBusinessName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const industries = [
    'Medical & Cosmetic Clinic',
    'Boutique Fitness / Gym',
    'Architecture & High-End Craft',
    'Artisan Café & Hospitality',
    'Luxury Home Services',
    'Other Local Business',
  ];

  const bottlenecks = [
    'Our website looks dated and leaks credibility',
    'Mobile visitors bounce within seconds',
    'We get website visitors but zero phone calls / bookings',
    'Competitors rank higher than us on Google Maps',
    'Starting from scratch with a brand new presence',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !contactInfo) return;
    setSubmitted(true);
  };

  return (
    <section id="audit" className="py-24 sm:py-32 bg-ivory-50 border-t border-sand-300 relative overflow-hidden">
      {/* Warm radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 radial-glow-coral opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="No-Obligation Digital Audit"
          title="Have a Business That Deserves a Better Digital Presence?"
          subtitle="Stop losing high-value neighborhood customers to competitors. Request a personalized 10-minute video audit of your current digital presence—completely free, zero pressure."
        />

        <div className="max-w-4xl mx-auto mt-4">
          {submitted ? (
            <div className="bg-white border border-sand-300 rounded-3xl p-8 sm:p-12 text-center shadow-warm-xl animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-accent-forest/10 border border-accent-forest/25 text-accent-forest flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-accent-forest bg-accent-forest/8 px-3 py-1.5 rounded-full border border-accent-forest/20">
                Audit Request Registered
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-5 mb-3">
                We're Reviewing {businessName}
              </h3>
              <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6">
                Our strategy lead (Ishan) will inspect your digital presence, analyze local search competitors
                in your area, and record a private 10-minute Loom video breaking down 3 high-impact conversion fixes.
              </p>

              <div className="bg-ivory-100 border border-sand-300 p-4 rounded-xl max-w-md mx-auto text-left text-xs font-mono text-slate-500 space-y-2 mb-8">
                <div>• Target Business: <span className="text-slate-900 font-semibold">{businessName}</span></div>
                <div>• Industry Focus: <span className="text-slate-900 font-semibold">{industry}</span></div>
                <div>• Primary Bottleneck: <span className="text-slate-900 font-semibold">{bottleneck}</span></div>
                <div>• Expected Delivery: <span className="text-accent-forest font-semibold">Within 24 Hours</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="md" variant="secondary" onClick={() => setSubmitted(false)}>
                  Submit Another Project
                </Button>
                <Button
                  asLink
                  href="https://wa.me/919999999999?text=Hi%20Kinetic%20team,%20I%20just%20requested%20an%20audit%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="glow"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Chat With Us on WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-sand-300 rounded-3xl p-6 sm:p-10 shadow-warm-xl relative overflow-hidden">
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold via-accent-gold-light to-accent-coral rounded-t-3xl" />

              <form onSubmit={handleSubmit} className="space-y-8 pt-2">
                {/* Step 1: Industry */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-accent-navy text-white border-0 text-xs font-mono flex items-center justify-center font-bold shadow-warm-sm">
                      1
                    </span>
                    <label className="text-sm sm:text-base font-bold text-slate-900">
                      What industry is your business in?
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {industries.map((ind) => (
                      <button
                        type="button"
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all duration-150 ${
                          industry === ind
                            ? 'bg-accent-gold/10 border-accent-gold text-slate-900 shadow-warm-sm ring-1 ring-accent-gold/30'
                            : 'bg-ivory-100 border-sand-300 text-slate-600 hover:border-sand-400 hover:bg-ivory-200'
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Bottleneck */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-accent-gold text-white text-xs font-mono flex items-center justify-center font-bold shadow-warm-sm">
                      2
                    </span>
                    <label className="text-sm sm:text-base font-bold text-slate-900">
                      What is your single biggest digital challenge right now?
                    </label>
                  </div>
                  <div className="space-y-2">
                    {bottlenecks.map((btn) => (
                      <div
                        key={btn}
                        onClick={() => setBottleneck(btn)}
                        className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all duration-150 flex items-center justify-between ${
                          bottleneck === btn
                            ? 'bg-accent-gold/10 border-accent-gold text-slate-900 shadow-warm-sm ring-1 ring-accent-gold/30'
                            : 'bg-ivory-100 border-sand-300 text-slate-600 hover:border-sand-400 hover:bg-ivory-200'
                        }`}
                      >
                        <span>{btn}</span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${
                            bottleneck === btn
                              ? 'border-accent-gold bg-accent-gold'
                              : 'border-sand-400 bg-transparent'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3: Contact */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 rounded-full bg-accent-forest text-white text-xs font-mono flex items-center justify-center font-bold shadow-warm-sm">
                      3
                    </span>
                    <label className="text-sm sm:text-base font-bold text-slate-900">
                      Where should we send your custom teardown?
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-500 block mb-1.5">
                        Business Name <span className="text-accent-coral">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Apex Physical Therapy"
                        className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30 placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-500 block mb-1.5">
                        Current Website URL (optional)
                      </label>
                      <input
                        type="text"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="e.g. www.apexphysicaltherapy.com"
                        className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30 placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-mono text-slate-500 block mb-1.5">
                      Your Name & Email or WhatsApp Number <span className="text-accent-coral">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="e.g. Dr. John Miller — john@apextherapy.com or +1 555-0123"
                      className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30 placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                    <span>Takes 24 hours to deliver • 100% Free • No sales pressure</span>
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Send My Free Audit Video
                  </Button>
                </div>
              </form>

              {/* Direct Contact Options */}
              <div className="mt-8 pt-6 border-t border-sand-300 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span>Prefer to chat directly?</span>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:founders@kineticstudio.agency"
                    className="flex items-center gap-1.5 text-slate-600 hover:text-accent-gold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-accent-gold" />
                    <span>founders@kineticstudio.agency</span>
                  </a>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-accent-forest hover:text-accent-forest/80 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
