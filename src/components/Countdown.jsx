import React, { PropTypes } from 'react'
const Clock = require('Clock');
const SecondsInputForm = require('SecondsInputForm');
const Controls = require('Controls');

const Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            status: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.status !== prevState.status) {
            switch (this.state.status) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    clearInterval(this.timer);
                    this.setState({
                        count: 0
                    });
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    break;
                default:
            }
        }
    },
    onSecondsInputFormSubmit: function (seconds) {
        this.setState({
            count: seconds,
            status: 'started'
        });
    },
    startTimer : function() {
        this.timer = setInterval(() => {
            var nextCount = this.state.count - 1;
            if (nextCount <= 0) {
                this.setState({
                    count: 0,
                    status: 'stopped'
                });
            }
            this.setState({
                count: nextCount >= 0 ? nextCount : 0
            });
        }, 1000);
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            status: newStatus
        });
    },
    render: function() {
        var {count, status} = this.state;
        var renderControlsArea = () => {
            if(status !== 'stopped') {
                return <Controls status={status} onStatusChange={this.handleStatusChange} controlsType="countdown"/>
            } else {
                return <SecondsInputForm onSubmitHandler={this.onSecondsInputFormSubmit}/>
            }
        }
        return (
            <div>
                <h2>Countdown</h2>
                <Clock totalSeconds={this.state.count}/>
                {renderControlsArea()}
            </div>
        )
    }
})
module.exports = Countdown;
