/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kangwon-light": ["kangwon-light", "sans-serif"],
        "kangwon-bold": ["kangwon-bold", "sans-serif"],
      },
      colors: {
        pink1: "#FCE2DB",
        purple1: "#B270A2",
        purple2: "#7A4495",
      },
    },
  },
  plugins: [],
};
