import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }
  anything;
  componentDidMount() {
    this.anything = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Class Timer:{this.state.timer}</h1>
        <button onClick={() => clearInterval(this.anything)}>Clear</button>
      </div>
    );
  }
}
export default Timer;
