import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#FDFCF9] border-t border-slate-900 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="mb-16 sm:mb-24 pb-8 border-b border-slate-900 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block mb-3">
              Capabilities / What We Do
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-none uppercase">
              Three Things.<br />
              Done Properly.
            </h2>
          </div>
          <p className="text-slate-700 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            We don't offer 40 different fluff services. We build websites that look legit, handle your social presence, and run ads that bring paying customers in.
          </p>
        </div>

        {/* 3 Distinct Editorial Services */}
        <div className="space-y-16 sm:space-y-24">
          {/* 01 — COMPLETE WEBSITE PACK */}
          <article className="border-b border-sand-400/80 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-slate-950">01</span>
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
                  WEBSITE CRAFT &amp; ENGINEERING
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
                Complete Website Pack
              </h3>
              <p className="text-lg sm:text-xl text-slate-700 font-medium mb-6">
                We build websites that make your business look legit.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                No clunky WordPress plugins. No generic site builder templates that look like everyone else. We handcraft custom React applications optimized for mobile speed, clear typography, and instant WhatsApp booking.
              </p>
              <div className="flex items-baseline gap-2 pt-4 border-t border-sand-300">
                <span className="text-xs font-mono text-slate-500 uppercase">Investment:</span>
                <span className="font-display text-2xl font-extrabold text-slate-950">₹7,999</span>
                <span className="text-xs font-mono text-slate-500 uppercase font-semibold">One-time payment</span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-ivory-100 border border-sand-400 p-8 sm:p-10 rounded-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-6">
                What's Delivered in 2–3 Weeks:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
                {[
                  'Custom design tailored to your brand',
                  '1–3 high-converting core pages',
                  'Sub-second mobile loading speed',
                  'Direct WhatsApp click-to-chat button',
                  'Contact & enquiry capture form',
                  'Google Maps & local search schema',
                  'Custom domain setup & SSL',
                  'Handcrafted by the 3 founders',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-sand-300 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600">Turnaround: 2–3 weeks</span>
                <a
                  href="#audit"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-slate-950 hover:text-accent-gold transition-colors"
                >
                  <span>Build My Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* 02 — SOCIAL MEDIA MANAGEMENT */}
          <article className="border-b border-sand-400/80 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-slate-950">02</span>
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
                  CONTENT, IDENTITY &amp; COMMUNITY
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
                Full Social Media Management
              </h3>
              <p className="text-lg sm:text-xl text-slate-700 font-medium mb-6">
                We handle the social stuff so you don't have to.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Most businesses abandon their Instagram after three weeks because creating content takes too much time. We plan the monthly calendar, produce the graphics and short reels, write punchy copy, and publish consistently.
              </p>
              <div className="flex items-baseline gap-2 pt-4 border-t border-sand-300">
                <span className="text-xs font-mono text-slate-500 uppercase">Investment:</span>
                <span className="text-xs font-mono text-slate-500">From</span>
                <span className="font-display text-2xl font-extrabold text-slate-950">₹5,999</span>
                <span className="text-xs font-mono text-slate-500 uppercase font-semibold">/ month</span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-ivory-100 border border-sand-400 p-8 sm:p-10 rounded-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-6">
                What's Handled Monthly:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
                {[
                  'Monthly content strategy & calendar',
                  '12 high-resolution branded feed posts',
                  '8 short-form vertical reels',
                  'Sharp captions & targeted hashtags',
                  'Cross-posting to Instagram & Facebook',
                  'Basic community inquiry management',
                  'Local competitor & trend research',
                  'Monthly analytics review & iterations',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-sand-300 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600">Active monthly partnership</span>
                <a
                  href="#audit"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-slate-950 hover:text-accent-gold transition-colors"
                >
                  <span>Grow My Socials</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* 03 — MARKETING & LEAD GENERATION ADS */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-slate-950">03</span>
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase font-semibold">
                  PAID CAMPAIGNS &amp; ACQUISITION
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
                Marketing + Lead Ads
              </h3>
              <p className="text-lg sm:text-xl text-slate-700 font-medium mb-6">
                We run ads that bring people in.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Turn your advertising budget into qualified enquiries. We design the ad creatives, target high-intent customers in your local geography, and route leads directly into your WhatsApp or inbox.
              </p>
              <div className="flex items-baseline gap-2 pt-4 border-t border-sand-300">
                <span className="text-xs font-mono text-slate-500 uppercase">Investment:</span>
                <span className="text-xs font-mono text-slate-500">From</span>
                <span className="font-display text-2xl font-extrabold text-slate-950">₹4,999</span>
                <span className="text-xs font-mono text-slate-500 uppercase font-semibold">/ month</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 mt-2">
                *Ad spend is paid directly to Meta/Google and is not included in our fee.
              </p>
            </div>

            <div className="lg:col-span-7 bg-ivory-100 border border-sand-400 p-8 sm:p-10 rounded-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-6">
                What's Managed:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
                {[
                  'Meta (Instagram/Facebook) campaign setup',
                  'Neighborhood & geo-targeted radius',
                  'Ad creative design & copywriting',
                  'Direct WhatsApp lead capture routing',
                  'Instant lead notification engine',
                  'A/B testing to reduce cost per enquiry',
                  'Retargeting interested visitors',
                  'Clear monthly lead report',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-sand-300 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600">Weekly campaign optimization</span>
                <a
                  href="#audit"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-slate-950 hover:text-accent-gold transition-colors"
                >
                  <span>Get More Leads</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
