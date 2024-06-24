/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shapes-tertiary": "#5C3F32",
        "overlay-2": "rgba(0,0,0,0.2)",
        "shapes-grey-3": "#F4F4F4",
        "shapes-grey-4": "#EAEAEA",
        "font-green": "#23B231",
      },
    },
  },
  plugins: [],
};
