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
      spacing: {
        '75': '296px',
        '200': '200px',
        '520': '520px',
        '696': '696px',
      },
      fontSize: {
        '4xl': '40px',
      },
      lineHeight: {
        '27': '27px',
        '60': '60px',
      },
    },
  },
  plugins: [],
}

