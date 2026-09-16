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
        studio: {
          bg: '#F5F2EB',
          'bg-alt': '#EDE8DC',
          ink: '#050817',
          gold: '#D5A329',
          'gold-light': '#E8BE5A',
          acid: '#C7FF3D',
          muted: '#5A6072',
          border: '#D8D1C2',
          'border-dark': '#1F2438',
        },
        ivory: {
          50: '#F5F2EB',
          100: '#EFEAE0',
          200: '#E5DFC0',
        },
        sand: {
          300: '#DCD4C4',
          400: '#C5BBA7',
          500: '#9E937D',
        },
        accent: {
          gold: '#D5A329',
          'gold-light': '#E8BE5A',
          'gold-dark': '#A67B18',
          acid: '#C7FF3D',
          coral: '#E05C3A',
          forest: '#1A6B4A',
          navy: '#050817',
          'navy-dark': '#03050F',
        },
        // Legacy keys preserved for sub-components
        obsidian: {
          950: '#050817',
          900: '#090D22',
          850: '#0E132D',
          800: '#141A3B',
          700: '#1D244D',
          600: '#2A3366',
        },
        surface: {
          DEFAULT: '#050817',
          elevated: '#0E132D',
          border: '#1F2438',
          subtle: '#2A3366',
          highlight: '#3B4785',
        },
        brand: {
          cyan: '#38BDF8',
          blue: '#2563EB',
          amber: '#D5A329',
          emerald: '#10B981',
          purple: '#8B5CF6',
          acid: '#C7FF3D',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'studio-sm': '0 2px 0 0 #050817',
        'studio-md': '4px 4px 0 0 #050817',
        'studio-lg': '8px 8px 0 0 #050817',
        'gold-glow': '0 0 30px rgba(213, 163, 41, 0.25)',
        'acid-glow': '0 0 30px rgba(199, 255, 61, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeRev 30s linear infinite',
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
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
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
