import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeistVariable", ...fontFamily.sans],
        mono: ["GeistMonoVariable", ...fontFamily.mono],
      },
      colors: {
        bg: {
          primary: "#0a0a0a",
          secondary: "#141414",
        },
        border: "#262626",
        text: {
          primary: "#e5e5e5",
          secondary: "#a0a0a0",
          tertiary: "#6b7280",
        },
        accent: "#5eead4",
      },
    },
  },
  plugins: [],
};
