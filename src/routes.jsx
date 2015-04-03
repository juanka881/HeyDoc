var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var ShellView = require('screens/shell/ShellView');
var DashboardView = require('screens/dashboard/DashboardView');
var CasesView = require('screens/cases/CasesView');
var NotFoundView = React.createClass({
    render() {
        return (<h1>NOT FOUND</h1>);
    }
});

var routes = (
    <Route path='/' handler={ShellView}>
        <DefaultRoute name='index' handler={DashboardView} />
        <Route name='cases' path='/cases' handler={CasesView} />        
        <NotFoundRoute name='notFound' handler={NotFoundView} />
    </Route>
);

module.exports = routes;