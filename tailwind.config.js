/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        fira: ["'Fira Sans'", "sans-serif"],
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        blueHighlight: "#1E90FF",
        header: "#FFFFFF",
        DEFAULT: "#1C1C1C",
        lightBlue: "#00A8E8",
        rose: "#FF007C",
        vscode: {
          background: "#1E1E1E",
          header: "#2d2d2d",
          red: "#F14C4C",
          grey: "#6C6C6C",
          green: "#5BB85B",
          blueTag: "#508dbf",
          greyTag: "#7e7e7e",
        },
      },
    },
  },
  plugins: [],
};
