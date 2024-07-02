/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-preparing",
    "bg-shipping",
    "bg-cancelled",
    "bg-delivered",
    "text-font-preparing",
    "text-font-shipping",
    "text-font-cancelled",
    "text-font-delivered",
  ],
  theme: {
    extend: {
      colors: {
        "shapes-tertiary": "#5C3F32",
        "overlay-2": "rgba(0,0,0,0.2)",
        "shapes-grey-3": "#F4F4F4",
        "shapes-grey-4": "#EAEAEA",
        "font-green": "#23B231",
        shipping: "#98FEA2",
        delivered: "#D8D8D8",
        cancelled: "#FFC9C9",
        preparing: "#FFD18B",
        "font-shipping": "#23B231",
        "font-delivered": "#888888",
        "font-cancelled": "#FE5656",
        "font-preparing": "#CD8210",
      },
    },
  },
  plugins: [],
};
