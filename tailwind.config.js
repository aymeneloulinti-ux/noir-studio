/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        noir: '#0A0A0A',
        coal: '#121212',
        carbon: '#181818',
        bone: '#F5F5F7',
        smoke: '#8E8E93',
        signal: '#CCFF00',
        line: '#262626',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};