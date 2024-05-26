/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      fontSize: {
        'sm': ['14px'],
        'lg': ['16px']
      },
      screens: {
        'sm': {'max': '700px'},
        'md': {'max': '870px'},
        'lg': {'max': '1024px'},
      },
     
    },
  },
  plugins: [],
}

