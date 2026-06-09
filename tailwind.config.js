/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#080808', // Preto profundo
          secondary: '#111111', // Preto secundário
        },
        brown: {
          premium: '#4A2518',
          sophisticated: '#6D3C28',
        },
        light: {
          beige: '#F3ECE4', // Bege luxo
          cream: '#EFE7DE', // Creme premium
        },
        gold: {
          DEFAULT: '#C7A26A', // Dourado fosco
        }
      },
      fontFamily: {
        sans: ['Avenir Next Condensed', 'Avenir', 'Helvetica Neue', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
