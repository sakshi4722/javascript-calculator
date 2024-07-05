/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '6px 6px 10px rgb( 0, 0, 139)'
      }
    }
  },
  plugins: [],
}
