/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        'primary-dark': '#1E3A8A',
        navy: '#0F172A',
        'deep-blue': '#1E3A8A',
        'mid-blue': '#3B82F6',
        'pale-blue': '#BFDBFE',
        'ice-blue': '#EFF6FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
