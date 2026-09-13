/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        ivory: {
          50: '#FDFCF9',
          100: '#F8F4EE',
          200: '#F0EAE0',
        },
        sand: {
          300: '#E4D9C7',
          400: '#C9B99A',
          500: '#A89070',
        },
        accent: {
          gold: '#C9922A',
          'gold-light': '#E8B84B',
          'gold-dark': '#9B6E1A',
          coral: '#E05C3A',
          forest: '#1A6B4A',
          navy: '#1E3A5F',
          'navy-dark': '#0F2240',
        },
        // Keep some legacy keys used in case-preview sub-components
        obsidian: {
          950: '#05060A',
          900: '#080A0F',
          850: '#0C1018',
          800: '#0F131D',
          700: '#161B28',
          600: '#1E2638',
        },
        surface: {
          DEFAULT: '#0F131D',
          elevated: '#161B28',
          border: '#1E2638',
          subtle: '#263248',
          highlight: '#32405E',
        },
        brand: {
          cyan: '#38BDF8',
          blue: '#2563EB',
          amber: '#F59E0B',
          emerald: '#10B981',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px 0 rgba(120, 80, 20, 0.08)',
        'warm': '0 4px 20px 0 rgba(120, 80, 20, 0.10)',
        'warm-md': '0 8px 32px 0 rgba(120, 80, 20, 0.12)',
        'warm-lg': '0 16px 48px 0 rgba(120, 80, 20, 0.14)',
        'warm-xl': '0 24px 64px 0 rgba(120, 80, 20, 0.18)',
        'gold': '0 4px 24px 0 rgba(201, 146, 42, 0.30)',
        'gold-lg': '0 8px 40px 0 rgba(201, 146, 42, 0.40)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9922A 0%, #E8B84B 50%, #C9922A 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1E3A5F 0%, #0F2240 100%)',
        'warm-radial': 'radial-gradient(ellipse at 50% 0%, rgba(201,146,42,0.12) 0%, transparent 70%)',
        'warm-radial-bottom': 'radial-gradient(ellipse at 50% 100%, rgba(224,92,58,0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
