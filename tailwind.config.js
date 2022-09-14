/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'black' : '#1B1A17',
      'white' : '#fafafa',
      'orangish' : '#fca311',
      'darkGray' : '#121212',
      'red' : '#e0383a',
      'gray': '#808080',
    },
    fontFamily : {
      manrope : ['Manrope','sans-serif'],
      kanit : ['Kanit', 'sans-serif'],
      cursive: ['Dancing Script', 'cursive'],
      rubik : ['Rubuk','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
