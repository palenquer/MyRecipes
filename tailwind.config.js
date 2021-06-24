module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'title': ['Pacifico', 'cursive']
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
     },
  },
  plugins: [],
}
