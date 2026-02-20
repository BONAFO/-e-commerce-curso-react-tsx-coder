import mock2 from "./mock/service";
import neon from "./neon/service";          



export const MODE = "mock";

const mock = mock2 
//@ts-ignore
mock.getProducts = neon.getProducts;
//@ts-ignore
mock.getProductsByID = neon.getProductsByID;
//@ts-ignore
mock.getProductsByName = neon.getProductsByName;
// //@ts-ignore
mock.getCategories = neon.getCategories;
//@ts-ignore
mock.getProductsByCatID = neon.getProductsByCatID;
//@ts-ignore
mock.getProductsByCatName = neon.getProductsByCatName;










const service = {
  mock,
  // neon,
};

export default service;
