export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        colors: {
          'button-primary': '#4CCCE6B8',
          'button-secondary': '#9EB1FFB8',
          primary: '#4958C6F5',
          green: '#007C65FA',

          'text-muted': '#1C20248A',
          'text-secondary': '#1C2024B8',
        },
        fira: ["'Fira Sans Condensed'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
