var React = require('react');
var PropTypes = React.PropTypes;
const Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav></Nav>
            <div className="grid-container">
                <div className="grid-x grid-margin-x">
                    <div className="auto cell">
                    </div>
                    <div className="columns small-8 medium-6">
                        {props.children}
                    </div>
                    <div className="auto cell">
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
