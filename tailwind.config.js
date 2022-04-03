const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },

    extend: {

      letterSpacing: {
        extreme: '0.75em'
      },

      screens: {
        'hi-dpi': {
          'raw': '(-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (min-resolution: 120dpi) and (min-width: 992px)'
        }
      },

      colors: {
        stone: colors.stone,
        rose: colors.rose,
        amber: colors.amber
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards"
      },

      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
