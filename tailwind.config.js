/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #4CAF4F",
        neutral1: "#4D4D4D",
        neutral2: "#717171",
        bg2: "#F5F7FA",
      },
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
  },
  plugins: [],
};
