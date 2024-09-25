const { Pacifico } = require('next/font/google')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Pacifico:["Pacifico", "cursive"]
      }
    },
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       maroon: '#800000',
  //       gold: '#FFD700',
  //       teal: '#008080',
  //       'light-blue': '#ADD8E6',
  //       'dark-gray': '#333333',
  //       'light-gray': '#F0F0F0',
  //     },
  //   },
  // },
  plugins: [],
};
