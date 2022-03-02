module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
