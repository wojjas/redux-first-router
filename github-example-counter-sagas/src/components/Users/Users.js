/**
 * This component will be both the dispatcher and subscriber to state change.
 * (Compare this with the Control and Display of the Counter where Control is dispatching and Display subscribing)
 */
import React from "react";
import { connect } from "react-redux";

import { getAllUsers } from "../../actions/users";

class Users extends React.Component {
  handleGetAllUsers = () => {
    console.log("Request all users");
    //Dispatch action!
    this.props.getAllUsers();
  };

  render() {
    const { users } = this.props;

    return (
      <div>
        <h3>Users</h3>
        <input
          type="button"
          value="Get All Users"
          onClick={this.handleGetAllUsers}
        />
        <hr />
        {users && users.length}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = {
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
