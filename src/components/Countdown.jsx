import React, { PropTypes } from 'react'
const Clock = require('Clock');
const SecondsInputForm = require('SecondsInputForm');

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
                default:
                    clearInterval(this.timer);
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
    render: function() {
        return (
            <div>
                <h2>Countdown</h2>
                <Clock totalSeconds={this.state.count}/>
                <SecondsInputForm onSubmitHandler={this.onSecondsInputFormSubmit}/>
            </div>
        )
    }
})
module.exports = Countdown;
