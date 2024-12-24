/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9e9e',
          400: '#ff6666',
          500: '#ff3333',
          600: '#ed1c1c',
          700: '#c41414',
          800: '#a31515',
          900: '#861818',
        },
        festive: {
          50: '#fff9e6',
          100: '#fff0bf',
          200: '#ffe180',
          300: '#ffd033',
          400: '#ffc20d',
          500: '#ffa800',
          600: '#cc7e00',
          700: '#a65c00',
          800: '#804400',
          900: '#663300',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};