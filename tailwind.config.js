/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'primary': 'var(--color-primary)',
      'background': 'var(--color-background)',
      'foreground': 'var(--color-foreground)',
      'border': 'var(--color-border)',
      'gray': 'var(--color-gray)',
      'subtext': 'var(--color-subtext)',
      'success': 'var(--color-success)',
      'warning': 'var(--color-warning)',
      'danger': 'var(--color-danger)',
    },
    extend: {
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}
