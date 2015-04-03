var ReactHelper = require('core/ReactHelper');

var ReactHelperMixin = {
	getProp: ReactHelper.getProp,
	getKey: ReactHelper.getKey,
	mapOrValue: ReactHelper.mapOrValue,
	mapToElements: ReactHelper.mapToElements,
	mapToKeyedElements: ReactHelper.mapToKeyedElements,
	mapToIndexedElements: ReactHelper.mapToIndexedElements
}

module.exports = ReactHelperMixin;