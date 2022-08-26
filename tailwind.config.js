/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        eyeprotect: '#C7EDCC',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
