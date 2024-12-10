/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'green': '#166B68',
        'greentua': '#124C59'
      },

      fontFamily:{
        overpass:['Overpass']
      },

      gap:{
        '13' : '54px'
      },

      letterSpacing:{
        'wide-9' :'9%'
      },
      spacing:{
        '13a':'13px',
        '4rem': '0.4rem'
      },
    },
  },
  plugins: [],
}