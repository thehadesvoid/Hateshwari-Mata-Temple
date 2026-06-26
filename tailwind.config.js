/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        beige: '#E8DFD0',
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
        'gold-dark': '#A07830',
        brown: '#2C1810',
        'brown-light': '#4A2C1A',
        'brown-mid': '#6B3F2A',
        parchment: '#FAF7F2',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #A07830 100%)',
      },
    },
  },
  plugins: [],
}
