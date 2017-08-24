const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path="timer" component={Timer}/>
            <IndexRoute component={Countdown}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
