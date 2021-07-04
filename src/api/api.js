import mockedData from "../mockedData";

const getAllItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedData);
    }, 400);
  });
};

export default {
  getAllItems,
};
