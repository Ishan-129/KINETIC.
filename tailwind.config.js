/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#05060A',
          900: '#080A0F',
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
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
