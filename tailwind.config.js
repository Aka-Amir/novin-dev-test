/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#D3A550",
        "theme-primary-lighten": "#edbc61",
        "theme-primary-darken": "#947337",
        "theme-secondary": "#D01110",
        "theme-black": "#121110",
        "theme-light": "#EBE7D0",
      },
      boxShadow: {
        right: "10px 5px 30px 2px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
