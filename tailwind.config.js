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
        'greencat': '#C1E180',
        'oren': '#D96459',
        'orenmuda': '#F2AE72',
        'merah': '#CC2E1F',
        'kuning': '#F2D785',
        'kuninggelap': '#E8C559',
        'bluereptile': '#96BDF8',
        'abuevent': '#ebebeb'
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

      borderRadius: {
        '4xl': '3rem', 
      },

      borderWidth: {
        '1/2': '1px'
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

