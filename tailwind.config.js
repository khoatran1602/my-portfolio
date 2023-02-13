/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
  colors: {
    color1: "#ee7344",
    /* Container background color */
    color2: "#e8ded2",
    /* Body background color */
    color3: "#776d8a",
    /* Color of title */
    color4: "#2b2c48",
    /* Default font color */
    color5: "#212241",
    /* Page underline color */
    color6: "#1d9bf0",
    /* Hover background color */
    color7: "#0f1419",
  },
};
