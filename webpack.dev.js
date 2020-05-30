const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      _favicon: './src/assets/favicon.png',
      get favicon() {
        return this._favicon;
      },
      set favicon(value) {
        this._favicon = value;
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/french.html',
      filename:'french.html',
      _favicon: './src/assets/favicon.png',
      get favicon() {
        return this._favicon;
      },
      set favicon(value) {
        this._favicon = value;
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/english.html',
      filename:'english.html',
      _favicon: './src/assets/favicon.png',
      get favicon() {
        return this._favicon;
      },
      set favicon(value) {
        this._favicon = value;
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader'
        ] //1. Turns sass into css
      }
    ]
  }
});
