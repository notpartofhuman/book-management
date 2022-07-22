module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: '760px',
      md: '1366px',
      lg: '1920px',
      xl: '2400px',
    },
    colors:{
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
