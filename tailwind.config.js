/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#06171F",
        paleyellow: "#FADA64",
        lightteal: "#34A8AC",
        navylight: "#0B2835",
      },
    },
  },
  plugins: [],
};

