// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Mobile-First Breakpoints
    screens: {
      'sm': '640px',   // Small tablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large Desktop
      '2xl': '1536px', // Extra Large Desktop
    },
    extend: {
      colors: {
        // Tvoje pôvodné farby (ak nejaké máš definované)
      },
      // Mobile-First Typography Scale
      fontSize: {
        // Mobile base sizes (default)
        'xs': ['0.75rem', { lineHeight: '1rem' }],       // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],      // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],       // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],  // 30px
        '4xl': ['2rem', { lineHeight: '2.5rem' }],       // 32px - mobile H1
        '5xl': ['2.5rem', { lineHeight: '1' }],          // 40px
        '6xl': ['3rem', { lineHeight: '1' }],            // 48px
        '7xl': ['3.5rem', { lineHeight: '1' }],          // 56px - desktop H1
        '8xl': ['4rem', { lineHeight: '1' }],            // 64px
        '9xl': ['5rem', { lineHeight: '1' }],            // 80px
      },
      // Touch-Friendly Spacing
      spacing: {
        'touch': '44px',  // Minimum touch target size
        'touch-lg': '48px',
        'touch-xl': '56px',
      },
      animation: {
        // Existujúce animácie
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',

        // PRIDANÉ - particle animácie
        'float-particle-1': 'floatParticle1 6s ease-in-out infinite',
        'float-particle-2': 'floatParticle2 7s ease-in-out infinite',
        'float-particle-3': 'floatParticle3 8s ease-in-out infinite',
      },
      keyframes: {
        // Existujúce keyframes
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // PRIDANÉ - particle movements
        floatParticle1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -20px)' },
          '50%': { transform: 'translate(-10px, -40px)' },
          '75%': { transform: 'translate(15px, -20px)' },
        },
        floatParticle2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-15px, 25px)' },
          '66%': { transform: 'translate(20px, -30px)' },
        },
        floatParticle3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 30px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
