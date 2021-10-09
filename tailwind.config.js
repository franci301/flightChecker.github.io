module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'MainPageBackground' : "url('/public/img/backgroundImage.png')"
      },
      colors: {
        cGray: '#DCD9F3',
        cGrayHover: "DCE9F3",
        cCyan: '#ACEBEC',
        cPurple: '#A10A82',
        cBlue: '#0B134C'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
