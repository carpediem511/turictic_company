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
        'laptope-L': {'max': '1440px'},
        'laptope-M': {'max': '1280px'},
        'laptope-S': {'max': '1024px'},
        'tablet': {'max': '768px'},
        'mobile-L': {'max': '600px'},
        'mobile-M': {'max': '425px'},
        'mobile-S': {'max': '375px'},
        'mobile-XS': {'max': '320px'},
      },
    },
  },
  plugins: [],
}
