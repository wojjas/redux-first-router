import React from "react";
import { connect } from "react-redux";

const Display = ({ count }) => {
  return <h2>Current Count: {count}</h2>;
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Display);
