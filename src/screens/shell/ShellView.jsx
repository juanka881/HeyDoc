var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var AppBar = require('components/AppBar');
var AppContent = require('components/AppContent');
var NavView = require('screens/shell/NavView');

var ShellView = React.createClass({
    render() {
        return (
            <div>
                <AppBar>
                    <NavView />
                </AppBar>
                <AppContent>
                    <RouteHandler />
                </AppContent>
            </div>
        )
    }
});

module.exports = ShellView;
