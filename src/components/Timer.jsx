import React, { PropTypes } from 'react'
const Clock = require('Clock');
const SecondsInputForm = require('SecondsInputForm');
const Controls = require('Controls');

const Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            status: 'stopped'
        };
    },
    onSecondsInputFormSubmit: function (seconds) {
        this.setState({
            count: seconds
        });
    },
    handleStatusChange: function (newStatus) {
        console.log(newStatus);
        this.setState({
            status: newStatus
        });
        this.counter = setInterval(() => {
            var { count } = this.state;
            let newCount = count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    },
    render: function () {
        var { count, status } = this.state;
        // var renderControlsArea = () => {
        //     if(status !== 'stopped') {
        //         return
        //     } else {
        //         return <SecondsInputForm onSubmitHandler={this.onSecondsInputFormSubmit}/>
        //     }
        // }
        return (
            <div>
                <h2>Timer</h2>
                <Clock totalSeconds={this.state.count}/>
                <Controls status={status} onStatusChange={this.handleStatusChange} controlsType="timer"/>
            </div>
        )
    }
})

module.exports = Timer;
