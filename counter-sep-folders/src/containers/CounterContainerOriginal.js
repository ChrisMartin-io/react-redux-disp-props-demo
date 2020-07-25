// this file is only here to demonstrate the syntax for 
// defining mapDispatchToProps as a function rather than an object.

import { connect } from "react-redux";
import {
  increment,
  decrement
} from "../actions";
import Counter from "../components/Counter";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connected(Counter);
