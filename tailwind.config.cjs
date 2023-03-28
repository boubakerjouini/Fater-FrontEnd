/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Hanken Grotesk"', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', blur: '30px' },
          '100%': { opacity: '1', blur: '0px' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      screens: {
        lg: '1164px',
      },
    },
  },
  plugins: [],
}
