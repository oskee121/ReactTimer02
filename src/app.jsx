const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Timer = require('Timer');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
