/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "shapes-tertiary": "#5C3F32" },
    },
  },
  plugins: [],
};
