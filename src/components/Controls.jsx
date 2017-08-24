import React, { PropTypes } from 'react'

var Controls = React.createClass({
    propTypes: {
        countdownStatus: PropTypes.string.isRequired
    },
    render: function () {
        var {countdownStatus} = this.props;
        let renderStartStopButton = () => {
            if (countdownStatus === 'paused') {
                return <button className="button">Start</button>
            } else if (countdownStatus === 'started') {
                return <button className="button">Pause</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }

});

module.exports = Controls;
