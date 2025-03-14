// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',  // Indigo
        'secondary': '#60A5FA',  // Sky blue
        'accent': '#FBBF24',  // Amber
        'light-bg': '#F3F4F6',  // Light gray background
        'dark-text': '#1F2937',  // Dark text for high contrast
      },
    },
  },
}
