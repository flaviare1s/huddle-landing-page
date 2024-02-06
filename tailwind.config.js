/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violet: 'hsl(257, 40%, 49%)',
        softMagenta: 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mobile': "url('../images/bg-mobile.svg')",
        'desktop': "url('../images/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
}

