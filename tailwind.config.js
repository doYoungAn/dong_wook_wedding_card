/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      
      primary2: '#0C6A31',
      secondaryText: 'rgb(74, 73, 73)',
      grayBg: 'rgb(239, 239, 239)',

      primary: '#F3C7D9',
      contentPrimary: '#544f4f',
      red: '#ce4257',

      mainBg: '#fbfbfb',
      whiteBg: '#ffffff',
      secondBg: '#f6f5f5',
      darkBg: '#f2eeee',
      modalBackBg: 'rgba(0, 0, 0, 0.48)',
      modalDarkBackBg: 'rgba(0, 0, 0, 0.70)',

      mainBorder: '#e8dfdf',

      title: '#89757a',
      subTitle: '#c2b2b2',
    },
    extend: {
      fontFamily: {
        pre: ['pretendard'],
        IropkeBatangM: ['Iropke Batang'],
        GowunBatang: ['Gowun Batang'],
        BodoniModa: ['Bodoni Moda']
      },
    },
  },
  plugins: [],
};
