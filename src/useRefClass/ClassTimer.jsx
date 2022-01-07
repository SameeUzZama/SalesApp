import React, { Component } from "react";

class Classtimer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }
  aything;
  componentDidMount() {
    this.aything = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    });
  }
  render() {
    return (
      <div>
        <h1>Class Timer:{this.state.timer}</h1>
      </div>
    );
  }
}
export default Classtimer;
