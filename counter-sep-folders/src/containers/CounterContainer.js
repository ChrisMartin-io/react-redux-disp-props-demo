import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import Counter from "../components/Counter";

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { increment, decrement }
);

export default connectedComponent(Counter);
