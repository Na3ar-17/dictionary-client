/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'accordion-up': {
          from: { opacity: '1' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease',
        'accordion-up': 'accordion-up 0.2s ease',
      },
    },
    colors: {
      text: '#fff',
      background: '#092635',
      'background-2': '#9EC8B9',
      'dark-green': '#1B4242',
      sage: '#5C8374',
    },
  },
  plugins: [require('tailwindcss-animate')],
}
