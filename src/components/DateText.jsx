var React = require('react');
var moment = require('moment');
var ComponentMixin = require('components/mixins/ComponentMixin');

var DateText = React.createClass({
    mixins: [
        ComponentMixin
    ],

    getDefaultProps() {
        return {
            format: 'YYYY/MM/DD'
        }
    },

    render() {
        return (
            <span className={this.getComponentClassName()}>
                {moment(this.props.model).format(this.props.format)}
            </span>
        )
    }
});

module.exports = DateText;
