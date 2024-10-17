/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Rubik","sans-serif"]
      },
      backgroundImage: {
        desk: "url(/pattern-bg-desktop.png)",
          mobile: "url(/pattern-bg-desktop.png)",
      }
    },
  },
  plugins: [],
}