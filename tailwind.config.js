/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heartBeat: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.3)" },
          "40%": { transform: "scale(1)" },
          "60%": { transform: "scale(1.3)" },
          "80%": { transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        heartBeat: "heartBeat 1s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
