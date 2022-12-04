const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx,js,jsx}'),
    join(__dirname, 'components/**/*.{ts,tsx,js,jsx}'),
    join(__dirname, 'templates/**/*.{ts,tsx,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        play: ['Play', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      primary: {
        100: '#fde8ef',
        200: '#f8b9ce',
        300: '#f38bae',
        400: '#ef5d8e',
        500: '#ea2e6d',
        600: '#d11554',
        700: '#a21041',
        800: '#740c2f',
        900: '#46071c',
      },
      gray: {
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#222222',
        900: '#1b1b1b',
      },
    },
  },
};
