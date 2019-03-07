import * as api from "./../api/users";

export default (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return api.getAllUsersSync();
    default:
      return state;
  }
};
