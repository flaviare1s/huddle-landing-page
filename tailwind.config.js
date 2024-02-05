/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violet: 'hsl(257, 40%, 49%)',
        softMagenta: 'hsl(300, 69%, 71%)',
      },
    },
  },
  plugins: [],
}

