/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    extend: {
      colors: {  
        primary: '#0072BC',
        secondary: '#f58120',
        axis_primary: '#97144d',
        axis_secondary: 'fff'
      },
    },
  },
  plugins: [],
}