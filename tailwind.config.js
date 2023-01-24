/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        header_blue: {
          light: "#0071c2",
          DEFAULT: "#003680",
        },
        search_green: {
          DEFAULT: "#00800a",
        },
        ag_red: {
          DEFAULT: "#E51431",
        },
        orange: {
          DEFAULT: "#febb02",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
