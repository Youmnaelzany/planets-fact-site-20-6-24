/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      "Antonio": ["Antonio", "sans-serif"],
      "Spartan": ["League Spartan", "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}