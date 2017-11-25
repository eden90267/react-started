var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  context: path.join(__dirname, 'src', 'js'),
  entry: {
    bundle: './appES5.jsx',
    vendors: [
      'babel-polyfill'
    ]
  },
  output: {
    filename: '[name].js',
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
          presets: ['react', 'es2017', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendors',
      minChunks: Infinity
    })
  ]
};