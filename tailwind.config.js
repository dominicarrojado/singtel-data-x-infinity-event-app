const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '420px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['DIN', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-750': 'rgba(68, 68, 68, 1)',
        'red-550': 'rgba(233, 27, 61, 1)',
        'purple-75': 'rgba(248, 233, 245, 1)',
        'purple-450': 'rgba(170, 56, 149, 1)',
      },
    },
  },
  plugins: [],
};
