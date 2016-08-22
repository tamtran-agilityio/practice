const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const config = {
  debug: true,
  entry: {
    'vendor': './src/vendor',
    'app': './src/app'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.es6', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html/, loader: 'html?minimize=false' },
      { test: /\.css$/, loader: 'css' }
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      { from: './src/index.html' },
      { from: './src/data/data.json' }
    ], {})
  ],
  devServer: {
    port: 9000,
    host: '0.0.0.0',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: path.resolve(__dirname, 'dist')
  }
};
module.exports = config;
