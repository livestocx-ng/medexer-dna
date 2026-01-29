/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2A6F69',
          DEFAULT: '#1A5752', // Deep Green
          dark: '#123F3B',
          foreground: '#FCFAF5',
        },
        secondary: {
          light: '#FCFAF5',
          DEFAULT: '#F4F0E6', // Warm Cream (Buttons/Accents)
          dark: '#E6DFC9',
          foreground: '#1A5752',
        },
        surface: {
          DEFAULT: '#FCFAF5', // Light Cream Background
          dark: '#F4F0E6',
        },
        muted: {
          DEFAULT: '#8A9998',
          foreground: '#1A5752',
        },
        accent: {
          DEFAULT: '#D4C5A8', // Gold/Tan accent often used with Green
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Albra"', '"Playfair Display"', 'serif'], // Fallback to Playfair if Albra isn't available
      },
      borderRadius: {
        'pill': '500px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/hero-bg.svg')", // Placeholder if needed
      }
    },
  },
  plugins: [],
}
