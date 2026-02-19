import GameType from "@/types/games";
import axios from "axios";

const vecel_neon_route = "/api/vecel/neon/";

const getProducts = async () => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products`);
    return { status: resp.status, data: resp.data.data  as GameType[] }
  } catch (error) {
    console.error(error)
  }
  
};




export default {
  getProducts,

};
