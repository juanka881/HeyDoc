var React = require('react');
var jquery = require('jquery');
var ComponentMixin = require('components/mixins/ComponentMixin');

var AppContent = React.createClass({
    mixins: [
        ComponentMixin
    ],

    componentDidMount() {
        var content = this.getDOMNode();
        var barHeight = jquery('.component-AppBar').height();
        var contentMarginTopString = jquery(content).css('marginTop');
        var contentMarginTop = parseInt(contentMarginTopString);

        if(barHeight && contentMarginTop)
            content.style.marginTop = barHeight + contentMarginTop + 'px';
    },

    render() {
        return (
            <div className={this.getComponentClassName()}>
                {this.props.children}
            </div>
        )
    }
});

module.exports = AppContent;
