/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        slide:{
          '0%':{transform: 'translateX(-200%) scale(0.7)',opacity:'0'},
          '50%':{opacity:'1'},
          '100%':{transform: 'translateX(75vw) scale(0.7)', opacity: '0'}
        }
      },
    },
    screens: {
      //DEFAULT DESKTOP FIRST

      'laptop': {'max' : '1224px'},
      // => @media (max-width: 1224px) { ... }

      'tablet': {'max' : '768px'},
      // => @media (max-width: 1024px) { ... }

      'phone':{'max' : '425px'},
      //=>@media(max-width: 300px)
    }
  },
  plugins: [],
}
