/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        olive:"#808000",
        lavender: "#E6E6FA",
      }
    },
  },
  plugins: [],
}