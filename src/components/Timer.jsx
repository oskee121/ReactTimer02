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
        console.log(seconds);
        this.setState({
            count: seconds
        });
    },
    render () {
        return (
            <div>
                <h2>Timer</h2>
                <Clock totalSeconds={this.state.count}/>
                <SecondsInputForm onSubmitHandler={this.onSecondsInputFormSubmit}/>
            </div>
        )
    }
})

module.exports = Timer;
