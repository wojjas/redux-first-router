export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("All users gotten!");
      resolve(["Tom", "Sally", "John"]);
    }, 1000);
  });
};

export const getAllUsersSync = () => {
  console.log("All users gotten!");
  return ["Tom", "Sally", "John"];
};
