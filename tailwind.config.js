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
        ag_red: {
          DEFAULT: "#E51431",
        },
        orange: {
          DEFAULT: "#E67C0A",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
