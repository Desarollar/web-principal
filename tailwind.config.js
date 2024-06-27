/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maskImage: {
        'gradient-black-transparent': 'linear-gradient(black 80%, transparent)',
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient-black-transparent': {
          maskImage: 'linear-gradient(black 70%, transparent 80%)',
        },
        '.mask-gradient-right': {
          maskImage: 'linear-gradient(to left, black 80%, transparent 100%)',
        },
      })
    },

  ],
}

