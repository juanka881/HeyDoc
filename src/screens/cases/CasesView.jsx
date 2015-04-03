var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CasesTableView = require('screens/cases/CasesTableView');

var CasesView = React.createClass({
    render() {
        return (
            <div>
                <h2>Cases</h2>
                <button>Add Record</button>
                <CasesTableView />
            </div>
        );
    }
});

module.exports = CasesView;
