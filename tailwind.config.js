/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui', 'Helvetica','Inter'],
      'font1':['Helvetica'],
      'font2':['Inter', 'sans-serif'],
      'font3':['Miniver','cursive']
    },
    colors: {
      primary: '#195A00',
      secondary: '#e5e5e5',
      text1: '#333333',
      text2: '#4F4F4F',
      text3: '#828282',
      white: '#fff',
      black: '#000'
    },
    extend: {},
  },
  plugins: [],
}
