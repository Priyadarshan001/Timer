import React, { Component } from "react";
import "./index.css";

export default class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: 0,
      date: new Date().toLocaleString(),
      time: new Date().toLocaleTimeString(),
      seconds: new Date().getSeconds(),
    };
  }
  componentDidMount = () => {
    this.myTimer = setInterval(() => {
      this.setState((prevState) => ({
        digit: prevState.digit + 1,
        date: new Date().toLocaleString(),
        time: new Date().toLocaleTimeString(),
        seconds: new Date().getSeconds(),
      }));
    }, 1000);
  };
  clearInterval = () => {
    clearInterval(this.myTimer);
  };

  render() {
    const { digit, date, time, seconds } = this.state;
    return (
      <div className="timer">
        Counter : {digit}
        <br />
        Date: {date}
        <br />
        Time: {time}
        <br />
        Seconds: {seconds}
        <br />
        <button onClick={this.clearInterval()}>Clear</button>
      </div>
    );
  }
}
