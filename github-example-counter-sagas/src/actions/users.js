export const getAllUsersSync = () => {
  return {
    type: "GET_ALL"
  };
};
export const getAllUsersAsync = () => {
  return {
    type: "GET_ALL_REQUESTED"
  };
};
