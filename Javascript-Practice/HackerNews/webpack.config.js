module.exports = {
	context: __dirname,
	entry: [
		'./node_modules/babel-polyfill/dist/polyfill.js',
		'./app/scripts/main.js'
	],
	output: {
		path:  '/Javascript-Practice/Gmail/dist',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
