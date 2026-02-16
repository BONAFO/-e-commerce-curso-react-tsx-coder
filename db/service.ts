import mock from "./mock/service";
import { testConnection } from "./neon/service";
// import neon from "./neon/service";          

testConnection()

export const MODE = "mock";

const service = {
  mock,
  // neon,
};

export default service;
