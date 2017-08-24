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
            // <div className="row">
            //     <div className="columns medium-6 large-4 small-centered">
            //         <ul className="pagination" role="navigation" aria-label="Pagination">
            //             <li className="pagination-previous disabled">Previous <span className="show-for-sr">page</span></li>
            //             <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
            //             <li><a href="#" aria-label="Page 2">2</a></li>
            //             <li><a href="#" aria-label="Page 3">3</a></li>
            //             <li><a href="#" aria-label="Page 4">4</a></li>
            //             <li className="ellipsis" aria-hidden="true"></li>
            //             <li><a href="#" aria-label="Page 12">12</a></li>
            //             <li><a href="#" aria-label="Page 13">13</a></li>
            //             <li className="pagination-next"><a href="#" aria-label="Next page">Next <span className="show-for-sr">page</span></a></li>
            //         </ul>
            //     </div>
            // </div>
        </div>
    );
}

module.exports = Main;
