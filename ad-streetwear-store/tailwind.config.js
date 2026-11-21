/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        obsidian: '#050505',
        charcoal: '#111111',
        crimson: {
          DEFAULT: '#9E0B16',
          bright: '#C8101E'
        }
      }
    }
  },
  plugins: []
};
