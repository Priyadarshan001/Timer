import React, { Component } from "react";
import "./index.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { hours: 0, minutes: 0, seconds: 0, setButton: "start" };
  }

  onStart = () => {
    this.setState({ seconds: this.state.seconds + 1 });

    if (this.state.seconds == 59) {
      this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
    }
    if (this.state.minutes == 59) {
      this.setState({ hours: this.state.hours + 1, minutes: 0 });
    }
  };

  handleStart = () => {
    this.myTimer = setInterval(this.onStart, 1000);
    document.getElementById("start").disabled = true;
  };

  handleStop = () => {
    clearInterval(this.myTimer);
  };

  handleReset = () => {
    clearInterval(this.myTimer);
    // document.getElementById("start").disabled = false;
    this.setState({ hours: 0, minutes: 0, seconds: 0, setButton: "start" });
  };

  buttonReset = () => {
    if (this.state.setButton == "start") {
      this.setState({ setButton: "stop" });
      this.handleStart();
    } else {
      this.setState({ setButton: "start" });
      this.handleStop();
    }
  };

  render() {
    return (
      <div className="timeCounter">
        <h2>Timer</h2>
        <div>
          <span className="hour">
            {this.state.hours + 1 <= 10 ? "0" : ""}
            {this.state.hours}
          </span>
          <span>:</span>
          <span className="minute">
            {this.state.minutes + 1 <= 10 ? "0" : ""}
            {this.state.minutes}
          </span>
          <span>:</span>
          <span className="second">
            {this.state.seconds + 1 <= 10 ? "0" : ""}
            {this.state.seconds}
          </span>
        </div>

        <button className="buttonReset" onClick={this.buttonReset}>
          {this.state.setButton == "start" ? "Start" : "Stop"}
        </button>
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}
export default Timer;
