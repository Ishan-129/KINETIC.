import React from 'react';
import { Logo } from './Logo';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * MEDIA-TARDS — Terms & Conditions
 *
 * ⚠️  DRAFT — Requires review and approval by a legal/business representative
 *    before this page is published publicly.
 *
 * Bracketed placeholders [LIKE THIS] indicate items that require
 * a confirmed business policy decision before publishing.
 */
export const TermsPage: React.FC = () => {
  const lastUpdated = 'September 2026';
  const email = 'founders@mediatards.agency';
  const companyName = 'MEDIA-TARDS';

  return (
    <div className="min-h-screen bg-[#080B12] text-[#ECEEF2] flex flex-col selection:bg-[#C7FF3D]/20 selection:text-[#C7FF3D]">
      {/* Header */}
      <header className="py-5 px-6 border-b border-white/[0.08] bg-[#080B12]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="inline-flex items-center group">
            <Logo size="md" variant="full" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.12] hover:border-[#C7FF3D]/40 font-mono text-xs font-bold text-[#8A92A6] hover:text-[#ECEEF2] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#C7FF3D]" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {/* Warning banner */}
          <div className="mb-10 p-4 border border-[#C7FF3D]/30 bg-[#C7FF3D]/10 text-[#ECEEF2] text-xs sm:text-sm font-mono">
            ⚠️ <strong>DRAFT FOR REVIEW.</strong> These Terms & Conditions have not yet been reviewed by a legal professional. Items marked <strong>[CONFIRM]</strong> require a business policy decision before publication.
          </div>

          {/* Title */}
          <div className="mb-12 pb-6 border-b border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF3D] font-bold">Legal //</span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-[#ECEEF2] tracking-tight uppercase mt-3 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-[#525C71] text-xs font-mono">Last updated: {lastUpdated}</p>
          </div>

          <div className="space-y-10 text-[#8A92A6] text-sm sm:text-base leading-relaxed font-body">

            {/* 1 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing <a href="https://mediatards.agency" className="text-[#C7FF3D] hover:underline font-mono text-sm">mediatards.agency</a> or engaging {companyName} for any service, you agree to be bound by these Terms & Conditions. If you do not agree, do not use our website or services.
              </p>
              <p className="mt-3">
                These terms apply to the {companyName} website and to all client service engagements unless a separate written agreement has been signed between the parties.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">2. Services</h2>
              <p>
                {companyName} provides digital services including, but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
                <li>Custom website design and development</li>
                <li>Social media management and content creation</li>
                <li>Paid advertising campaign management (Meta, Google)</li>
                <li>Digital strategy, conversion architecture, and brand positioning</li>
              </ul>
              <p className="mt-3">
                Specific deliverables, timelines, and pricing for each engagement are agreed upon in a separate project brief or service agreement before work commences.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">3. Free Digital Audit</h2>
              <p>
                The free digital audit offered on this website is a no-obligation diagnostic review of your current digital presence. Submitting an audit request does not create a binding service contract. {companyName} reserves the right to decline audit requests at its discretion.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">4. Payment Terms</h2>
              <p>
                Payment terms and schedules are agreed upon in individual project proposals:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
                <li>Payment terms are outlined in the individual project proposal or service agreement.</li>
                <li>For one-time website builds, a milestone deposit is required before work commences, with the balance due upon delivery.</li>
                <li>For ongoing monthly services, payment is due in advance of the monthly service cycle.</li>
                <li>Late payments may result in work being paused until the outstanding balance is settled.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">5. Project Scope & Revisions</h2>
              <p>
                The scope of each project is defined in the agreed project brief. Work outside the agreed scope may be subject to additional charges.
              </p>
              <p className="mt-3">
                Revision rounds are specified within each project agreement and handled collaboratively during sprint checkpoints.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">6. Delivery & Timeline</h2>
              <p>
                Estimated delivery timelines are provided in the project brief. Delays caused by the client (e.g. late content delivery, unresponsiveness, or scope changes) may extend the timeline and are not the responsibility of {companyName}.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">7. Cancellation & Refunds</h2>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
                <li>If a client cancels a project after work has commenced, the deposit may be non-refundable at the discretion of {companyName}.</li>
                <li>For ongoing monthly services, cancellation requires 30 days written notice.</li>
                <li>Ad spend paid directly to platforms (Meta, Google) is non-refundable through {companyName}.</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">8. Intellectual Property</h2>
              <p>
                Upon receipt of full payment, all custom design and development work created specifically for the client becomes the property of the client. {companyName} retains the right to display the work in its portfolio unless otherwise agreed in writing.
              </p>
              <p className="mt-3">
                Third-party assets (fonts, stock images, plugins, or frameworks) are subject to their respective licences and are the client's responsibility to maintain.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">9. Client Responsibilities</h2>
              <p>
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
                <li>Providing accurate business information, content, and materials in a timely manner</li>
                <li>Reviewing and approving deliverables within agreed timelines</li>
                <li>Ensuring they own or have the rights to any content or materials they provide</li>
                <li>Maintaining domain registration, hosting credentials, and any third-party accounts</li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">10. Third-Party Services</h2>
              <p>
                {companyName} may recommend or integrate third-party services (hosting platforms, CMS, booking systems, CRM, advertising platforms, etc.) as part of a project. {companyName} is not responsible for the ongoing performance, pricing changes, or terms changes of third-party services.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">11. Limitation of Liability</h2>
              <p>
                {companyName} provides services in good faith and with professional care. However, we do not guarantee specific business outcomes, search engine rankings, advertising results, or revenue targets.
              </p>
              <p className="mt-3">
                To the maximum extent permitted by applicable law, {companyName}'s total liability for any claim arising out of or related to our services shall not exceed the total fees paid by the client in the preceding 3 months.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">12. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, India.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">13. Changes to These Terms</h2>
              <p>
                {companyName} reserves the right to update these Terms & Conditions at any time. The "Last updated" date reflects the most recent revision. Continued use of our services after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#ECEEF2] uppercase tracking-tight mb-3">14. Contact</h2>
              <p>
                For questions about these terms or to raise a dispute, contact us at:
              </p>
              <div className="mt-3 p-5 bg-[#0D1117] border border-white/[0.08] font-mono text-sm space-y-1">
                <p className="font-bold text-[#ECEEF2]">{companyName}</p>
                <p className="text-[#8A92A6]">Email: <a href={`mailto:${email}`} className="text-[#C7FF3D] hover:underline">{email}</a></p>
              </div>
            </section>

          </div>

          {/* Back button */}
          <div className="mt-16 pt-8 border-t border-white/[0.08]">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] hover:border-[#C7FF3D]/40 font-mono text-xs font-bold text-[#ECEEF2] hover:text-[#C7FF3D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-white/[0.08] text-center">
        <p className="text-xs font-mono text-[#525C71]">
          © {new Date().getFullYear()} {companyName}. All rights reserved.{' '}
          <a href="/privacy" className="text-[#8A92A6] hover:text-[#C7FF3D] ml-2">Privacy Policy</a>
          <span className="mx-2 text-white/20">·</span>
          <a href="/terms" className="text-[#8A92A6] hover:text-[#C7FF3D]">Terms & Conditions</a>
        </p>
      </footer>
    </div>
  );
};

export default TermsPage;
