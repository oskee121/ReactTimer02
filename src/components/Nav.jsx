var React = require('react');
var PropTypes = React.PropTypes;
const {
    Link,
    IndexLink
} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
    },
    render: function () {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                  <li className="menu-text">React Timer App</li>
                  <li>
                      <IndexLink to='/' activeClassName='active'>Timer</IndexLink>
                  </li>
                  <li>
                      <Link to='countdown' activeClassName='active'>Countdown</Link>
                  </li>
                </ul>
              </div>
              <div className="top-bar-right">
                  By Gz
              </div>
            </div>
        );
    }
});

module.exports = Nav;
