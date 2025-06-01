/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Steampunk palette
        brass: '#CD7F32',
        copper: '#B87333',
        
        // Modern color scheme (kept for gradual migration)
        primary: '#2C3E50',       // Deep navy
        secondary: '#E67E22',     // Warm copper/orange
        accent: '#9B59B6',        // Steampunk purple
        light: '#ECF0F1',         // Light gray
        dark: '#2C3E50',          // Text color
        highlight: '#D35400',     // For CTAs
        
        // Legacy colors (for gradual migration)
        'parchment': '#F8F5F0',
        'navy': '#1A2634',
        'brass-gold': '#D4B483',
        'muted-teal': '#6DC6C4',
      },
      fontFamily: {
        head: ['Rye', 'Georgia', 'serif'],
        body: ['Scope One', 'Georgia', 'serif'],
        'sans': ['Inter var', 'system-ui', 'sans-serif'],
        'slab': ['Roboto Slab', 'serif'],
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