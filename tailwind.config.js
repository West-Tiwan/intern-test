/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a3b5a3',
          400: '#7d957d',
          500: '#5f7a5f',
          600: '#4a614a',
          700: '#3d4f3d',
          800: '#334133',
          900: '#2b372b',
        },
        accent: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9b8',
          300: '#f7c088',
          400: '#f29e56',
          500: '#ee7f32',
          600: '#df6421',
          700: '#b94e1c',
          800: '#94411e',
          900: '#78381b',
        },
        calming: {
          50: '#f0f7ff',
          100: '#e0edfe',
          200: '#baddfc',
          300: '#7dc1f9',
          400: '#38a2f4',
          500: '#0e87e6',
          600: '#026bc4',
          700: '#03559f',
          800: '#084983',
          900: '#0d3d6d',
        },
        warm: {
          50: '#fdf4f3',
          100: '#fce7e6',
          200: '#f9d4d2',
          300: '#f4b5b1',
          400: '#ec8b85',
          500: '#e06660',
          600: '#cc4a42',
          700: '#ab3c35',
          800: '#8e3530',
          900: '#77322e',
        }
      }
    },
  },
  plugins: [],
}
