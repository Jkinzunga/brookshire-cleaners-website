/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4EF',
        ink:   '#1C1C1E',
        sage:  '#4A7C6F',
        mist:  '#C8DBD5',
        stone: '#7A7570',
        cream: '#EDE9E1',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['4.2rem', { lineHeight: '1.04' }],
      },
      lineHeight: {
        body:    '1.8',
        heading: '1.05',
      },
      boxShadow: {
        card: '0 2px 20px rgba(0,0,0,0.06)',
        lift: '0 10px 40px rgba(0,0,0,0.10)',
        glow: '0 0 36px rgba(74,124,111,0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease both',
        'fade-in': 'fadeIn 0.5s ease both',
        float:     'float 7s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-9px)' },
        },
      },
    },
  },
  plugins: [],
};
