/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
        fontFamily:{
          "dana-medium" : "dana-medium",
          "dana-bold" :"dana-bold",
          "dana-black": "dana-black"
        },
        colors:{
          "primary" : "#6A47E2"
        }
    },
    screens: {
      'sm': '576px',

      'md': '768px',

      'lg': '992px',

      'xl': '1140px',
    },
    container:{
      "center" : true ,
     }
  },
  plugins: [],
}

