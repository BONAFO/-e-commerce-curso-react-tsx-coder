import CategoryType from "@/types/categories";
import GameType from "@/types/games";
import axios from "axios";

const vecel_neon_route = "/api/vecel/neon/";

const getProducts = async () => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products`);
    return resp.data;
  } catch (error) {
    console.error("❌ Error getProducts:", error);
    return { status: 500, data: [] };
  }
};

const getProductsByID = async (
  id: number | string,
): Promise<{ status: number; data: GameType[] }> => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products?id=${id}`);
    return resp.data;
  } catch (err) {
    console.error("❌ Error getProductByID:", err);
    return { status: 500, data: [] };
  }
};

const getProductsByName = async (
  name: string,
): Promise<{ status: number; data: GameType[] }> => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products?name=${name}`);
    return resp.data;
  } catch (err) {
    console.error("❌ Error getProductsByName:", err);
    return { status: 500, data: [] };
  }
};

const getCategories = async () => {
  try {
    const resp = await axios.get(`${vecel_neon_route}categories`);
    return resp.data;
  } catch (error) {
    console.error("❌ Error getCategories:", error);
    return { status: 500, data: [] };
  }
};

const getProductsByCatID = async (
  id: number | string,
): Promise<{ status: number; data: CategoryType[] }> => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products?catID=${id}`);
    return resp.data;
  } catch (err) {
    console.error("❌ Error getProductsByCatID:", err);
    return { status: 500, data: [] };
  }
};

const getProductsByCatName = async (
  name: string,
): Promise<{ status: number; data: CategoryType[] }> => {
  try {
    const resp = await axios.get(`${vecel_neon_route}products?catName=${name}`);
    return resp.data;
  } catch (err) {
    console.error("❌ Error getProductsByCatName:", err);
    return { status: 500, data: [] };
  }
};


// Guardar una venta (mock)
const saveSell = async (
  sellData: any,
  stockData: { id: number | string; stock: number }[],
) => {

  // sellData.products = sellData.products.map(pro => [pro.id,pro.quantity]); 

  console.log(sellData.products);
  
  return { status: 200, data: "dsuasdhasdyha12" };
};



export default {
  getProducts,
  getProductsByName,
  getProductsByID,
  getProductsByCatID,
  getProductsByCatName,
  getCategories,
    saveSell,
  //   getOrder,
};
