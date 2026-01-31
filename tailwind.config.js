/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fire-pulse': 'fire-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'fire-pulse': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.5',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
