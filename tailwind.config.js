/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'hsl(233, 26%, 24%)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))',
      },
  },
  plugins: [],
}
}