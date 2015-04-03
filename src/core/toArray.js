var Type = require('core/Type');

var toArray = function(obj) {
    if(Type.isArray(obj))
        return obj;

    return [obj];
}

module.exports = toArray;