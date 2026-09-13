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
    <section id="audit" className="py-24 sm:py-32 bg-obsidian-950 border-t border-surface-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 radial-glow-amber opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="No-Obligation Digital Audit"
          title="Have a Business That Deserves a Better Digital Presence?"
          subtitle="Stop losing high-value neighborhood customers to competitors. Request a personalized 10-minute video audit of your current digital presence—completely free, zero pressure."
        />

        <div className="max-w-4xl mx-auto mt-12">
          {submitted ? (
            <div className="bg-obsidian-900 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center shadow-2xl animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Audit Request Registered
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
                We're Reviewing {businessName}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6">
                Our strategy lead (Ishan) will inspect your digital presence, analyze local search competitors in your area, and record a private 10-minute Loom video breaking down 3 high-impact conversion fixes.
              </p>

              <div className="bg-obsidian-950 border border-surface-border p-4 rounded-xl max-w-md mx-auto text-left text-xs font-mono text-slate-400 space-y-2 mb-8">
                <div>• Target Business: <span className="text-white">{businessName}</span></div>
                <div>• Industry Focus: <span className="text-white">{industry}</span></div>
                <div>• Primary Bottleneck: <span className="text-white">{bottleneck}</span></div>
                <div>• Expected Delivery: <span className="text-emerald-400">Within 24 Hours</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="md"
                  variant="secondary"
                  onClick={() => setSubmitted(false)}
                >
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
                  Chat With Us Directly on WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-obsidian-900 border border-surface-border rounded-3xl p-6 sm:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Industry */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-mono flex items-center justify-center font-bold">
                      1
                    </span>
                    <label className="text-sm sm:text-base font-bold text-white">
                      What industry is your business in?
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {industries.map((ind) => (
                      <button
                        type="button"
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                          industry === ind
                            ? 'bg-sky-500/15 border-sky-400 text-white shadow-md'
                            : 'bg-obsidian-950 border-surface-border text-slate-400 hover:text-slate-200 hover:border-slate-700'
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
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono flex items-center justify-center font-bold">
                      2
                    </span>
                    <label className="text-sm sm:text-base font-bold text-white">
                      What is your single biggest digital challenge right now?
                    </label>
                  </div>
                  <div className="space-y-2">
                    {bottlenecks.map((btn) => (
                      <div
                        key={btn}
                        onClick={() => setBottleneck(btn)}
                        className={`p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                          bottleneck === btn
                            ? 'bg-amber-500/15 border-amber-400 text-white shadow-md'
                            : 'bg-obsidian-950 border-surface-border text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <span>{btn}</span>
                        <div className={`w-3.5 h-3.5 rounded-full border ${
                          bottleneck === btn ? 'border-amber-400 bg-amber-400' : 'border-slate-700'
                        }`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3: Contact & Business URL */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono flex items-center justify-center font-bold">
                      3
                    </span>
                    <label className="text-sm sm:text-base font-bold text-white">
                      Where should we send your custom teardown?
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        Business Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Apex Physical Therapy"
                        className="w-full bg-obsidian-950 border border-surface-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        Current Website URL (optional)
                      </label>
                      <input
                        type="text"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="e.g. www.apexphysicaltherapy.com"
                        className="w-full bg-obsidian-950 border border-surface-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Your Name & Email or WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="e.g. Dr. John Miller — john@apextherapy.com or +1 555-0123"
                      className="w-full bg-obsidian-950 border border-surface-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
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

              {/* Direct Quick Contact Options */}
              <div className="mt-8 pt-6 border-t border-surface-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span>Prefer to chat directly?</span>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:founders@kineticstudio.agency"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>founders@kineticstudio.agency</span>
                  </a>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
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
