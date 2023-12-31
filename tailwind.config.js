module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#5cb85c",
        secondary: "#ced4da",
        third: "#ced4da",
        instagram: "#E4405F",
        wa: "#25D366",
        spotify: "#1DB954",
        X: "#000000",
        dark: "#000000",
        html: "#E34F26",
        css: "#1572B6",
        bootstrap: "#7952B3",
        tailwind: "#06B6D4",
        kuning: "#F7DF1E",
        sun: "#fff35f",
        moon: "#91A3B0",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};

//..
