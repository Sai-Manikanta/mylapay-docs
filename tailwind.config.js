/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      //black: '#08111F',
      black: '#334155',
      primary: '#47BDFF',
      secondary: '#B476E5',
      para: '#424863',
      bluedark: '#002060',
      bluelight: '#00B0F0',
      bluebglight: '#F5FAFE',
      bluebglight2: '#E0E9FA',
      bluebglight3: '#F1F5FF',
      bluebg4: '#b0bcdb',
      bluebg5: '#e1e9fb',
      tabblue: '#cee0ff',
      bggray: '#F4F5F7',
      grayfooter: '#9d9fa0',
      lightfont: '#767677',
      graylight: '#94a3b8',
      graytwolight: '#f9f9f9',
      bluetext: '#75CCCF',
      greentext: '#2E926E',
      yellowtext: '#E1C38C',
      red: '#DC2626',
      gray: {
        DEFAULT: '#7780A1',
        dark: '#1C2331',
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'typewriter': "typewriter 2s steps(11) forwards"

      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray'),
            fontSize: '1.125rem',
          },
        },
      }),
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};
