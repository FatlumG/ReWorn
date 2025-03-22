/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-primary": "#fafafa",
      "bg-secondary": "#1c2333",
      "bg-light": "#f8f8f8",

      "primary": "#1c2333",
      "secondary": "#374151",
      "secondary-light": "#6b7280",
      "navy": "#263A43",

      "white": "#fff",
      "light-blue": "#8ecae6 ",
      "blue": "#0A2FB6",
      "gray": "#8E8E8E",
      // "dusky-green": "#06aa5e",
      // "opac-white": "#ffffffcc",
      // "darky": "#1d2b3a",
      // "light-grey": "#696969",
    },
  },
  fontFamily: {},
  extend: {},
  plugins: [],
};
