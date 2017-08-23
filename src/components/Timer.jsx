var React = require('react');
const Clock = require('Clock');

var Timer = () => {
    return (
        <div>
            <Clock totalSeconds={121}/>
        </div>
    )
}

module.exports = Timer;
