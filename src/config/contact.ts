/**
 * MEDIA-TARDS — Centralized contact configuration
 *
 * IMPORTANT: VITE_WHATSAPP_NUMBER must be set before launch.
 * Format: country code + number, no spaces, no leading +
 * Example: 919876543210 (for +91 98765 43210)
 *
 * Set in Vercel Dashboard → Project Settings → Environment Variables
 * or in .env.local for local development.
 */

export const SITE_URL = 'https://mediatards.agency';

export const CONTACT = {
  email: 'founders@mediatards.agency',

  /**
   * Returns a wa.me deep link for the configured WhatsApp number.
   * Returns '#' if VITE_WHATSAPP_NUMBER is not set, so UI never
   * renders a broken or placeholder link.
   */
  whatsappUrl: (message?: string): string => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
    if (!number || number.trim() === '') {
      return '#';
    }
    // Ensure number is digits-only (strip any accidental spaces/dashes)
    const cleaned = number.replace(/\D/g, '');
    const encoded = message ? `?text=${encodeURIComponent(message)}` : '';
    return `https://wa.me/${cleaned}${encoded}`;
  },

  /**
   * Returns true when WhatsApp is properly configured.
   * Use this to conditionally show/hide the WhatsApp button.
   */
  isWhatsappConfigured: (): boolean => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
    return Boolean(number && number.trim() !== '');
  },
};
