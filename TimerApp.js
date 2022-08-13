import React from "react";

class TimerApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPaused: false,
      activities: [],
    };

    this.intervalId = null;
  }

  modifyTimer = () => {
    const { hours, minutes, seconds, isPaused } = this.state;

    if (isPaused) return;
    this.setState({
      hours: minutes === 59 ? hours + 1 : hours,
      minutes: seconds === 59 ? minutes + 1 : minutes,
      seconds: seconds === 59 ? 0 : seconds + 1,
    });
  };

  startTimer = () => {
    this.intervalId = setInterval(this.modifyTimer, 1000);
  };

  stopAndResetTimer = () => {
    const { hours, minutes, seconds, activities } = this.state;
    const timeString = ` ${this.renderZero(hours)}${hours} :  ${this.renderZero(
      minutes
    )}${minutes} : ${this.renderZero(seconds)}${seconds}`;
    const newActivities = [...activities, timeString];

    clearInterval(this.intervalId);
    this.intervalId = null;
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      activities: newActivities,
    });
  };

  pauseTimer = () => {
    this.setState({ isPaused: !this.state.isPaused });
  };

  renderZero = (num) => {
    return num <= 9 ? "0" : "";
  };

  render() {
    const { hours, minutes, seconds, activities } = this.state;

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h1>{` ${this.renderZero(hours)} ${hours} : ${this.renderZero(
            minutes
          )} ${minutes} : ${this.renderZero(seconds)} ${seconds}`}</h1>
        </div>
        <div>
          <button style={{ margin: "0px 10px" }} onClick={this.startTimer}>
            Start
          </button>
          <button style={{ margin: "0px 10px" }} onClick={this.pauseTimer}>
            Pause
          </button>
          <button
            style={{ margin: "0px 10px" }}
            onClick={this.stopAndResetTimer}
          >
            Stop
          </button>
          <button
            style={{ margin: "0px 10px" }}
            onClick={this.stopAndResetTimer}
          >
            Reset
          </button>
        </div>
        <div style={{ marginTop: 25 }}>Activity</div>
        {activities.map((item) => {
          return <div style={{ marginTop: 10 }}>{item}</div>;
        })}
      </div>
    );
  }
}

export default TimerApp;
