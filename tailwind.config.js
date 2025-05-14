/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd7ff',
          300: '#8ebeff',
          400: '#599eff',
          500: '#3682ff',
          600: '#2163f5',
          700: '#1c4de0',
          800: '#1e40b5',
          900: '#1e3b8e',
          950: '#162454',
        },
        secondary: {
          50: '#edfdf8',
          100: '#d4f8ed',
          200: '#adeeda',
          300: '#79dfbe',
          400: '#41c79d',
          500: '#25ac85',
          600: '#1a896c',
          700: '#186e59',
          800: '#175647',
          900: '#14473b',
          950: '#0a2a23',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc7a9',
          300: '#ffa071',
          400: '#ff7038',
          500: '#ff4d11',
          600: '#ed3000',
          700: '#c52503',
          800: '#9c2209',
          900: '#7e200b',
          950: '#440d05',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        slideInUp: 'slideInUp 0.8s ease-out',
        pulse: 'pulse 2s infinite',
        typing: 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
    },
  },
  plugins: [],
};