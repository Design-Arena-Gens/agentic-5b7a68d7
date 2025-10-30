/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf6f2",
          100: "#fce9de",
          200: "#f7cdb4",
          300: "#f2b08a",
          400: "#ec935f",
          500: "#e67734",
          600: "#c7601f",
          700: "#964817",
          800: "#66310e",
          900: "#361a06"
        },
        accent: {
          50: "#f1f9ff",
          100: "#dceeff",
          200: "#b5dcff",
          300: "#8cc8ff",
          400: "#63b4ff",
          500: "#3ca0ff",
          600: "#1e80e6",
          700: "#1564b4",
          800: "#0d497f",
          900: "#052e4a"
        }
      },
      boxShadow: {
        glow: "0 20px 60px rgba(230, 119, 52, 0.2)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
