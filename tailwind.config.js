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
        mobile: "320px",

        mini: "375px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        min: ["8px", "1.1"],
      },
    },
  },
  plugins: [],
}
