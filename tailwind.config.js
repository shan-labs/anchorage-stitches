function hslaN(variableName, n, tokenName = undefined) {
  return Array.from({ length: n }, (_, index) => index + 1).reduce((stored, num) => {
    return { ...stored, [num]: `hsla(var(--${variableName}${num}), <alpha-value>)` }
  }, {})
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: hslaN("gray", 12),
        mauve: hslaN("mauve", 12),
        plum: hslaN("plum", 12),
        violet: hslaN("violet", 12),
        bluegray: hslaN("bluegray", 12),
      },
    },
  },
  plugins: [],
}
