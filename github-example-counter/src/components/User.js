import React from "react";
import { connect } from "react-redux";

const User = ({ userId }) => <h3>{`User ${userId}`}</h3>;
const mapStateToProps = ({ location }) => ({
  userId: location.payload.id
});

const ConnectedUser = connect(mapStateToProps)(User);

export { ConnectedUser as User };
