/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // RoadmapX signature palette — deep circuit navy + violet/cyan gradient + amber signal
        ink: {
          950: '#070912',
          900: '#0B0F1A',
          800: '#111726',
          700: '#181F33',
          600: '#232C46',
        },
        violet: {
          400: '#8B7CFC',
          500: '#6D5DFB',
          600: '#5A47E8',
        },
        cyan: {
          400: '#4FE3F5',
          500: '#22D3EE',
        },
        amber: {
          400: '#FFC773',
          500: '#FFB454',
        },
        mint: {
          400: '#5EE8B5',
          500: '#34D399',
        },
        mist: {
          50: '#F7F8FC',
          100: '#EEF0F9',
          200: '#DDE1F0',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #6D5DFB 0%, #22D3EE 100%)',
        'grad-warm': 'linear-gradient(135deg, #FFB454 0%, #FF7A6E 100%)',
        'grad-mesh': 'radial-gradient(at 20% 20%, rgba(109,93,251,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(34,211,238,0.25) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(255,180,84,0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(9, 12, 24, 0.35)',
        glow: '0 0 40px rgba(109, 93, 251, 0.35)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.3)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'dash': 'dash 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, filter: 'blur(20px)' },
          '50%': { opacity: 1, filter: 'blur(28px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
    },
  },
  plugins: [],
}
