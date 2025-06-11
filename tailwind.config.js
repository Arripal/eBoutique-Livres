/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        greenLight: "#8BC7B1",
      },
      backgroundColor: {
        beigeLight: "#FFF4E8",
        greenLight: "#8BC7B1",
        test: "#C5A073",
      },
      outlineColor: {
        photo: "#C5A073",
      },
      height: {
        dvhAlmostFull: "80dvh",
      },
    },
  },
  plugins: [],
};
