var React = require('react');

var ReactHelper = function() {

}

ReactHelper.prototype = {
    getProp(obj, name, value) {
        if(obj && obj[name]) {
            return obj[name];
        }
        else {
            return value;
        }
    },

    getKey(obj, altKey) {
        return this.getProp(obj, 'id', 
            this.getProp(obj, 'key', null));
    },

    mapOrValue(value, index, mapperFn) {
        if(mapperFn) {
            return mapperFn(value, index);
        }
        else {
            return value;
        }
    },

    mapToElements(values, type, keyFn, mapperFn) {
       var elements = values.map((value, index) => {
            var key = keyFn(value, index);
            var mappedValue = this.mapOrValue(value, index, mapperFn);
            var props = { key };
            return React.createElement(type, props, mappedValue);
        });

        return elements; 
    },

    mapToKeyedElements(values, type, mapperFn) {    
        return this.mapToElements(
            values, 
            type,
            (value, index) => this.getKey(value, null),
            mapperFn);
    },

    mapToIndexedElements(values, type, mapperFn) {
        return this.mapToElements(
            values,
            type,
            (value, index) => index,
            mapperFn);
    }
};

module.exports = new ReactHelper();