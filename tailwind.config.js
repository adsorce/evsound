/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#2badb4',
          cyan: '#5fffe2',
          dark: '#0f172a',
          green: '#79b740', // Green Shield Certified Green
          deepGreen: '#3c7f30'
        }
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'ripple': 'ripple 1.5s ease-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.05)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.05)' },
          '60%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '40%': { transform: 'scale(5)', opacity: '0' },
          '100%': { transform: 'scale(12)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
