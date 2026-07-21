/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
       "dark-gray":"#111"
      },
      fontFamily : {
        roboto: ["Roboto", "sans-serif"],
        mono: ['Montserrat', 'monospace'],
        josefin: ['Josefin Sans', 'sans-serif'],
     },
     animation: {
      'fadeIn': 'fadeIn 500ms ease-in-out',
    },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
}