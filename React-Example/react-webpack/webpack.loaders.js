var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
module.exports = [
  {
    test: /\.jsx?$/,
    loaders: ['react-hot', 'babel'],
    include: './src/js/app.jsx'
  },

  {
    test: /\.jade$/,
    loader: 'jade-html'
  },

  { 
    test: /\.jade$/, 
    loader: 'jade' 
  },

  {
    test: /\.html$/,
    exclude: /index\.html$/,
    loader: 'html'
  },

  { 
    test: /\.jade$/,
    loader: "jade-loader?self" 
  },
  // Load image
  {
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
    ]
  },

  // Load scss
  {
    test: /\.scss$/,
    loader: "style!css!sass?"
  },
  {
    test: /\.scss$/i,
    loader: extractCSS.extract(['css','sass'])
  },

  // Load fonts
  {
    test   : /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader : 'file-loader'
  }
];