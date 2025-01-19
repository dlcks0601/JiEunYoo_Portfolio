module.exports = {
  content: [
    './index.html', // 프로젝트 루트의 index.html 파일
    './src/**/*.{js,ts,jsx,tsx}', // src 폴더의 모든 JS, TS, JSX, TSX 파일
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Raleway를 기본 sans 폰트로 설정
      },
    },
  },
  plugins: [],
};
