var util = require('util');

var ServerConfig = function(name, port) {
    this.name = name;
    this.port = port;
    this.url = util.format('http://%s:%s', this.name, this.port);
};

module.exports = ServerConfig;
