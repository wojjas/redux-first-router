/**
 * This component will be both the dispatcher and subscriber to state change.
 * (Compare this with the Control and Display of the Counter where Control is dispatching and Display subscribing)
 */
import React from "react";
import { connect } from "react-redux";

import { getAllUsersSync, getAllUsersAsync } from "../../actions/users";

class Users extends React.Component {
  handleGetAllUsersSync = () => {
    //Dispatch plain Redux action!
    this.props.getAllUsersSync();
  };
  handleGetAllUsersAsync = () => {
    //Dispatch plain Redux action BUT one that redux-sagas is "watching" (waiting for / listening to / subscribing)!
    this.props.getAllUsersAsync();
  };

  render() {
    const { users, message } = this.props;

    return (
      <div>
        <h3>Users</h3>
        <input
          type="button"
          value="Get All Users Sync"
          onClick={this.handleGetAllUsersSync}
        />
        <input
          type="button"
          value="Get All Users Async"
          onClick={this.handleGetAllUsersAsync}
        />
        <hr />
        {users && users.length}
        {/* {message && <strong>{message}</strong>} */}
        {message}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    message: state.users.message
  };
};
const mapDispatchToProps = {
  getAllUsersSync,
  getAllUsersAsync: getAllUsersAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
