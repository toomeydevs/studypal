/**
 * Tailwind CSS Configuration File
 * Visit https://tailwindcss.com/docs/configuring-your-template-level
 */

module.exports = {
  mode: 'jit',  // Enable Just-in-Time mode
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#F9E2E6',
          blue: '#A7C3E0',
          yellow: '#F6F5E5',
          green: '#D4E3C4',
          purple: '#D9C7E8',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};