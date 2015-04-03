var ComponentClassMixin = {	
	getComponentClassName() {
		if(!this.constructor.className) {
			var name = this.constructor.displayName;
			this.constructor.className = 'component-' + name;
		}
			
		return this.constructor.className;
	},	
}

module.exports = ComponentClassMixin;