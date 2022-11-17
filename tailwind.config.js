/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        header: "#252526",
        white: "#FFFFFF",
        lightBlue: "#00A8E8",
        rose: "#FF007C",
      },
    },
  },
  plugins: [],
};
