var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var proxy = require('proxy-middleware');
var util = require('util');
var escapeHtml = require('escape-html');
var path = require('path');
var url = require('url');
var appConfig = require('../app.config');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var assetsUrl = util.format('%s/assets', appConfig.server.webpack.url);

app.use('/assets', proxy(url.parse(assetsUrl)));

app.get('/*', function(req, res) {
    res.sendFile('assets/index.html', { root: '.' });
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send(util.format('<pre>%s</pre>', escapeHtml(err.stack)));
});

module.exports = app;
