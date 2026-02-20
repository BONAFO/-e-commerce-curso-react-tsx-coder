import mock2 from "./mock/service";
import neon from "./neon/service";

export const MODE = "mock";

const mock = mock2;
Object.keys(neon).map((k) => {
  //@ts-ignore
  mock[k] = neon[k];
});

const service = {
  mock,
  // neon,
};

export default service;
