/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        // gray: "#898a8d",
        // subtle: "#efefef",
        black: "#20222b",
        darkGrey: "#AFCBB5",
        green: "#8ec645",
        // lightYellow: "rgba(255, 171, 46, 0.2)",
        // lightGreen: "rgba(22, 192, 152, 0.2)",
        lightGrey: "#e9eef0",
        darkBlue: "#162df2",
        thickLightBlue: "#5CA3E2",
        // fairyGreen: "rgba(0, 140, 54, 0.06)",
      },
      fontFamily: {
        heading: ["Montserrat"],
      },
      screens: {
        sm: "600px",
        // => @media (min-width: 576px) { ... }

        md: "601px",
        // => @media (min-width: 960px) { ... }

        lg: "1240px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
