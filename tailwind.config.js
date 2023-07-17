const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#101315',
        cadet: {
          '100': '#f8f8fa',
          '200': '#f1f2f5',
          '300': '#eaebf0',
          '400': '#e0e1e8',
          '500': '#cbccd8',
          '600': '#abafc1',
          '700': '#8187a2',
          '800': '#5d637e',
          '900': '#3e4254',
          '1000': '#1f212a',
          '1100': '#040506'
        },
        ultramarine: {
          '50': '#e8effd',
          '100': '#bcc6f9',
          '200': '#798df3',
          '300': '#3554ec',
          '400': '#1230c6',
          '500': '#0c2083',
          '600': '#0a1a69',
          '700': '#07134e',
          '800': '#050d34',
          '900': '#02061a',
          '1000': '#152679',
        },
        volt: {
          '50': '#fcfef0',
          '100': '#f8fde2',
          '200': '#f6ffcc',
          '300': '#ecff99',
          '400': '#e3ff66',
          '500': '#d0ff00',
          '600': '#a6cc00',
          '700': '#7d9900',
          '800': '#536600',
          '900': '#2a3300'
        }
      },
      borderRadius: {
        '4xl': '3,125',
      },
      fontSize: {
        '64xl': '4rem'
      },
      fontFamily: {
        catamaran: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-dark-blue': 'linear-gradient(278.19deg, #0061C2 0%, #2B9DFF 97.36%)'
      }
    },
  },
  plugins: [
    /** Buat Typography */
    plugin(function ({addBase, addComponents, theme}) {
      const lg = '1024px';
      const fontFamily = theme('fontFamily.catamaran', 'fontFamily.sans');
      const styling = {
        'h1': {
          fontFamily,
          fontWeight: theme('fontWeight.extrabold'),
          fontSize: '48px',
          lineHeight: '52.8px',
          [`@media (min-width: ${lg})`]: {
            fontSize: '64px',
            lineHeight: '70.4px',
          }
        },
        'h2': {
          fontFamily,
          fontWeight: theme('fontWeight.bold'),
          fontSize: '40px',
          lineHeight: '44px',
          [`@media (min-width: ${lg})`]: {
            fontSize: '56px',
            lineHeight: '61.6px',
          }
        },
        'h3': {
          fontFamily,
          fontWeight: theme('fontWeight.bold'),
          fontSize: '32px',
          lineHeight: '35.2px',
          [`@media (min-width: ${lg})`]: {
            fontSize: '42px',
            lineHeight: '46px',
          }
        },
        'h4': {
          fontFamily,
          fontWeight: theme('fontWeight.semibold'),
          fontSize: '24px',
          lineHeight: '26.4px',
          [`@media (min-width: ${lg})`]: {
            fontSize: '32px',
            lineHeight: '35.2px',
          }
        },
        'h5': {
          fontFamily,
          fontWeight: theme('fontWeight.bold'),
          fontSize: '20px',
          lineHeight: '22px',
          [`@media (min-width: ${lg})`]: {
            fontSize: '28px',
            lineHeight: '30.8px',
          }
        },
      };
      /** Typography pake header tags */
      addBase(styling);
      /** Typography pake classname */
      addComponents({
        '.text-hero-title': styling.h1,
        '.text-big-title': styling.h2,
        '.text-medium-title': styling.h3,
        '.text-subtitle': styling.h4,
        '.text-highlights': styling.h5,
      });
    })
  ],
};
