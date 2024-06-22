/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        'without-navbar': 'calc(100vh - 64px)'
      }
    },
  },
  plugins: [],
}