require('./main.scss');
var React = require('react');
var Router = require('react-router');
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor/index.js');
var routes = require('routes');

document.addEventListener('DOMContentLoaded', e => {

    var globalState = Immutable.Map({});
    var globalStateCursor = Cursor.from(globalState, newState => {
        var handler = newState.get('handler');
        React.render(React.createElement(handler, {state: newState}), document.body);
    });

    var routerInstance = Router.create({
        routes: routes,
        location: Router.HistoryLocation
    });

    var updateRouteState = function(handler, state) {
        globalStateCursor = globalStateCursor.update('handler', x => handler);
    }

    routerInstance.run(updateRouteState);

    if(module.hot) {
        module.hot.accept('routes', function() {
            routes = require('routes');
            routerInstance.stop();
            routerInstance.setOptions({ routes: routes });
            routerInstance.run(updateRouteState);
        });
    }
});
