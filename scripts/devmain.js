process.env['NODE_PATH'] = './src';
require('module').Module._initPaths();

var appConfig = require('../app.config');
var webpackServer = require('./webpackServer');
var appServer = require('./appServer');

var wp = appConfig.server.webpack;
webpackServer.listen(wp.port, wp.name, function() {
    console.log('webpack server listening on port %s', wp.port);
});

var app = appConfig.server.app;
appServer.listen(app.port, function() {
    console.log('app server listening on port %s', app.port);
});
