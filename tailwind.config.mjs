/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Menlo"],
      },
      colors: {
        "nice-grey": "#0e0e11",
        aztec: {
          50: "#effefa",
          100: "#c8fff0",
          200: "#90ffe2",
          300: "#51f7d2",
          400: "#1de4be",
          500: "#05c7a6",
          600: "#00a188",
          700: "#05806e",
          800: "#0a6559",
          900: "#0e534b",
          950: "#002e2a",
        },
      },
    },
  },
  plugins: [],
};
