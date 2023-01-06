module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        accent: "Cocotte, sans-serif",
        main: "Roboto, sans-serif",
      },
      colors: {
        yellow: "#FFC700",
      },
      screens: {

        "laptope": { max: "1024px" },
        "tablet": { max: "768px" },
        "mobile": { max: "375px" },
    
      },
      fontSize: {
        mini: ["10px", "1.2"],
        min: ["7px", "0.8"],
      },
    },
  },
  plugins: [],
}
