var React = require('react');
var PropTypes = React.PropTypes;

var DataColumn = React.createClass({
	propTypes: {
		label: PropTypes.string.isRequired,
		data: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.func
		]),
		mapper: PropTypes.func
	},

	render() {
		throw 'data table column should not render';
	}
});

module.exports = DataColumn;