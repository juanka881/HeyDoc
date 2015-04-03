var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var DateText = require('components/DateText');
var DataTable = require('components/data-table');
var models = require('screens/cases/caseData');

var CasesTableView = React.createClass({
    render() {
        return (
            <DataTable models={models}>
                <DataTable.Column label='Date/Time' data='timestamp' mapper={this.timestamp} />
                <DataTable.Column label='Surgeon' data='surgeon' />
                <DataTable.Column label='Facility' data='facility' />
                <DataTable.Column label='Procedure' data='procedure' />
                <DataTable.Column label='Patient Name' data='patientName' />
                <DataTable.Column label='Insurance' data='insurance' />                
            </DataTable>
        );
    },

    timestamp(model) {
        return <DateText model={model} />;
    }
});

module.exports = CasesTableView;
