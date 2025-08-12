/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // for components/pages in src
    './app/**/*.{js,ts,jsx,tsx}', // for app router
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // optional custom font
      },
    },
  },
  plugins: [],
}
