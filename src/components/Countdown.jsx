var React = require('react');
const Clock = require('Clock');

var Countdown = () => {
    return (
        <div>
          <Clock totalSeconds={129}/>
        </div>
    )
}

module.exports = Countdown;
