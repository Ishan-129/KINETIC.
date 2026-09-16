import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * MEDIA-TARDS — Privacy Policy
 *
 * ⚠️  DRAFT — Requires review and approval by a legal/business representative
 *    before this page is published publicly.
 *
 * This draft describes the data practices of the site as implemented.
 * It must be reviewed and approved before launch.
 */
export const PrivacyPage: React.FC = () => {
  const lastUpdated = 'September 2026';
  const email = 'founders@mediatards.agency';
  const companyName = 'MEDIA-TARDS';

  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      {/* Header */}
      <header className="py-5 px-6 border-b border-sand-300 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="inline-flex items-center group">
            <Logo size="md" variant="full" />
          </a>
          <Button asLink href="/" variant="secondary" size="sm" icon={<Home className="w-3.5 h-3.5" />}>
            Back to Home
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {/* Warning banner — visible only in development or until legal approved */}
          <div className="mb-10 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-800 text-sm font-mono">
            ⚠️ <strong>DRAFT FOR REVIEW.</strong> This Privacy Policy has not yet been reviewed by a legal professional. It must be reviewed and approved before this website is publicly launched.
          </div>

          {/* Title */}
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-gold font-semibold">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm font-mono">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-10 text-slate-600 text-sm sm:text-base leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
              <p>
                {companyName} ("we", "our", "us") is a digital growth studio that provides
                website design and development, social media management, and paid advertising
                services. Our website is accessible at{' '}
                <a href="https://mediatards.agency" className="text-accent-gold hover:underline">
                  https://mediatards.agency
                </a>.
              </p>
              <p className="mt-3">
                If you have questions about this policy, please contact us at{' '}
                <a href={`mailto:${email}`} className="text-accent-gold hover:underline">{email}</a>.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p>We collect information that you voluntarily provide when you submit the <strong>Free Digital Audit</strong> form on our website. This includes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your business name</li>
                <li>Your current website URL (optional)</li>
                <li>Your name and contact information (email address and/or WhatsApp number)</li>
                <li>Your industry category (selected from a list)</li>
                <li>Your primary digital challenge (selected from a list)</li>
              </ul>
              <p className="mt-3">
                We do not collect payment information through this website. We do not use browser cookies for tracking or advertising purposes.
              </p>
              <p className="mt-3">
                We do not knowingly collect information from children under 18. If you are under 18, please do not submit information through this form.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p>We use the information you submit to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Prepare and deliver your free personalized digital audit</li>
                <li>Contact you to discuss your project or provide our services</li>
                <li>Respond to your enquiries</li>
              </ul>
              <p className="mt-3">
                We do not use your information for automated profiling or decision-making.
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. How We Store Your Information</h2>
              <p>
                Form submissions are processed and delivered to our team via{' '}
                <strong>[FORM BACKEND — TO BE CONFIRMED: Formspree / Supabase / Resend]</strong>.{' '}
                <em>This section must be updated once the form backend is finalised.</em>
              </p>
              <p className="mt-3">
                We retain submission data for as long as is necessary to provide our services or as required to comply with legal obligations. You may request deletion of your data at any time by contacting{' '}
                <a href={`mailto:${email}`} className="text-accent-gold hover:underline">{email}</a>.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
              <p>Our website uses the following third-party services:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Google Fonts</strong> — Font files are loaded from Google Fonts servers. When your browser requests these files, Google may log your IP address. See{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">
                    Google Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Vercel</strong> — Our website is hosted on Vercel. Vercel may collect server access logs including IP addresses. See{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">
                    Vercel Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Form submission provider</strong> —{' '}
                  <em>[TO BE CONFIRMED once backend is finalised].</em>
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>The right to access the information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to our use of your information</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href={`mailto:${email}`} className="text-accent-gold hover:underline">{email}</a>.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Cookies</h2>
              <p>
                This website does not currently use advertising or tracking cookies. We may use essential session-related browser storage for functionality only. If analytics or advertising tools are added in the future, this policy will be updated accordingly.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the date of the most recent revision. We encourage you to review this page periodically.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-white border border-sand-300 font-mono text-sm">
                <p><strong>{companyName}</strong></p>
                <p>Email: <a href={`mailto:${email}`} className="text-accent-gold hover:underline">{email}</a></p>
              </div>
            </section>
          </div>

          {/* Back button */}
          <div className="mt-16 pt-8 border-t border-sand-300">
            <Button asLink href="/" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Home
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-sand-300 text-center">
        <p className="text-xs font-mono text-slate-400">
          © {new Date().getFullYear()} {companyName}. All rights reserved.{' '}
          <a href="/privacy" className="text-accent-gold hover:underline ml-2">Privacy Policy</a>
          <span className="mx-2 text-slate-300">·</span>
          <a href="/terms" className="text-accent-gold hover:underline">Terms & Conditions</a>
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPage;
