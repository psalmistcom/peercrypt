/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e6f4fc",

          700: "#0F0C1A",
          800: "#130c15",
          900: "rgb(14 12 21)",
        },
      },
    },
  },
  plugins: [],
};
