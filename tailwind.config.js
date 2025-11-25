module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm Terracotta
        primary: {
          DEFAULT: "#8B4513", // warm-terracotta
          50: "#FDF7F3", // warm-terracotta-50
          100: "#F9E8D9", // warm-terracotta-100
          200: "#F2D1B3", // warm-terracotta-200
          300: "#E8B48D", // warm-terracotta-300
          400: "#D19767", // warm-terracotta-400
          500: "#B8794A", // warm-terracotta-500
          600: "#8B4513", // warm-terracotta-600
          700: "#6B3410", // warm-terracotta-700
          800: "#4A240B", // warm-terracotta-800
          900: "#2A1406", // warm-terracotta-900
        },
        // Secondary Colors - Sage Green
        secondary: {
          DEFAULT: "#6B8E5A", // sage-green
          50: "#F4F7F1", // sage-green-50
          100: "#E8F0E3", // sage-green-100
          200: "#D1E1C7", // sage-green-200
          300: "#B5D0A4", // sage-green-300
          400: "#94BD7F", // sage-green-400
          500: "#7BA066", // sage-green-500
          600: "#6B8E5A", // sage-green-600
          700: "#547045", // sage-green-700
          800: "#3D5232", // sage-green-800
          900: "#26341F", // sage-green-900
        },
        // Accent Colors - Warm Gold
        accent: {
          DEFAULT: "#D4A574", // warm-gold
          50: "#FDF9F4", // warm-gold-50
          100: "#FAF1E8", // warm-gold-100
          200: "#F4E3D1", // warm-gold-200
          300: "#EDD5BA", // warm-gold-300
          400: "#E4C397", // warm-gold-400
          500: "#D4A574", // warm-gold-500
          600: "#C19660", // warm-gold-600
          700: "#A67D4C", // warm-gold-700
          800: "#8B6438", // warm-gold-800
          900: "#704B24", // warm-gold-900
        },
        // Background Colors
        background: "#FEFCF8", // warm-cream
        surface: "#F5F2ED", // subtle-cream
        // Text Colors
        text: {
          primary: "#2C2C2C", // rich-charcoal
          secondary: "#666666", // medium-gray
        },
        // Status Colors
        success: "#7A9B76", // natural-green
        warning: "#D4A574", // warm-gold
        error: "#A0522D", // earthy-red
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(139, 69, 19, 0.08)',
        'warm-sm': '0 2px 8px rgba(139, 69, 19, 0.06)',
        'warm-lg': '0 8px 32px rgba(139, 69, 19, 0.12)',
      },
      borderColor: {
        DEFAULT: '#6B8E5A', // sage-green for default borders
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}