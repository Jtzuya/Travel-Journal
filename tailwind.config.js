/** 
 * @type {import('tailwindcss').Config} 
*/
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      disc: 'disc'
    },
    colors: {
      'react-blue-light': '#61DAFB',
      'react-blue-light-2': '#DEEBF8',
      'react-blue-dark': '#1C1C1C',
      'react-body': '#23252C',
      'card-light': '#1A1B21',
      'card-dark': '#161619',
      'highlight': '#F3BF99',
      'white': '#ffffff',
      'blue': 'blue',
      'eco': '#0db14b',
      'palegreen': 'palegreen'
    },
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
      'logo': ['"Montserrat"', 'monospace']
    },
    minHeight: {
      'custom': '459px'
    },
    extend: {},
  },
  plugins: [],
}