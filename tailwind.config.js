/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5648d9',
          light: '#bbaaf0',
          dark: '#241d35',
        },
        secondary: '#96929f',
        dark: {
          DEFAULT: '#141313',
          100: '#292828',
          200: '#403f3f',
          300: '#585858',
          400: '#727171',
          500: '#8c8c8c',
        },
        tonal: {
          DEFAULT: '#241d35',
          100: '#393249',
          200: '#4f485d',
          300: '#666073',
          400: '#7e7889',
          500: '#96929f',
        }
      },
    },
  },
  plugins: [],
}
