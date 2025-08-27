/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        'dark-mode-element': 'hsl(209, 23%, 22%)',
        'dark-mode-background': 'hsl(207, 26%, 17%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'light-mode-input': 'hsl(0, 0%, 50%)',
        'light-mode-background': 'hsl(0, 0%, 99%)',
        'white': 'hsl(0, 100%, 100%)',
      },
    },
  },
  plugins: [],
}

