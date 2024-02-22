/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        "primary" : "#9E3DF2"
      },
      fontFamily: {
        montserret: ["Montserrat", "sans-serif"]
      },
      screens: {
        'tablet': '450px',   
        'laptop': '1000px',
        'desktop' : '1440px'
      },
    },
  },
  plugins: [],
}