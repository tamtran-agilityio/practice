var webpack = require('webpack');
var path = require('path');
var loaders = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./src/js/app.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join('', 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: '/src/index.html'}
		]),
	]
};