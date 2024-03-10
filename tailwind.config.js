/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#060505",
        gainsboro: "#d9d9d9",
        black: "#000",
        whitesmoke: "#f3f3f3",
      },
      spacing: {},
      fontFamily: {
        b03: "04b03",
      },
    },
    fontSize: {
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "77xl": "96px",
      "10xl": "29px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
