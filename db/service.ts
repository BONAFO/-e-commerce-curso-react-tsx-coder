import mock from "./mock/service";
import neon from "./neon/service";          

console.log(neon.getProducts());


export const MODE = "mock";

const service = {
  mock,
  // neon,
};

export default service;
