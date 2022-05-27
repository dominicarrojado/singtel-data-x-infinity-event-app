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
        'gray-250': 'rgba(221, 221, 221, 1)',
        'gray-750': 'rgba(68, 68, 68, 1)',
        'red-550': 'rgba(233, 27, 61, 1)',
        'purple-75': 'rgba(248, 233, 245, 1)',
        'purple-450': 'rgba(170, 56, 149, 1)',
        'purple-550': 'rgba(151, 50, 132, 1)',
        'purple-650': 'rgba(132, 43, 115, 1)',
      },
      backgroundImage: {
        shimmer:
          'linear-gradient(to right, rgba(239, 241, 243, 1) 4%, rgba(226, 226, 226, 1) 25%, rgba(239, 241, 243, 1) 36%)',
      },
      keyframes: {
        expand: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-500px 0',
          },
          '100%': {
            'background-position': '500px 0',
          },
        },
      },
      animation: {
        expand: 'expand 1.4s infinite ease-in-out both',
        shimmer: 'shimmer 1s infinite linear forwards',
      },
    },
  },
  plugins: [],
};
