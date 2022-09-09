/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { sm: { max: "639px" } },
      colors: {
        "primary-red-color": "var(--primary-red-color)",
        "primary-white-color": "var(--primary-white-color)",
        "primary-black-color": "var(--primary-black-color)",
      },
      rotate: {
        348: "348deg",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      minHeight: {
        4: "500px",
        60: "240px",
        12: "48px",
      },
      borderRadius: {
        50: "50%",
      },
      width: {
        140: "560px",
      },
    },
  },
  plugins: [],
};
