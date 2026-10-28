/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cafe: {
          dark: '#0c0a09', // stone-950
          roast: '#1c1917', // stone-900
          espresso: '#292524', // stone-800
          amber: '#d97706', // amber-600
          gold: '#f59e0b', // amber-500
          cream: '#fef3c7', // amber-100
          parchment: '#f5f5f4', // stone-100
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
