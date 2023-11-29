/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
          "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
          "scale-in-center": {
              "0%": {
                  transform: "scale(0)",
                  opacity: "1"
              },
              to: {
                  transform: "scale(1)",
                  opacity: "1"
              }
          }
      }
    },
  },
  plugins: [],
}
