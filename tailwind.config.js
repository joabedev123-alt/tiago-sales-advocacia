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
          DEFAULT: '#011155', // Fundo Principal
          secondary: '#081848', // Fundo Secundário
          alternate: '#13276E', // Sessões Alternadas
        },
        brown: {
          premium: '#6D6E9A', // Usado do gradiente
          sophisticated: '#F3C21A', // Alterado para Destaque (Dourado) para itálicos
        },
        light: {
          beige: '#EAEAEA', // Textos
          cream: '#B8C0D8', // Textos Secundários
        },
        gold: {
          DEFAULT: '#F3C21A', // Cor de Destaque / Títulos
          hover: '#FFD44A', // Hover de Botões
        }
      },
      backgroundImage: {
        'gradient-logo': 'linear-gradient(90deg, #011155 0%, #13276E 50%, #6D6E9A 100%)',
      },
      fontFamily: {
        sans: ['Avenir Next Condensed', 'Avenir', 'Helvetica Neue', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
