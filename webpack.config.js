var webpack = require ('webpack');
var path = require('path');
var util = require('util');
var appConfig = require('./app.config');

var clientEntry = util.format('webpack-dev-server/client?%s', appConfig.server.webpack.url);
var assetsUrl = util.format('%s/assets/', appConfig.server.webpack.url);
var assetsPath = path.join(process.cwd(), 'assets');

module.exports = {
	entry: [
		clientEntry,
		'webpack/hot/only-dev-server',
		'./src/main'
	],
	output: {
		path: assetsPath,
		filename: 'main.js',
		publicPath: assetsUrl
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'es6'],
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loaders: ['react-hot', 'jsx?harmony'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style?singleton!css!sass?outputStyle=expanded',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.json', '.jsx']
	},
	plugins: [
		new webpack.DefinePlugin({
  			"process.env": {
    			NODE_ENV: JSON.stringify("dev")
  			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
		new webpack.NoErrorsPlugin()
	],
	externals: { },
	node: {
		__filename: true
	}
};
