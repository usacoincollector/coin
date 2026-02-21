/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5f4f1',
        surface: '#ffffff',
        ink: '#1f2937',
        line: '#d1d5db',
        accent: '#374151'
      }
    }
  },
  plugins: []
};
