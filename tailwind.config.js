/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Kinetic-Dark background layers ── */
        'kd-bg':    '#080B12',
        'kd-bg-1':  '#0D1117',
        'kd-bg-2':  '#13181F',
        'kd-bg-3':  '#1A2030',

        /* ── Ink / text ── */
        'kd-ink':   '#ECEEF2',
        'kd-ink-2': '#8A92A6',
        'kd-ink-3': '#525C71',

        /* ── Accents ── */
        'kd-acid':  '#C7FF3D',
        'kd-coral': '#FF4F3B',
        'kd-blue':  '#3B8EFF',

        /* ── Legacy studio aliases (maps old tokens to new dark palette) ── */
        studio: {
          bg:           '#080B12',  // was cream — now near-black
          'bg-alt':     '#0D1117',
          ink:          '#ECEEF2',  // was dark navy — now off-white
          gold:         '#C7FF3D',  // was amber gold — now acid green (brand accent)
          'gold-light': '#E0FF7A',
          acid:         '#C7FF3D',
          muted:        '#8A92A6',
          border:       'rgba(255,255,255,0.07)',
          'border-dark':'rgba(199,255,61,0.25)',
        },

        /* ── Other legacy keys (preserved for sub-components) ── */
        ivory: {
          50:  '#080B12',   // mapped to dark
          100: '#0D1117',
          200: '#13181F',
        },
        sand: {
          300: '#1A2030',
          400: '#525C71',
          500: '#8A92A6',
        },
        accent: {
          gold:       '#C7FF3D',  // promoted to acid
          'gold-light':'#E0FF7A',
          'gold-dark': '#A3D42D',
          acid:       '#C7FF3D',
          coral:      '#FF4F3B',
          forest:     '#1A6B4A',
          navy:       '#080B12',
          'navy-dark':'#050810',
        },
        obsidian: {
          950: '#080B12',
          900: '#0D1117',
          850: '#13181F',
          800: '#1A2030',
          700: '#232B40',
          600: '#2E3850',
        },
        surface: {
          DEFAULT:   '#080B12',
          elevated:  '#0D1117',
          border:    'rgba(255,255,255,0.07)',
          subtle:    '#1A2030',
          highlight: '#232B40',
        },
        brand: {
          cyan:    '#3B8EFF',
          blue:    '#2A68C4',
          amber:   '#C7FF3D',
          emerald: '#10B981',
          purple:  '#8B5CF6',
          acid:    '#C7FF3D',
        },
        background: 'var(--c-bg)',
      },

      fontFamily: {
        /* New Kinetic-Dark type system */
        display: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        body:    ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Menlo', 'monospace'],

        /* Legacy aliases */
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        /* Legacy studio shadows — dark style */
        'studio-sm':  '0 2px 0 0 rgba(199,255,61,0.15)',
        'studio-md':  '0 4px 0 0 rgba(199,255,61,0.12)',
        'studio-lg':  '0 8px 0 0 rgba(199,255,61,0.08)',

        /* Kinetic-Dark glow system */
        'acid-glow':       '0 0 0 1px rgba(199,255,61,0.30), 0 0 24px rgba(199,255,61,0.15), 0 0 48px rgba(199,255,61,0.06)',
        'acid-glow-md':    '0 0 0 1px rgba(199,255,61,0.45), 0 0 40px rgba(199,255,61,0.25)',
        'acid-glow-lg':    '0 0 0 2px rgba(199,255,61,0.55), 0 0 60px rgba(199,255,61,0.30)',
        'coral-glow':      '0 0 0 1px rgba(255,79,59,0.30), 0 0 24px rgba(255,79,59,0.15)',
        'blue-glow':       '0 0 0 1px rgba(59,142,255,0.30), 0 0 24px rgba(59,142,255,0.15)',
        'panel':           '0 8px 32px rgba(0,0,0,0.5)',
        'panel-elevated':  '0 16px 48px rgba(0,0,0,0.6)',

        /* Legacy kept for compatibility */
        'gold-glow':       '0 0 30px rgba(199, 255, 61, 0.25)',
      },

      animation: {
        'pulse-subtle':    'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':         'fadeIn 0.5s ease-out forwards',
        'fade-up':         'fadeUp 0.6s ease-out forwards',
        'slide-up':        'slideUp 0.6s ease-out forwards',
        'scale-in':        'scaleIn 0.4s ease-out forwards',
        'shimmer':         'shimmer 2s linear infinite',
        'marquee-slow':    'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeRev 30s linear infinite',
        'acid-flicker':    'acidFlicker 4s ease-in-out infinite',
        'glow-pulse':      'acidPulseGlow 3s ease-in-out infinite',
        'clip-wipe':       'clipWipeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },

      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

      backgroundImage: {
        'acid-gradient':   'linear-gradient(135deg, #A3D42D 0%, #C7FF3D 50%, #A3D42D 100%)',
        'dark-radial':     'radial-gradient(ellipse at 50% 0%, rgba(199,255,61,0.08) 0%, transparent 70%)',
        'dark-radial-bottom': 'radial-gradient(ellipse at 50% 100%, rgba(255,79,59,0.06) 0%, transparent 70%)',
        'panel-gradient':  'linear-gradient(180deg, rgba(13,17,23,0.9) 0%, rgba(8,11,18,0.95) 100%)',
      },
    },
  },
  plugins: [],
}
