import React, { Component } from "react";

import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div id="main-counter">
        <div>player: {this.props.user}</div>
        <button onClick={this.props.handleDecrement}>-</button>
        {this.props.count}
        <button onClick={this.props.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
