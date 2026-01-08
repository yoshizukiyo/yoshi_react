// craco.config.js
module.exports = {
  style: {
    modules: {
      // Webpack(CRA)에서의 설정 방식
      localIdentName: '[hash:base64:8]',
    },
  },
};
