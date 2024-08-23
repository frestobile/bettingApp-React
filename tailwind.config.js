/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        indieflower: ['IndieFlower', 'san-serif'],
        aldrich: ['Aldrich', 'sans-serif'],
        objektivmk1_bold: ['Objektiv Mk1 Trial', 'sans-serif'],
        eigerdals: ['Eigerdals', 'sans-serif'],
        objektivmk1: ['Objektiv Mk1 Trial Rg', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif']
      },
      screens: {
        ios: '320px',
        samsungS8: '360px',
        xs: '390px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1960px'
      }
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 3px 5px 0 rgba(0, 0, 0, 0.4)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      button: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      button_black: '0 8px 12px -4px rgba(0, 0, 0, 0.5), 0 3px 5px -2px rgba(0, 0, 0, 0.3)',
      button_white:
        '0 4px 6px -1px rgba(255, 255, 255, 0.2), 0 2px 4px -1px rgba(255, 255, 255, 0.1)'
    }
  },
  variants: {
    extend: {
      display: ['dark']
    }
  },
  darkMode: ['class'],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
    // ...
  ]
};
