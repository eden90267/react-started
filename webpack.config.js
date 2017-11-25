var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src', 'js'),
  entry: './appES5.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/', /* webpack 使用 require 時參考的路徑 */
    path: path.join(__dirname, 'public', 'assets')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        enforce: 'pre',
        options: {
          presets: ['react']
        }
      }
    ]
  }
};