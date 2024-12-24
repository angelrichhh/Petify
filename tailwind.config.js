/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'green': '#166B68',
        'greentua': '#124C59',
        'greenhover': '#1C8985',
        'greentipis': '#588C7E',
        'greenabout': '#D1D9C1',
        'oren': '#D96459',
        'merah': '#CC2E1F'
      },

      fontFamily:{
        overpass:['Overpass'],
        montserrat_alt:['Montserrat Alternates'],
        open_sans: ['Open Sans']
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

