var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var promise = require('es6-promise').polyfill();
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var bourbon = require('node-bourbon').includePaths;
var babel = require('babel-core');
var jestPreset = require('babel-preset-jest');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'webpack/hot/dev-server',
    './app/index' // Your appʼs entry point
  ],

  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  resolve: {
    // resolve extensions js, jsx
    extensions: ['', '.js', '.jsx']
  },


  module: {
    loaders : [

      // Compile jsx ES6 with bable
      // add React-hot loader
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot','jsx', 'babel'],
        include: APP_PATH
      },

      // Load image
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.css$/, 
        loader: "style!css!" 
      },
      // Load scss
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },

      // Load fonts
      {
        test   : /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      }

    ],
    preLoaders: [
      // add JSHint
      {
        test: /\.js?$/,
        loaders: ['jshint'],
        include: APP_PATH
      }
    ]
  },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('css/style.css'),
      new HtmlwebpackPlugin({
        title: 'Trello',
        template: './app/template/template.html'
      })
  ]
}
