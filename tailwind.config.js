module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "600": "600px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
