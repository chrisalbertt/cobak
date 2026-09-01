/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D10',
        elevated: '#14171B',
        paper: '#EDECE7',
        muted: '#8B9098',
        amber: '#D9A544',
        hairline: 'rgba(237,236,231,0.12)',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      maxWidth: {
        prose: '680px',
      },
    },
  },
  plugins: [],
}
