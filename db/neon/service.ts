import CategoryType from "@/types/categories";
import GameType from "@/types/games";
import OrderType from "@/types/orders";
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

const saveSell = async (
  sellData: any,
  stockData: { id: number | string; stock: number }[],
) => {
  try {
    //@ts-ignore
    sellData.products = sellData.products.map((pro) => [pro.id, pro.quantity]);

    const resp = await axios.post(`${vecel_neon_route}orders`, sellData, {
      headers: { "Content-Type": "application/json" },
    });
    return resp.data;
  } catch (err) {
    console.error("❌ Error saveSell:", err);
    return { status: 500, data: null };
  }
};

const getOrder = async (
  id: number | string,
): Promise<{ status: number; data: OrderType | null }> => {
  try {
    const resp = await axios.get(`${vecel_neon_route}orders?id=${id}`);
    if (resp.status == 200) {
      //@ts-ignore
      resp.data.data.products = resp.data.data.products.map((pro) => {
        return { id: pro[0], quantity: pro[1] };
      });

    }
    return resp.data;
  } catch (err) {
    console.error("❌ Error getOrder:", err);
    return { status: 500, data: null };
  }
};

export default {
  getProducts,
  getProductsByName,
  getProductsByID,
  getProductsByCatID,
  getProductsByCatName,
  getCategories,
  saveSell,
  getOrder,
};
