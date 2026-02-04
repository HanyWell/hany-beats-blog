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
    extend: {
      colors: {
        // Tvoje pôvodné farby (ak nejaké máš definované)
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
