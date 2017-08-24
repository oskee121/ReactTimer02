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
                      <IndexLink to='/' activeClassName='active'>Countdown</IndexLink>
                  </li>
                  <li>
                      <Link to='/timer' activeClassName='active'>Timer</Link>
                  </li>
                </ul>
              </div>
              <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                          By <a href="http://www.keeradit.com" target="_blank">Keeradit</a>
                        </li>
                    </ul>
              </div>
            </div>
        );
    }
});

module.exports = Nav;
