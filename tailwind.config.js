/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main : '#FFCE23',
        Dark1: '#F6B012',
        Dark2: '#DA8A00',
        Dark3: '#B17E0F',
        active: '#111111',
        unactive: '#EAEDF1'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #FFCE23, #F6B012)',
      },
    },
  },
  plugins: [],
}

