var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/js/app.jsx' // Your appʼs entry point
  ],
  
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  
  output: {
    path: path.join('', 'dist'),
    filename: 'bundle.js'
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: loaders
  },

  devServer: {
    noInfo: true, //  --no-info option
    hot: true,
    inline: true
  },
  
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: './src/index.jade'}
    ]),
  ]
};