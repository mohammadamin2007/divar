/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/app.component.html"
  ],
  theme: {
    extend: {
      screens: {
        "zero":  "1px",
        "xsm": "320px",
        "mdsm-c": "450px",
        "mdsm": "480px",
        "lgsm": "520px",
        "sm-c": "576px",
        "md-c": "626px",
        "l-c": "960px",
        "l": "1024px",
        "xxl": "1366px",
        "xxxl": "1599px",
        "xxxxl": "1629px"
      }
    },
  },
  plugins: [],
}

