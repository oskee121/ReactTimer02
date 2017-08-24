import React, {
    PropTypes
} from 'react'

const SecondsInputForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        let totalSeconds = this.refs.seconds.value;
        if (totalSeconds && totalSeconds.match(/^[0-9]*$/ig)) {
            this.props.onSubmitHandler(parseInt(totalSeconds, 10));
        }
    },
    render() {
        return (
            <div className="seconds-input-form-parent">
                <form ref="form" onSubmit={this.onSubmit} className="seconds-input-form">
                    <input type="text" name="seconds" ref='seconds'/>
                    <button className="button">Set Time</button>
                </form>
            </div>
        )
    }
})

module.exports = SecondsInputForm;
