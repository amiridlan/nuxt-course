/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        // 60-30-10 Color Palette
        "primary-dark": "#1B211A",      // 60% - Main background
        "primary-green": "#8BAE66",     // 30% - Primary actions
        "accent-cream": "#EBD5AB",      // 10% - Accents
        
        // Legacy colors for compatibility
        "dodgeroll-gold": {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#EBD5AB",
          500: "#d4a574",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
        "apple-green": "#8BAE66",
        "dire-wolf": "#1B211A",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}