import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, Mail, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT } from '../config/contact';
import { SITE_CONFIG } from '../config/site';
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
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
      setError('Could not reach server. Please check your connection or contact founders@mediatards.agency directly.');
    } finally {
      setLoading(false);
    }
  };

  const isWhatsappReady = CONTACT.isWhatsappConfigured();

  return (
    <section className="py-24 sm:py-36 bg-[#080B12] border-t border-white/[0.06] relative overflow-hidden" id="audit">
      <div className="noise-section" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(199,255,61,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-14 sm:mb-20 pb-8 border-b border-white/[0.08] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-pulse" style={{ boxShadow: '0 0 6px rgba(199,255,61,0.8)' }} />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#525C71] uppercase font-bold">
                INITIATE // START A PROJECT
              </span>
            </div>
            <h2
              className="font-display font-black text-[#ECEEF2] tracking-tight leading-[0.88] uppercase"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              Got Something<br />
              To Build?<br />
              <span style={{ color: '#C7FF3D', textShadow: '0 0 40px rgba(199,255,61,0.3)' }}>Let's Talk.</span>
            </h2>
          </div>

          <div className="glass-panel-hi p-6 font-mono text-xs space-y-3 min-w-[260px]" style={{ borderColor: 'rgba(199,255,61,0.15)' }}>
            <div>
              <span className="text-[#C7FF3D] uppercase tracking-widest font-bold block text-[9px]">PROJECT STATUS</span>
              <span className="text-[#ECEEF2] font-bold">{SITE_CONFIG.availability.auditStatus}</span>
            </div>
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-[#C7FF3D] uppercase tracking-widest font-bold block text-[9px]">LOCATION</span>
              <span className="text-[#ECEEF2] font-bold">{SITE_CONFIG.location}</span>
            </div>
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-[#C7FF3D] uppercase tracking-widest font-bold block text-[9px]">DIRECT EMAIL</span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#ECEEF2] hover:text-[#C7FF3D] transition-colors font-semibold">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="glass-panel-hi border border-[#C7FF3D]/20 p-8 sm:p-14 text-center animate-scale-in" style={{ boxShadow: '0 0 60px rgba(199,255,61,0.06)' }}>
              <div className="w-16 h-16 bg-[#C7FF3D] text-[#080B12] flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '0 0 30px rgba(199,255,61,0.4)' }}>
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#080B12] bg-[#C7FF3D] px-3.5 py-1.5 font-black">BRIEF LOGGED</span>
              <h3 className="font-display font-black text-[#ECEEF2] mt-6 mb-3 uppercase" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
                Reviewing {businessName}
              </h3>
              <p className="text-[#8A92A6] text-base max-w-lg mx-auto leading-relaxed mb-8 font-body">
                Our 3 founders (Ishan, Aryan, Kabir) will analyze your competitors and reply with a custom sprint blueprint within 24 hours.
              </p>
              <div className="bg-[#080B12] border border-white/[0.06] p-5 max-w-md mx-auto text-left text-xs font-mono text-[#8A92A6] space-y-2 mb-8">
                <div>• Business: <span className="text-[#ECEEF2] font-bold">{businessName}</span></div>
                <div>• Industry: <span className="text-[#ECEEF2] font-bold">{industry}</span></div>
                <div>• Primary Focus: <span className="text-[#ECEEF2] font-bold">{bottleneck}</span></div>
                <div>• Response: <span className="font-bold" style={{ color: '#C7FF3D' }}>Within 24 Hours</span></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => { setSubmitted(false); setError(null); }}
                  className="px-6 py-3 border border-white/10 text-[#8A92A6] text-xs font-mono uppercase font-bold hover:border-[#C7FF3D]/30 hover:text-[#ECEEF2] transition-colors"
                >
                  Submit Another Brief
                </button>
                {isWhatsappReady && (
                  <a
                    href={CONTACT.whatsappUrl('Hi MEDIA-TARDS team, I just requested a project brief.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] font-black uppercase tracking-widest text-[#080B12] hover:bg-white transition-colors"
                    style={{ background: '#C7FF3D', boxShadow: '0 0 20px rgba(199,255,61,0.3)' }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-white/[0.08] p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                {/* Step 1 */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#525C71] font-bold block mb-4">
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
                        className={`p-3.5 border text-xs font-mono font-bold text-left transition-all duration-200 ${
                          industry === ind ? 'text-[#080B12]' : 'bg-transparent border-white/[0.08] text-[#525C71] hover:border-white/[0.15] hover:text-[#ECEEF2]'
                        }`}
                        style={industry === ind ? { background: '#C7FF3D', borderColor: '#C7FF3D', boxShadow: '0 0 15px rgba(199,255,61,0.3)' } : {}}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#525C71] font-bold block mb-4">
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
                        className={`p-4 border cursor-pointer font-bold transition-all duration-200 flex items-center justify-between ${
                          bottleneck === btn ? '' : 'bg-transparent border-white/[0.08] text-[#525C71] hover:border-white/[0.15] hover:text-[#ECEEF2]'
                        }`}
                        style={bottleneck === btn ? { background: 'rgba(199,255,61,0.08)', borderColor: 'rgba(199,255,61,0.40)', color: '#ECEEF2' } : {}}
                      >
                        <span>{btn}</span>
                        <div
                          className="w-3.5 h-3.5 border-2 flex-shrink-0"
                          style={{ borderColor: bottleneck === btn ? '#C7FF3D' : 'rgba(255,255,255,0.15)', background: bottleneck === btn ? '#C7FF3D' : 'transparent' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#525C71] font-bold block mb-4">
                    03 // Where should we send your sprint plan?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audit-business-name" className="text-[10px] font-mono text-[#525C71] font-bold block mb-1.5">
                        Business Name <span style={{ color: '#C7FF3D' }}>*</span>
                      </label>
                      <input
                        id="audit-business-name"
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Aura Dental Clinic"
                        disabled={loading}
                        className="w-full bg-[#080B12] border border-white/[0.10] px-4 py-3 text-sm text-[#ECEEF2] focus:outline-none focus:border-[#C7FF3D]/40 placeholder:text-[#525C71] transition-colors font-mono"
                      />
                    </div>
                    <div>
                      <label htmlFor="audit-website-url" className="text-[10px] font-mono text-[#525C71] font-bold block mb-1.5">
                        Current Website or Instagram (optional)
                      </label>
                      <input
                        id="audit-website-url"
                        type="text"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="e.g. auraclinic.co or @auraclinic"
                        disabled={loading}
                        className="w-full bg-[#080B12] border border-white/[0.10] px-4 py-3 text-sm text-[#ECEEF2] focus:outline-none focus:border-[#C7FF3D]/40 placeholder:text-[#525C71] transition-colors font-mono"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="audit-contact" className="text-[10px] font-mono text-[#525C71] font-bold block mb-1.5">
                      Your Name &amp; Email or WhatsApp Number <span style={{ color: '#C7FF3D' }}>*</span>
                    </label>
                    <input
                      id="audit-contact"
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="e.g. Dr. Aryan — aryan@clinic.com or +91 98765 43210"
                      disabled={loading}
                      className="w-full bg-[#080B12] border border-white/[0.10] px-4 py-3 text-sm text-[#ECEEF2] focus:outline-none focus:border-[#C7FF3D]/40 placeholder:text-[#525C71] transition-colors font-mono"
                    />
                  </div>
                </div>

                {error && (
                  <div role="alert" className="flex items-start gap-3 p-4 bg-[#FF4F3B]/10 border border-[#FF4F3B]/30 text-[#ECEEF2] text-xs font-mono">
                    <AlertCircle className="w-4 h-4 text-[#FF4F3B] shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#525C71]">
                    <Clock className="w-4 h-4 text-[#C7FF3D] shrink-0" />
                    <span>24-hour founder response · Direct access</span>
                  </div>
                  <MagneticButton
                    type="submit"
                    disabled={loading}
                    cursorText="SUBMIT BRIEF ↗"
                    className="w-full sm:w-auto px-8 py-4 font-mono font-black text-xs uppercase tracking-widest text-[#080B12] hover:bg-white transition-colors duration-200 disabled:opacity-60"
                    style={{ background: '#C7FF3D', boxShadow: '0 0 20px rgba(199,255,61,0.25)' } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <span>{loading ? 'Submitting Brief...' : "Let's Talk"}</span>
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                  </MagneticButton>
                </div>
              </form>

              <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#525C71]">
                <span className="font-bold">Direct studio channels:</span>
                <div className="flex items-center gap-6">
                  <a href="mailto:founders@mediatards.agency" className="flex items-center gap-1.5 text-[#8A92A6] hover:text-[#C7FF3D] transition-colors font-semibold">
                    <Mail className="w-3.5 h-3.5 text-[#C7FF3D]" />
                    <span>founders@mediatards.agency</span>
                  </a>
                  {isWhatsappReady && (
                    <a href={CONTACT.whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#8A92A6] hover:text-[#C7FF3D] transition-colors font-semibold">
                      <MessageSquare className="w-3.5 h-3.5 text-[#C7FF3D]" />
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
