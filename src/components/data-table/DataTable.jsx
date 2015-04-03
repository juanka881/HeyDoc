var React = require('react');
var ComponentMixin = require('components/mixins/ComponentMixin');
var toArray = require('core/toArray');

var DataTable = React.createClass({
    mixins: [
        ComponentMixin
    ],

    render() {
        var columns = toArray(this.props.children);
        var models = toArray(this.props.models);

        return (
            <table className={this.getComponentClassName()}>
                <thead>
                    {this.renderHeaders(columns)}
                </thead>
                <tbody>                    
                    {this.renderRows(columns, models)}
                </tbody>                
            </table>
        )
    },

    renderHeaders(columns) {
        var headers = this.mapToIndexedElements(columns, 'th', x => x.props.label);
        return <tr>{headers}</tr>;
    },

    renderRows(columns, models) {
        var rows = models.map((model, index) => {            
            var key = this.getKey(model, index);
            var cells = columns.map((col, colIndex) => this.renderCell(col, model, colIndex));
            return <tr key={key}>{cells}</tr>;
        });

        return rows;
    },

    renderCell(col, model, index) {
        var data = model[col.props.data];
        var mappedData = this.mapOrValue(data, index, col.props.mapper);
        return <td key={index}>{mappedData}</td>;
    }
});

module.exports = DataTable;
