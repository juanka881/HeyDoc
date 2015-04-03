var React = require('react');
var ComponentMixin = require('components/mixins/ComponentMixin');

var AppBar = React.createClass({
	mixins: [
		ComponentMixin
	],

    render() {
        return (
            <div className={this.getComponentClassName()}>
                {this.props.children}
            </div>
        )
    }
});

module.exports = AppBar;
