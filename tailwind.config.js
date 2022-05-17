module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['DIN', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'purple-75': 'rgba(248, 233, 245, 1)',
        'purple-450': 'rgba(170, 56, 149, 1)',
      },
    },
  },
  plugins: [],
};
