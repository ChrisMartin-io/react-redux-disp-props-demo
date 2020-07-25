import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }
  up()   { this.props.increment(); }
  down() { this.props.decrement(); }

  render() {
    return (
      <div>
        <h2>Count is: {this.props.count}</h2>
        <button onClick={this.up}> + </button>
        <button onClick={this.down}> - </button>
      </div>
    );
  }
}
// end

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment: () => (
    { type: "INCREMENT" }),
  decrement: () => (
    { type: "DECREMENT" }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
