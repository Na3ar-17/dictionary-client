import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/colors.constants'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    colors: COLORS,

    extend: {},
  },
} satisfies Config

export default config
