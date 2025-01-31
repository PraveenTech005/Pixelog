/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkback: "#0E1118",
        button: "#FE6E22",
      },
      fontFamily: {
        afacad: "Afacad",
        atkinson: "Atkinson",
        atkinsonB: "AtkinsonB",
        englebert: "Englebert",
      },
    },
  },
  plugins: [],
};
