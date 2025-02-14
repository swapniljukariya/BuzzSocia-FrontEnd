/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
