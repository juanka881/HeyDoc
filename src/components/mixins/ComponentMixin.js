var ComponentClassNameMixin = require('components/mixins/ComponentClassNameMixin');
var ReactHelperMixin = require('components/mixins/ReactHelperMixin');

var ComponentMixin = {
	mixins: [
		ReactHelperMixin,
		ComponentClassNameMixin
	]	
};

module.exports = ComponentMixin;