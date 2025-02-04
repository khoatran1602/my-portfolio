/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Changed to simple class-based
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        col4: "repeat(1, minmax(200px, 1fr))",
      },
      colors: {
        color1: "var(--color1)",
        color2: "var(--color2)",
        color3: "var(--color3)",
        color4: "var(--color4)",
        color5: "var(--color5)",
        color6: "var(--color6)",
        color7: "var(--color7)",
      },
    },
  },
  plugins: [],
};
