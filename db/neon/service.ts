import axios from "axios";

const vecel_neon_route = "/api/vecel/neon/";

const getProducts = async () => {
  const resp = await axios.get(`${vecel_neon_route}products`);
  console.log(resp.data);
};




export default {
  getProducts,

};
