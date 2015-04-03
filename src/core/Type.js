var Type = function() {

}

Type.prototype = {
	isString(obj) {
    	return obj && obj.constructor === String;
	},

	isFn(obj) {
    	return !!(obj && obj.constructor && obj.call && obj.apply);
	},

	isArray(obj) {
    	return obj && obj.constructor === Array;
	}
};

module.exports = new Type();