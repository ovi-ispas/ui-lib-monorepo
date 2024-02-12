import uiLib from '../../packages/ui-lib/tailwind.config.js'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [uiLib],
  content: [
    '../../packages/ui-lib/lib/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
