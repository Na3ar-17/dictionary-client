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
      'primary-background': '#0b0c0d',
      'card-background': '#0B666A',
      'modal-background': '#3657ad',
      'dropdown-menu-bg': '#383b42',
      /* */
      icons: '#b2c5af',
      modals: '#222222',
      input: '#4a4a4a',
      /* */
      'bg-tower': '#454343',
    },
  },
  plugins: [require('tailwindcss-animate')],
}
