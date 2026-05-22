/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.jsx",
    "./web_Davis.jsx",
    "./components/**/*.{jsx,tsx}",
    "./pages/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#3ECF8E',
          light: '#00C573',
          dark: '#10B981',
        },
        surface: {
          primary: '#0A0A0C',
          secondary: '#121216',
        },
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
