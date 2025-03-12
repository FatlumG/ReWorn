/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-primary": "#fafafa",
      "bg-secondary": "#1c2333",
      "bg-light": "#f8f8f8",

      "text-primary": "#1c2333",
      "text-secondary": "#374151",
      "text-secondary-light": "#6b7280",

      "green": "#21fa83",
      "red": "#fc566c",
      "dusky-green": "#06aa5e",
      "opac-white": "#ffffffcc",
      "darky": "#1d2b3a",
      "light-grey": "#696969",
    },
  },
  fontFamily: {},
  extend: {},
  plugins: [],
};
