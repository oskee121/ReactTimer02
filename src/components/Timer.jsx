import React, { PropTypes } from 'react'
const Clock = require('Clock');
const SecondsInputForm = require('SecondsInputForm');

const Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },
    onSecondsInputFormSubmit: function (seconds) {
        this.setState({
            count: seconds
        });
    },
    render: function() {
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
                <Controls countdownStatus={status} onStatusChange={this.onStatusChange} controlsType="timer"/>
            </div>
        )
    }
})

module.exports = Timer;
