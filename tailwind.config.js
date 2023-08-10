/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/app.component.html"
  ],
  theme: {
    extend: {
      "xsm": "320px",
      "l": "1024px"
    },
  },
  plugins: [],
}

