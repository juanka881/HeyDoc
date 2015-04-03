var ServerConfig = require('./scripts/ServerConfig');

var config = {
    server: {
        webpack: new ServerConfig('localhost', 8081),
        app: new ServerConfig('localhost', 8080)
    }   
};

module.exports = config;
