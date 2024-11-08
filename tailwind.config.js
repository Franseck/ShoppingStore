/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        loginTitle: ["Special Elite"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "light",
      "dark",
       ],
  },
};
