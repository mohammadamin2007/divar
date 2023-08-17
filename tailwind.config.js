/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/app.component.html"
  ],
  theme: {
    extend: {
      screens: {
        "xsm": "320px",
        "l": "1024px",
        "xxl": "1366px"
      }
    },
  },
  plugins: [],
}

