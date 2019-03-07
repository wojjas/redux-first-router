import React from "react";
import { connect } from "react-redux";

const Display = ({ count }) => {
  return <h4>Current Count: {count}</h4>;
};

const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};

export default connect(mapStateToProps)(Display);
