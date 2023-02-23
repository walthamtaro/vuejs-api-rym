/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primario: '#dd1367',
        secundario: '#19323C',
        terciario: '#689689',
        contraste01: '#FF9505',
        contraste02:'#00F6ED',
      },
      fontFamily:{
        'rm':['Mynerve'],
      },
    },
  },
  plugins: [],
}
