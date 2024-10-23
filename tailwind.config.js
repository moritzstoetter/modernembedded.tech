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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.textLight"),
            a: {
              color: theme("colors.primaryLight"),
              "&:hover": {
                color: theme("colors.secondaryLight"),
              },
            },
            h1: { color: theme("colors.textLight") },
            h2: { color: theme("colors.textLight") },
            h3: { color: theme("colors.textLight") },
            strong: { color: theme("colors.textLight") },
          },
        },
        dark: {
          css: {
            color: theme("colors.textDark"),
            a: {
              color: theme("colors.primaryDark"),
              "&:hover": {
                color: theme("colors.secondaryDark"),
              },
            },
            h1: { color: theme("colors.textDark") },
            h2: { color: theme("colors.textDark") },
            h3: { color: theme("colors.textDark") },
            strong: { color: theme("colors.textDark") },
            blockquote: {
              color: theme("colors.textDark"),
              borderLeftColor: theme("colors.primaryDark"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
