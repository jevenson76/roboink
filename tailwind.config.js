/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // PRD Specified Colors
        'parchment': '#F8F5F0',
        'navy': '#1A2634',
        // Subtle Accent Colors
        'brass-gold': '#D4B483',
        'copper': '#E7A977',
        'muted-teal': '#6DC6C4',
      },
      fontFamily: {
        'slab': ['Roboto Slab', 'serif'],
        'sans': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gear': '0 4px 6px -1px rgba(184, 115, 51, 0.3), 0 2px 4px -1px rgba(184, 115, 51, 0.2)',
      },
      animation: {
        'gearSpin': 'spin 8s linear infinite',
        'steamPulse': 'steam 3s ease-in-out infinite',
        'softFloat': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};