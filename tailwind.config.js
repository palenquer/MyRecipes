module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      'modal': '600px'
     },
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
