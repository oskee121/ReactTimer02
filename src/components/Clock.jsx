var React = require('react');
var PropTypes = React.PropTypes;

var Clock = React.createClass({
    formatSeconds: function (totalSeconds) {
        var seconds = totalSeconds % 60;
        var minute = Math.floor(totalSeconds / 60);

        if(minute < 10) {
            minute = '0' + minute;
        }
        if(seconds < 10) {
            seconds = '0' + seconds;
        }

        return minute + ':' + seconds;
    },
    render: function () {
        return (
            <div />
        );
    }

});

module.exports = Clock;
