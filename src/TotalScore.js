import React, { Component } from "react";
import Counter from "./Counter";

class TotalScore extends Component {
  constructor() {
    super();
    this.state = {
      player1Count: 0,
      player2Count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>
          Total score: {this.state.player1Count + this.state.player2Count}
        </h1>
        <Counter
          user="david"
          count={this.state.player1Count}
          handleDecrement={this.decrementPlayer1Count.bind(this)}
          handleIncrement={this.incrementPlayer1Count.bind(this)}
        />
        <Counter
          user="hafiz"
          count={this.state.player2Count}
          handleDecrement={this.decrementPlayer2Count.bind(this)}
          handleIncrement={this.incrementPlayer2Count.bind(this)}
        />
      </div>
    );
  }

  incrementPlayer1Count() {
    this.setState({ player1Count: this.state.player1Count + 1 });
  }

  decrementPlayer1Count() {
    this.setState({ player1Count: this.state.player1Count - 1 });
  }

  incrementPlayer2Count() {
    this.setState({ player2Count: this.state.player2Count + 1 });
  }

  decrementPlayer2Count() {
    this.setState({ player2Count: this.state.player2Count - 1 });
  }
}

export default TotalScore;
