var webpackMerge      = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig      = require('./webpack.common');
var helpers           = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:9000',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  
  plugins: [
     new ExtractTextPlugin('[name].css')
  ],
  
  devServer: {
    histortyApiFallback: true,
    start: 'minimal'
  }
});
