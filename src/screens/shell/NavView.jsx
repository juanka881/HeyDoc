var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavView = React.createClass({
    render() {
        return (
            <ul className='component_NavView'>
                <li>
                    <Link to='/'>App</Link>
                </li>
                <li>
                    <Link to='/cases'>Cases</Link>
                </li>
            </ul>
        );
    }
});

module.exports = NavView;
