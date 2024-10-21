/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep_dark_blue: '#24043e',
        grey_color: 'rgb(195, 190, 190)'
      },
      boxShadow: {
        base: '0px 3px 15px 2px rgb(195, 190, 190)'
      }
    },
  },
  plugins: [],
}

