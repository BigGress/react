import React from "react";
import "./progress.css";

class Progress extends React.Component {

    clickProgress(event) {

        const rect = event.currentTarget.getBoundingClientRect();
        const playedLenth = event.clientX - rect.left;
        const percent = playedLenth / rect.width;

        this.props.changePosition(percent);
    }

    render() {
        return (
            <div className="progress" onClick={this.clickProgress.bind(this)}>
                <div className="played" style={{width: `${this.props.position}%`, background: this.props.background}}></div>
            </div>
        )
    }
}

Progress.defaultProps = {
    background: "green"
};

export default Progress;