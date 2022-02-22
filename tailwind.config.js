module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#FFFFFF',
        secondary: {
          400: '#B4B4B4',
          500: '#A3A3A3',
        },
        primary: '#2F9E98',
        'txt-primary': '#575757',
      },
      minWidth: {
        minimum: '6.25rem',
      },
      backgroundImage: {
        check: "url('./src/public/icons/check.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
