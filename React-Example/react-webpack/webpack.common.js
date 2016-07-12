var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var html = require("jade-html!./src/index.jade");

module.exports = {
  entry: [
    './src/js/app.jsx' // Your appʼs entry point
  ],
  output: {
    path: path.join( __dirname , 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  },
  plugins: [
      new webpack.NoErrorsPlugin(),
      new CopyWebpackPlugin([
        {from: html}
      ]),
    ]
};