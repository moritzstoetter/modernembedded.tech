/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primaryLight: "#FE8018",
        primaryDark: "#FE8018",
        secondaryLight: "#fabd2f",
        secondaryDark: "#fabd2f",
        redDark: "#fb4934",
        redLight: "#cc241d",
        greenDark: "#79740e",
        greenLight: "#b8bb26",
        backgroundLight: "#EFEDEA",
        backgroundDark: "#3C3836",
        backgroundDarker: "#282828",
        textLight: "#3c3836",
        textDark: "#F9F5D7",
      },
    },
  },
  plugins: [],
};
