import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>The count is: {this.props.count}</h2>
        <button onClick={this.props.increment}> + </button>
        <button onClick={this.props.decrement}> - </button>
      </div>
    );
  }
}

export default Counter;
