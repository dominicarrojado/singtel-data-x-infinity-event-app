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
      sans: ['"Museo 500"', 'Helvetica', 'Arial', 'sans-serif'],
      avenir: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      myriadpro: ['"Myriad Pro"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'sky-350': 'rgba(71, 182, 224, 1)',
        'sky-375': 'rgba(59, 151, 179, 1)',
        'sky-450': 'rgba(39, 110, 142, 1)',
        'sky-475': 'rgba(28, 127, 165, 1)',
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
