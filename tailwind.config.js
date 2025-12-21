/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Color - Professional Emerald Green
        // Conveys: Trust, Growth, Financial Stability, Canadian Nature
        primary: {
          DEFAULT: '#059669', // Emerald-600 - Main brand color
          50: '#ECFDF5',      // Lightest - backgrounds, subtle highlights
          100: '#D1FAE5',     // Very light - hover states, cards
          200: '#A7F3D0',     // Light - badges, tags
          300: '#6EE7B7',     // Medium light - accents
          400: '#34D399',     // Medium - interactive elements
          500: '#10B981',     // Balanced green
          600: '#059669',     // ← Base brand color (main CTAs, links)
          700: '#047857',     // Darker - hover states, pressed buttons
          800: '#065F46',     // Deep - text on light backgrounds
          900: '#064E3B',     // Deepest - headings, emphasis
        },

        // Secondary Accent - Golden Yellow
        // Conveys: Premium, Attention, Highlight, Call-to-Action
        // Use sparingly for important CTAs and highlights
        accent: {
          DEFAULT: '#FFDB58', // Your specified yellow
          50: '#FFFBEB',      // Pale yellow - subtle backgrounds
          100: '#FFF4CC',     // Very light
          200: '#FFE999',     // Light
          300: '#FFDE66',     // Medium light
          400: '#FFD633',     // Medium
          500: '#FFDB58',     // ← Base accent (primary CTAs, highlights)
          600: '#EBBB00',     // Deeper gold
          700: '#C29A00',     // Dark gold - hover states
          800: '#997A00',     // Very dark
          900: '#705A00',     // Deepest
        },

        // Neutral Grays - Professional & Clean
        // For text, borders, backgrounds
        neutral: {
          DEFAULT: '#6B7280', // Gray-500
          50: '#F9FAFB',      // Almost white - page backgrounds
          100: '#F3F4F6',     // Very light gray - card backgrounds
          200: '#E5E7EB',     // Light gray - borders, dividers
          300: '#D1D5DB',     // Medium light - disabled states
          400: '#9CA3AF',     // Medium - placeholders, secondary text
          500: '#6B7280',     // Balanced gray - body text
          600: '#4B5563',     // Dark - headings, labels
          700: '#374151',     // Darker - primary headings
          800: '#1F2937',     // Very dark - emphasis text
          900: '#111827',     // Almost black - hero headings
        },

        // Success - For confirmations, completed states
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
          dark: '#047857',
        },

        // Error - For validation, alerts
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
          dark: '#DC2626',
        },

        // Warning - For cautions, pending states
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#D97706',
        },

        // Info - For informational messages
        info: {
          DEFAULT: '#3B82F6',
          light: '#DBEAFE',
          dark: '#2563EB',
        },
      },

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