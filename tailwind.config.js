/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        brand: {
          blue: '#0b5fff',
          blueLt: '#2563EB',
          accent: '#E8F0FE',
        },
        navy: {
          DEFAULT: '#0f172a',
          mid: '#1e293b',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['"Century Gothic"', 'CenturyGothic', 'AppleGothic', 'Trebuchet MS', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        inter: ['"Century Gothic"', 'CenturyGothic', 'AppleGothic', 'Trebuchet MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}