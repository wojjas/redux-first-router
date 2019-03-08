export const getAllUsersAsync = (ms = 1500) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (flipACoin()) {
        return resolve(["Tom", "Sally", "John", "Adam", "Eve"]);
      } else {
        return reject(new Error("Failed to get any!"));
      }
    }, ms)
  );
};

export const getAllUsersSync = () => {
  return ["Tom", "Sally", "John"];
};

const flipACoin = () => Math.floor(Math.random() * 2) == 0;
