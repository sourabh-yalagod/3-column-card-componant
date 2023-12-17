/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/app/js/script.js","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Bright_orange: 'hsl(31, 77%, 52%)',
        Dark_cyan: 'hsl(184, 100%, 22%)',
        Very_dark_cyan: 'hsl(179, 100%, 13%)',
        Transparent_white_paragraphs: 'hsla(0, 0%, 100%, 0.75)',
        Very_light_gray_background_headings_buttons: 'hsl(0, 0%, 95%)',
      },
      fontFamily:{
        Lexend: "'Lexend Deca', sans-serif",
        sholder: "'Big Shoulders Display', sans-serif"
      }
    },
  },
  plugins: [],
}

