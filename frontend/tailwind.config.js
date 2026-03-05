/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Instagram-inspired brand colors
        ig: {
          blue: '#0095F6',
          'blue-dark': '#0074CC',
          purple: '#833AB4',
          'purple-dark': '#5851DB',
          'purple-deep': '#405DE6',
          magenta: '#C13584',
          pink: '#E1306C',
          red: '#FD1D1D',
          orange: '#F56040',
          'orange-light': '#F77737',
          yellow: '#FCAF45',
          'yellow-light': '#FFDC80',
        },
        // Dark surface palette
        surface: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#121212',
          card: '#1a1a1a',
          elevated: '#262626',
          border: '#363636',
        },
        // Legacy compatibility aliases
        growcare: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#E1306C',
          500: '#C13584',
          600: '#833AB4',
          700: '#5851DB',
          800: '#405DE6',
          900: '#2a2560',
        },
        'growcare-purple': {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#833AB4',
          500: '#5851DB',
          600: '#405DE6',
          700: '#3949AB',
          800: '#283593',
          900: '#1A237E',
        },
        primary: {
          50: '#fce4ec',
          500: '#E1306C',
          600: '#C13584',
          700: '#833AB4',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
