import * as api from "./../api/users";

export default (state = { users: [], message: "" }, action) => {
  console.log(`usersReducer handling action.type ${action.type}`, action);

  switch (action.type) {
    case "GET_ALL":
      return { users: api.getAllUsersSync() }; // WORKS
    // return api.getAllUsersAsync().then(users => users);  // Doesn't work :-)
    // Here they show redux-thunk as one popular solution:
    // https://redux.js.org/advanced/async-actions (very good read!)
    // Redux-sagas is the way THIS app will use it, following this:
    // https://github.com/redux-saga/redux-saga

    // case "GET_ALL_REQUESTED":
    //   // We will get here when this action is dispatched,
    //   // BUT this action will also get handled by sagas like this:
    //   // One watcherSaga will "watch" out for this action. When it sees it it will run a workerSaga.
    //   // The workerSaga will then dispatch a new action GET_ALL_SUCCEEDED or GET_ALL_FAILED,
    //   // depending on resolve/reject from Promise. These action dispatched by worker saga are handled below:
    //   return null;
    case "GET_ALL_SUCCEEDED":
      return { users: action.users };
    case "GET_ALL_FAILED":
      return { message: action.message };
    default:
      return state;
  }
};
