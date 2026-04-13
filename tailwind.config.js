/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#034DA2',
        'primary-dark': '#023585',
        navy: '#231F20',
        dark: '#231F20',
        'deep-blue': '#034DA2',
        'mid-blue': '#034DA2',
        'pale-blue': '#A8C4E8',
        'ice-blue': '#EEF3FA',
        'brand-red': '#ED1B24',
        'brand-yellow': '#FDB813',
        'brand-green': '#00A650',
        'brand-purple': '#993F97',
        'brand-gray': '#6D6E72',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
