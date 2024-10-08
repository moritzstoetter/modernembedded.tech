/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primaryLight: "#b57614",
        primaryDark: "#fabd2f",
        secondaryLight: "#d65d0e",
        secondaryDark: "#fe8019",
        redDark: "#fb4934",
        redLight: "#cc241d",
        greenDark: "#79740e",
        greenLight: "#b8bb26",
        backgroundLight: "#fbf1c7",
        backgroundDark: "#282828",
        textLight: "#3c3836",
        textDark: "#ebdbb2",
      },
    },
  },
  plugins: [],
};
