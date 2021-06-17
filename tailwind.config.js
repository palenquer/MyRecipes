module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'title': ['Viaoda Libre', 'cursive']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
