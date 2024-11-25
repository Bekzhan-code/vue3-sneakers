/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93c5fd',
          DEFAULT: '#3b82f6',
          dark: '#1e3a8a',
        },
        secondary: {
          light: '#fbcfe8',
          DEFAULT: '#ec4899',
          dark: '#9d174d',
        },
        neutral: {
          light: '#f3f4f6',
          DEFAULT: '#d1d5db',
          dark: '#4b5563',
        },
      },
    },
  },
  plugins: [],
}
