import GameType from "@/types/games";
import axios from "axios";

const vecel_neon_route = "/api/vecel/neon/";

const getProducts = async () => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products`);
    return resp.data;
  } catch (error) {
    console.error(error);
    return { status: 500, data: [] };
  }
};

// Obtener producto por ID
const getProductsByID = async (
  id: number | string,
): Promise<{ status: number; data: GameType[] }> => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products/${id}`);
    return resp.data;
  } catch (err) {
    console.error("❌ Error getProductByID:", err);
    return { status: 500, data: [] };
  }
};

export const cosa =async ()=>{
  const resp = await axios.get(`${vecel_neon_route}products/?id=1`);
  console.log("cpsa",resp.data);
  
}

cosa()

// Buscar productos por nombre
const getProductsByName = async (
  name: string,
): Promise<{ status: number; data: GameType[] }> => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products/${name}`);
    return resp.data;
  } catch (err) {
    console.error("❌ Error getProductsByName:", err);
    return { status: 500, data: [] };
  }
};

export default {
  getProducts,
  getProductsByName,
  getProductsByID,
  //   getProductsByCatID,
  //   getProductsByCatName,
  //   getCategories,
  //   saveSell,
  //   getOrder,
};
