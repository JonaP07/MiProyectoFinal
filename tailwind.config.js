/** @type {import('tailwindcss').Config} */
module.exports = {
  //Tailwind debe buscar clases CSS en archivos HTML y TypeScript
  // dentro de las carpetas src, pages y components.
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html.ts}",
    ".components/**/*.{html.ts}",

  ],  theme: {
    extend: {
      colors:{
        primary: "#f00",
        secondary: "#1E293B",
        accent: "#CB5930",
        danger: "#f00",
      }
    },
  },
  plugins: [],
}

