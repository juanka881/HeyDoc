var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('../webpack.config');

var compiler = webpack(config);
var opts = {
    contentBase: path.join(__dirname, 'assets'),
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: '/assets/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    stats: { colors: true }
};

var app = new WebpackDevServer(compiler, opts);

module.exports = app;
