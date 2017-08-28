import React, { PropTypes } from 'react'

var Controls = React.createClass({
    propTypes: {
        status: PropTypes.string.isRequired,
        onStatusChange: PropTypes.func.isRequired,
        controlsType: PropTypes.string.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        let {controlsType} = this.props;
        let renderControlsArea = () => {
            let {status} = this.props;
            if (controlsType === 'countdown') {
                let renderStartStopButton = () => {
                    if (status === 'paused') {
                        return <button className="button primary" onClick={this.onStatusChange("started")}>Start</button>
                    } else if (status === 'started') {
                        return <button className="button secondary" onClick={this.onStatusChange("paused")}>Pause</button>
                    }
                }
                return (
                    <div>
                        {renderStartStopButton()}
                        <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
                    </div>
                )
            } else if (controlsType === 'timer') {
                if (status === 'stopped') {
                    return (
                        <span>
                            <button className="button primary" onClick={this.onStatusChange("started")}>Start</button>
                        </span>
                    )
                } else if (status === 'started') {
                    return (
                        <span>
                            <button className="button secondary" onClick={this.onStatusChange("paused")}>Pause</button>
                            <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Stop</button>
                        </span>
                    )
                }
            }
        }
        return (
            <div className={`controls ${controlsType}`}>
                {renderControlsArea()}
            </div>
        );
    }

});

module.exports = Controls;
