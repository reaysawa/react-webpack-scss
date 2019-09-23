const path = require('path');

module.exports = () => ({
  plugins: {
    'autoprefixer': {},
    'postcss-import': {
      path: [path.resolve(__dirname, 'src')],
    },
  },
});
