import { walkUpBindingElementsAndPatterns } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#FFDDB8",
          bg2: "#E9BF8F",
          txt: "#2A1700"
        },
        dark: {
          bg: "#201a1b",
          bg2: "#181212",
          txt: "#ece0e0"
        }
      }
    },
  },
  plugins: [],
}
