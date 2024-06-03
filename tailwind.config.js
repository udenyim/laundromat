/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#ec4899",
        dark: "#262d35",
        secondary: "#f16b86",
        backdrop: "#f7faff",
        yell: "#f9b940",
      }
    },
  },
  plugins: [],
}