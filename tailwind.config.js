/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#0DD983',
        gold: '#FFA800',
        red: '#FF1818',
        lightGreen: '#39FF18',
        yellow: '#FFE818',
        gray: '#B7B7B7',
        bgGray: '#F5F5F5',
      },
    },
  },
  plugins: [],
};
