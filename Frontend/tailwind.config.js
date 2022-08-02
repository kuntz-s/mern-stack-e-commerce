/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#22d3ee",
      amber: colors.amber,
      emerald: colors.emerald,
      gray: colors.gray,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      white: "#ffffff",
      black: "#000000"
    },
    extend: {
      zIndex: {
        '100': '100',
        '1000': '1000',
      },
      scale: {
        '60': '0.60',
      }
    },
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
    },
    backgroundImage: {
      'loginBackground': "url('./assets/s.jpg')"
    }
  },
  plugins: [],
};
