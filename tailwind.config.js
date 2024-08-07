module.exports = {
  purge: [
    './src/*.{html, js}',
    './index.html',
    './src/app.js'
    ],
    mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'urban': ["Urbanist"],
        'jakar': ["Plus Jakarta Sans"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
