/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lineFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        wave: {
    '0%,100%': { d: 'path("M0,40 C240,100 480,0 720,40 960,80 1200,20 1440,60 L1440,0 L0,0 Z")' },
    '50%': { d: 'path("M0,60 C240,20 480,80 720,60 960,40 1200,100 1440,60 L1440,0 L0,0 Z")' },
  },
  'slow-float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-24px)' },
  }
      },
      animation: {
        'line-flow': 'lineFlow 2s linear infinite',
        wave: 'wave 8s ease-in-out infinite',
         'slow-float': 'slow-float 18s ease-in-out infinite'
      },
      colors: {
  primary: {
    DEFAULT: 'rgb(var(--primary-500) / <alpha-value>)',
    50: 'rgb(var(--primary-50) / <alpha-value>)',
    100: 'rgb(var(--primary-100) / <alpha-value>)',
    200: 'rgb(var(--primary-200) / <alpha-value>)',
    300: 'rgb(var(--primary-300) / <alpha-value>)',
    400: 'rgb(var(--primary-400) / <alpha-value>)',
    500: 'rgb(var(--primary-500) / <alpha-value>)',
    600: 'rgb(var(--primary-600) / <alpha-value>)',
    700: 'rgb(var(--primary-700) / <alpha-value>)',
    800: 'rgb(var(--primary-800) / <alpha-value>)',
    900: 'rgb(var(--primary-900) / <alpha-value>)',
  },

  secondary: {
    500: 'rgb(var(--secondary-500) / <alpha-value>)',
    600: 'rgb(var(--secondary-600) / <alpha-value>)',
  },

  accent: {
    500: 'rgb(var(--accent-500) / <alpha-value>)',
    600: 'rgb(var(--accent-600) / <alpha-value>)',
  },

  neutral: {
    200: 'rgb(var(--neutral-200) / <alpha-value>)',
    900: 'rgb(var(--neutral-900) / <alpha-value>)',
  },
}
,

      // Custom background gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFDB58 0%, #EBBB00 100%)',
        'gradient-hero': 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 50%, #F9FAFB 100%)',
        'gradient-dark': 'linear-gradient(135deg, #064E3B 0%, #065F46 100%)',
      },

      // Box shadows for depth
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'primary': '0 10px 30px -5px rgba(5, 150, 105, 0.3)',
        'accent': '0 10px 30px -5px rgba(255, 219, 88, 0.4)',
      },
    },
  },
  plugins: [],
};