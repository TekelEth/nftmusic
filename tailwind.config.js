module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      DW: ["Druk Wide Cy Web Bold", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        section1: "url(/imgs/hero/section1.png)",
      },
    },
  },
  plugins: [],
};
