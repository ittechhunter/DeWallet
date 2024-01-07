/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px",
      },
      colors: {
        primary: "#007AFF",
        background: "#CECECE",
      },
      fontSize: {
        "main-size": "1.065rem",
      },
      boxShadow: {
        tab: "0px 3px 1px 0px #0000000A,0px 3px 8px 0px #0000001F",
      },
      fontFamily: {
        SFMedium: ["San Francisco Medium"],
      },
    },
  },
  plugins: [],
};
