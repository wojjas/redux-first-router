import { NOT_FOUND } from "redux-first-router";

const components = {
  HOME: "Home",
  USER: "User",
  USERS: "Users",
  ABOUT: "About",
  COUNTER: "Counter",
  [NOT_FOUND]: "NotFound"
};

export default (state = "HOME", action = {}) => {
  // console.log(
  //   `pageReducer returns action.type: ${action.type},
  //   component: ${components[action.type]} old state: ${state}`,
  //   components[action.type] || state
  // );

  return components[action.type] || state;
};
