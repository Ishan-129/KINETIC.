import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Mail, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT } from '../config/contact';
import { MagneticButton } from './ui/MagneticButton';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export const InteractiveAuditSection: React.FC = () => {
  const [industry, setIndustry] = useState('Medical & Cosmetic Clinic');
  const [bottleneck, setBottleneck] = useState('Our website looks dated and leaks credibility');
  const [businessName, setBusinessName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const industries = [
    'Medical & Cosmetic Clinic',
    'Boutique Fitness / Gym',
    'Architecture & High-End Craft',
    'Artisan Hospitality / Café',
    'Luxury Home & Real Estate',
    'Other Local Business',
  ];

  const bottlenecks = [
    'Our website looks dated and leaks credibility',
    'Mobile visitors bounce within seconds',
    'We get website visitors but zero phone calls / bookings',
    'Competitors rank higher than us on Google Maps',
    'Starting from scratch with a brand new presence',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!businessName.trim() || !contactInfo.trim()) return;
    if (loading || submitted) return;

    if (!FORMSPREE_ENDPOINT) {
      setError(
        'The brief form is ready for deployment. Please contact us directly at founders@mediatards.agency or via WhatsApp below — our 3 founders respond within 24 hours.'
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          business_name: businessName.trim(),
          contact_info: contactInfo.trim(),
          website_url: websiteUrl.trim() || 'Not provided',
          industry,
          primary_challenge: bottleneck,
          _subject: `New Project Brief — ${businessName.trim()}`,
          _replyto: contactInfo.trim(),
          source: 'mediatards.agency — Kinetic Studio Form',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        const msg = data?.errors?.[0]?.message || data?.error || null;
        setError(
          msg
            ? `Submission failed: ${msg}. Please try again or email us directly.`
            : 'Something went wrong submitting your request. Please email us at founders@mediatards.agency.'
        );
      }
    } catch {
      setError(
        'Could not reach server. Please check your connection or contact founders@mediatards.agency directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const isWhatsappReady = CONTACT.isWhatsappConfigured();

  return (
    <section className="py-24 sm:py-36 bg-studio-bg border-t border-studio-ink relative" id="audit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Dramatic Oversized Studio Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-studio-ink flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-acid animate-pulse" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-studio-ink/70 uppercase font-bold">
                INITIATE // START A PROJECT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-studio-ink tracking-tight leading-[0.92] uppercase">
              Got Something<br />
              To Build?<br />
              <span className="text-studio-gold">Let's Talk.</span>
            </h2>
          </div>

          {/* Minimal Studio Metadata Card */}
          <div className="bg-studio-ink text-[#F5F2EB] p-6 border-2 border-studio-ink font-mono text-xs space-y-3 min-w-[280px] shadow-studio-md">
            <div>
              <span className="text-accent-acid uppercase tracking-widest font-bold block text-[10px]">
                PROJECT STATUS
              </span>
              <span className="text-white font-bold text-sm">● OPEN FOR Q3 SPRINT</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <span className="text-studio-gold uppercase tracking-widest font-bold block text-[10px]">
                LOCATION
              </span>
              <span className="text-white font-bold">MUMBAI / GLOBAL EDGE</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <span className="text-accent-acid uppercase tracking-widest font-bold block text-[10px]">
                DIRECT EMAIL
              </span>
              <a href="mailto:founders@mediatards.agency" className="text-white hover:text-studio-gold transition-colors font-semibold">
                founders@mediatards.agency
              </a>
            </div>
          </div>
        </div>

        {/* Brief Intake Canvas */}
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            /* Success State */
            <div className="bg-[#F5F2EB] border-2 border-studio-ink p-8 sm:p-14 text-center shadow-studio-lg animate-scale-in">
              <div className="w-16 h-16 bg-studio-ink text-accent-acid flex items-center justify-center mx-auto mb-6 shadow-studio-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-studio-ink bg-accent-acid px-3.5 py-1.5 border border-studio-ink font-black">
                BRIEF LOGGED
              </span>

              <h3 className="font-display text-3xl sm:text-4xl font-black text-studio-ink mt-6 mb-3 uppercase">
                Reviewing {businessName}
              </h3>
              <p className="text-studio-ink/80 text-base max-w-lg mx-auto leading-relaxed mb-8 font-medium">
                Our 3 founders (Ishan, Aryan, Kabir) will analyze your competitors and reply with a custom sprint blueprint within 24 hours.
              </p>

              <div className="bg-white border-2 border-studio-ink p-5 max-w-md mx-auto text-left text-xs font-mono text-studio-ink space-y-2 mb-8">
                <div>• Business: <span className="font-bold">{businessName}</span></div>
                <div>• Industry: <span className="font-bold">{industry}</span></div>
                <div>• Primary Focus: <span className="font-bold">{bottleneck}</span></div>
                <div>• Response: <span className="text-studio-gold font-bold">Within 24 Hours</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => { setSubmitted(false); setError(null); }}
                  className="px-6 py-3 border-2 border-studio-ink text-studio-ink text-xs font-mono uppercase font-bold hover:bg-studio-ink hover:text-white transition-colors"
                >
                  Submit Another Brief
                </button>
                {isWhatsappReady && (
                  <a
                    href={CONTACT.whatsappUrl('Hi MEDIA-TARDS team, I just requested a project brief.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-studio-ink text-[#F5F2EB] text-xs font-mono uppercase font-bold hover:bg-studio-gold hover:text-studio-ink transition-colors border-2 border-studio-ink"
                  >
                    <MessageSquare className="w-4 h-4 text-accent-acid" />
                    <span>WhatsApp Direct</span>
                  </a>
                )}
              </div>
            </div>
          ) : (
            /* Active Form State */
            <div className="bg-[#F5F2EB] border-2 border-studio-ink p-8 sm:p-12 shadow-studio-lg">
              <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                {/* Step 1: Industry */}
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-studio-ink font-bold block mb-4">
                    01 // What type of business is this?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {industries.map((ind) => (
                      <button
                        type="button"
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        data-cursor="select"
                        data-cursor-text={ind.toUpperCase()}
                        className={`p-3.5 border-2 text-xs font-mono font-bold text-left transition-all ${
                          industry === ind
                            ? 'bg-studio-ink text-[#F5F2EB] border-studio-ink shadow-studio-sm'
                            : 'bg-white text-studio-ink border-studio-ink/30 hover:border-studio-ink'
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Bottleneck */}
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-studio-ink font-bold block mb-4">
                    02 // What needs to be built or fixed first?
                  </label>
                  <div className="space-y-2.5 font-mono text-xs">
                    {bottlenecks.map((btn) => (
                      <div
                        key={btn}
                        onClick={() => setBottleneck(btn)}
                        role="radio"
                        aria-checked={bottleneck === btn}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setBottleneck(btn)}
                        data-cursor="select"
                        className={`p-4 border-2 cursor-pointer font-bold transition-all flex items-center justify-between ${
                          bottleneck === btn
                            ? 'bg-studio-ink text-[#F5F2EB] border-studio-ink shadow-studio-sm'
                            : 'bg-white text-studio-ink border-studio-ink/30 hover:border-studio-ink'
                        }`}
                      >
                        <span>{btn}</span>
                        <div
                          className={`w-3.5 h-3.5 border-2 flex-shrink-0 ${
                            bottleneck === btn
                              ? 'bg-accent-acid border-white'
                              : 'bg-transparent border-studio-ink/40'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3: Contact */}
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-studio-ink font-bold block mb-4">
                    03 // Where should we send your sprint plan?
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audit-business-name" className="text-xs font-mono text-studio-ink/70 font-bold block mb-1.5">
                        Business Name <span className="text-studio-gold">*</span>
                      </label>
                      <input
                        id="audit-business-name"
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Aura Dental Clinic"
                        disabled={loading}
                        className="w-full bg-white border-2 border-studio-ink/40 px-4 py-3 text-sm text-studio-ink focus:outline-none focus:border-studio-ink placeholder:text-studio-ink/40 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label htmlFor="audit-website-url" className="text-xs font-mono text-studio-ink/70 font-bold block mb-1.5">
                        Current Website or Instagram (optional)
                      </label>
                      <input
                        id="audit-website-url"
                        type="text"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="e.g. auraclinic.co or @auraclinic"
                        disabled={loading}
                        className="w-full bg-white border-2 border-studio-ink/40 px-4 py-3 text-sm text-studio-ink focus:outline-none focus:border-studio-ink placeholder:text-studio-ink/40 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="audit-contact" className="text-xs font-mono text-studio-ink/70 font-bold block mb-1.5">
                      Your Name &amp; Email or WhatsApp Number <span className="text-studio-gold">*</span>
                    </label>
                    <input
                      id="audit-contact"
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="e.g. Dr. Aryan — aryan@clinic.com or +91 98765 43210"
                      disabled={loading}
                      className="w-full bg-white border-2 border-studio-ink/40 px-4 py-3 text-sm text-studio-ink focus:outline-none focus:border-studio-ink placeholder:text-studio-ink/40 transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {error && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 bg-amber-50 border-2 border-studio-ink text-studio-ink text-xs font-mono"
                  >
                    <AlertCircle className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit Row with Magnetic CTA */}
                <div className="pt-6 border-t border-studio-ink/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-studio-ink/70">
                    <Clock className="w-4 h-4 text-studio-gold shrink-0" />
                    <span>24-hour founder response • Direct access</span>
                  </div>

                  <MagneticButton
                    type="submit"
                    disabled={loading}
                    cursorText="SUBMIT BRIEF ↗"
                    className="w-full sm:w-auto px-8 py-4 bg-studio-ink text-[#F5F2EB] font-mono font-black text-xs uppercase tracking-widest hover:bg-studio-gold hover:text-studio-ink transition-colors duration-200 border-2 border-studio-ink shadow-studio-md disabled:opacity-60"
                  >
                    <div className="flex items-center gap-3">
                      <span>{loading ? 'Submitting Brief...' : "Let's Talk"}</span>
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-accent-acid" />
                      )}
                    </div>
                  </MagneticButton>
                </div>
              </form>

              {/* Direct channels footer */}
              <div className="mt-10 pt-6 border-t border-studio-ink/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-studio-ink/70">
                <span className="font-bold">Direct studio channels:</span>
                <div className="flex items-center gap-6">
                  <a
                    href="mailto:founders@mediatards.agency"
                    className="flex items-center gap-1.5 text-studio-ink hover:text-studio-gold transition-colors font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5 text-studio-gold" />
                    <span>founders@mediatards.agency</span>
                  </a>
                  {isWhatsappReady && (
                    <a
                      href={CONTACT.whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-studio-ink hover:text-studio-gold transition-colors font-semibold"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-accent-acid" />
                      <span>WhatsApp Direct</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveAuditSection;
