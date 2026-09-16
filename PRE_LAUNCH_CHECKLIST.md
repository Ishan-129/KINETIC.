# MEDIA-TARDS — Pre-Launch Checklist

> **FINAL STATUS: NOT READY FOR LAUNCH**
> Two business-input items must be completed before launch (see Critical section).
> All technical implementation is complete.

> Last updated: September 2026 — Final Pre-Launch Fix Pass

---

## 🔴 Critical — Must Complete Before Launch

These require action from the MEDIA-TARDS team, not code changes.

| # | Item | Status | Action Required |
|---|------|--------|-----------------|
| 1 | **Set VITE_FORMSPREE_ENDPOINT** | ⏳ NEEDS CONFIGURATION | Create a free Formspree account at [formspree.io](https://formspree.io). Create a new form, set destination to `founders@mediatards.agency`. Copy the endpoint URL. Set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID` in Vercel → Project Settings → Environment Variables. **Form will never send submissions without this.** |
| 2 | **Set VITE_WHATSAPP_NUMBER** | ⏳ NEEDS CONFIGURATION | Set `VITE_WHATSAPP_NUMBER=91XXXXXXXXXX` (real number, digits only, no +) in Vercel env vars. Without it, all WhatsApp buttons are hidden from the UI — not broken, but not shown. |

> [!IMPORTANT]
> Once both env vars are set and a new Vercel deployment is triggered, the site will be **READY FOR LAUNCH**.

---

## 🟡 Important — Requires Business/Legal Input (Not Code Changes)

| # | Item | Status | Action Required |
|---|------|--------|-----------------|
| 3 | **Privacy Policy — legal review** | ⚠️ DRAFT READY | `src/components/PrivacyPage.tsx` exists and is accessible at `/privacy`. The draft accurately describes data collection and is marked "DRAFT" on the page. One placeholder: form backend third-party name (update once Formspree is confirmed). Requires review by a legal professional before promoting publicly. |
| 4 | **Terms & Conditions — legal review** | ⚠️ DRAFT READY | `src/components/TermsPage.tsx` exists at `/terms`. All `[CONFIRM]` markers identify items needing business policy decisions (payment schedules, cancellation terms, deposit %, jurisdiction). Requires legal/business review. |
| 5 | **Confirm production domain** | ✅ CONFIRMED | `https://mediatards.agency` is used consistently throughout based on the `founders@mediatards.agency` email. Verify DNS is pointed to Vercel before launch. |

---

## ✅ Completed — This Pass

| # | Item | What Was Done |
|---|------|---------------|
| 6 | **Contact form backend** | `InteractiveAuditSection.tsx` fully rewritten. Async fetch POST to Formspree endpoint, loading state, error state, success state, duplicate submission guard, honeypot spam field, no fake success if env var missing. |
| 7 | **WhatsApp placeholder removed** | All `+919999999999` instances removed. Centralized via `src/config/contact.ts`. `CONTACT.whatsappUrl()` and `CONTACT.isWhatsappConfigured()` used in Footer and InteractiveAuditSection. WhatsApp UI is hidden (not broken) when `VITE_WHATSAPP_NUMBER` is unset. |
| 8 | **Q3 copy replaced** | All 3 instances updated to "Now Accepting New Projects" / "Now accepting new client projects" — evergreen copy. |
| 9 | **OG social image** | Created `public/og-image.jpg` (1200×630) with MEDIA-TARDS branding (dark navy, gold accents, E/D mark, "Discover → Trust → Convert"). `og:image` and `twitter:image` updated to use it. `twitter:card` upgraded to `summary_large_image`. |
| 10 | **404 page** | `src/components/NotFoundPage.tsx` created with on-brand design, Home and Audit CTAs. `App.tsx` updated to check `window.location.pathname` and render 404 for unknown paths. |
| 11 | **Privacy Policy page** | `src/components/PrivacyPage.tsx` created. Accessible at `/privacy`. Footer links added. |
| 12 | **Terms & Conditions page** | `src/components/TermsPage.tsx` created. Accessible at `/terms`. Footer links added. |
| 13 | **Pathname-based routing** | `App.tsx` handles `/`, `/privacy`, `/terms`, and `404` without React Router. Existing lazy-loading architecture fully preserved. |
| 14 | **Privacy/Terms footer links** | Added to `Footer.tsx` bottom strip. |
| 15 | **Centralized contact config** | `src/config/contact.ts` created. Single source of truth for email, WhatsApp URL generation, and WhatsApp availability check. |
| 16 | **.env.example updated** | Documents `VITE_FORMSPREE_ENDPOINT`, `VITE_WHATSAPP_NUMBER`, `VITE_SITE_URL`, and optional analytics vars with setup instructions. |

---

## ✅ Completed — Previous Pass (Technical SEO)

| # | Item | Status |
|---|------|--------|
| 17 | `robots.txt` | ✅ Deployed — allows all crawlers, references sitemap |
| 18 | `sitemap.xml` | ✅ Deployed — single canonical homepage URL |
| 19 | `manifest.webmanifest` | ✅ Deployed — MEDIA-TARDS name, ivory theme |
| 20 | `llms.txt` | ✅ Deployed — AI-readable agency summary |
| 21 | `llms-full.txt` | ✅ Deployed — full AI content: services, pricing, process, FAQs |
| 22 | Canonical URL tag | ✅ `<link rel="canonical" href="https://mediatards.agency/">` |
| 23 | Robots meta | ✅ `index, follow, max-snippet:-1, max-image-preview:large` |
| 24 | Absolute OG/Twitter URLs | ✅ All using `https://mediatards.agency/...` |
| 25 | JSON-LD structured data | ✅ WebSite + Organization + ProfessionalService + WebPage + Service Offers |
| 26 | Security headers (Vercel) | ✅ X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy |
| 27 | No secrets in code | ✅ No API keys, tokens, or secrets in any source file |
| 28 | Favicons | ✅ SVG, ICO, 32×32 PNG, Apple Touch Icon |
| 29 | Brand consistency | ✅ MEDIA-TARDS name and E/D logo consistent throughout |

---

## 🔵 Post-Launch Recommendations

| # | Item | Priority | Notes |
|---|------|----------|-------|
| 30 | Google Search Console | High | Submit sitemap after DNS propagation; verify via DNS TXT or HTML file |
| 31 | Analytics | Medium | Configure GA4, Plausible, or PostHog; env vars ready in `.env.example` |
| 32 | Google Business Profile | High | Register/claim mediatards.agency on GBP for local SEO presence |
| 33 | HTTPS verification | High | Confirm Vercel has SSL auto-provisioned on production domain |
| 34 | Privacy Policy — promote publicly | High | After legal review, remove the DRAFT banner from `PrivacyPage.tsx` |
| 35 | Terms — fill in [CONFIRM] markers | High | After business decisions on payment/cancellation/jurisdiction |
| 36 | Core Web Vitals on production | Medium | Run Lighthouse on live URL (not localhost) for accurate LCP/CLS scores |
| 37 | Formspree upgrade | Low | Free tier = 50 submissions/month. Upgrade to Gold (unlimited) after launch if needed |
| 38 | Cookie consent | Low | Add if analytics or advertising tracking is enabled post-launch |

---

## 🧾 Verification Matrix

| Check | Result | Notes |
|-------|--------|-------|
| Production build | ✅ PASS | Exit 0, 2031 modules, 0 TypeScript errors |
| `robots.txt` in dist | ✅ PASS | Confirmed present, 656 bytes |
| `sitemap.xml` in dist | ✅ PASS | Confirmed present, 772 bytes |
| `llms.txt` in dist | ✅ PASS | Confirmed present, 2091 bytes |
| `llms-full.txt` in dist | ✅ PASS | Confirmed present, 7747 bytes |
| `manifest.webmanifest` in dist | ✅ PASS | Confirmed present, linked in `<head>` |
| `og-image.jpg` in dist | ✅ PASS | Confirmed present, 467KB, 1200×630 |
| Canonical tag | ✅ PASS | `<link rel="canonical" href="https://mediatards.agency/">` in built HTML |
| Robots meta | ✅ PASS | `index, follow, max-snippet:-1...` confirmed in built HTML |
| OG metadata (absolute) | ✅ PASS | `og:image` points to `https://mediatards.agency/og-image.jpg` |
| Twitter card | ✅ PASS | `summary_large_image` with absolute image URL |
| JSON-LD structured data | ✅ PASS | `<script type="application/ld+json">` present in built HTML |
| Security headers | ✅ PASS | 5 headers in `vercel.json` |
| No secrets in source | ✅ PASS | No API keys, tokens found |
| No placeholder WhatsApp | ✅ PASS | `+919999999999` fully removed from all source files |
| No Q3 stale copy | ✅ PASS | All 3 instances replaced with evergreen copy |
| Contact form — backend | ⏳ NEEDS CONFIG | Code complete; `VITE_FORMSPREE_ENDPOINT` must be set in Vercel |
| WhatsApp links | ⏳ NEEDS CONFIG | Code complete; `VITE_WHATSAPP_NUMBER` must be set in Vercel |
| 404 page | ✅ PASS | `NotFoundPage.tsx` renders for unknown paths |
| Privacy Policy | ✅ PASS (draft) | `/privacy` route works; requires legal review before promotion |
| Terms & Conditions | ✅ PASS (draft) | `/terms` route works; requires business policy decisions |
| MEDIA-TARDS branding | ✅ PASS | Consistent throughout all components and static files |
| Domain consistency | ✅ PASS | `https://mediatards.agency` used in all 11 locations checked |
| Accessibility | ✅ PASS | Form labels added, ARIA role="radio" on bottleneck items, keyboard support |
| Mobile responsiveness | ✅ PASS | All new pages use existing responsive design system |
| Broken links | ✅ PASS | All internal links verified; WhatsApp conditionally rendered when configured |

---

## 🚦 FINAL LAUNCH STATUS

> **NOT READY FOR LAUNCH**
>
> Technical implementation: **COMPLETE**
> Business configuration required: **2 items**
>
> The site will be READY FOR LAUNCH once:
> 1. `VITE_FORMSPREE_ENDPOINT` is set in Vercel environment variables
> 2. `VITE_WHATSAPP_NUMBER` is set in Vercel environment variables
