/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    screens: {
      sm: "390px", // mobile
      md: "768px", // tablet
      lg: "1024px", // desktop / tablet landscape
      xl: "1440px", // desktop (1440)
      "2xl": "1920px", // wide desktop (1920)
    },
    extend: {},
  },
  plugins: [],
};
