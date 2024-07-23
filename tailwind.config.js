/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      'navy':'#06171F',
      'pale-yellow':'#FADA64',
      'light-teal':'#34A8AC',
      'navy-2':'#0B2835',
    },
    extend: {},
  },
  plugins: [],
}

