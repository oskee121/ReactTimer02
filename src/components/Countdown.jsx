var React = require('react');
const Clock = require('Clock');
const SecondsInputForm = require('SecondsInputForm');

const Countdown = React.createClass({
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
    render() {
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
