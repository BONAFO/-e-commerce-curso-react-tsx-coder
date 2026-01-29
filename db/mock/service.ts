import products from "./products.json";
import categories from "./categories.json";
import GameType from "@/types/games";
import CategoryType from "@/types/categories";

// Obtener todos los productos
const getProducts = async (): Promise<{ status: number; data: GameType[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = { status: 200, data: products as GameType[] };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
};

// Buscar productos por nombre
const getProductsByName = async (
  name: string
): Promise<{ status: number; data: GameType[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = {
        status: 200,
        data: (products as GameType[]).filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        ),
      };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
};

// Buscar producto por ID
const getProductsByID = async (
  id: number
): Promise<{ status: number; data: GameType[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = {
        status: 200,
        data: (products as GameType[]).filter((item) => item.id == id),
      };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
};

// Buscar productos por ID de categoría
const getProductsByCatID = async (
  categorieID: number
): Promise<{ status: number; data: GameType[] }> => {
  console.log("categorieID",typeof categorieID);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = {
        status: 200,
        data: (products as GameType[]).filter(
          (item) => item.categorie == categorieID
        ),
      };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
};

// Buscar productos por nombre de categoría
const getProductsByCatName = async (
  categorieName: string
): Promise<{ status: number; data: GameType[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const categorieID = (categories as CategoryType[]).find(
        (cat) => cat.normalized_es == categorieName
      )?.id;

      const resp = {
        status: 200,
        data: (products as GameType[]).filter(
          (item) => item.categorie == categorieID
        ),
      };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
};

// Obtener todas las categorías
const getCategories = async (): Promise<{ status: number; data: CategoryType[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = { status: 200, data: categories as CategoryType[] };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
};

// Guardar una venta (mock)
const saveSell = async (data: unknown): Promise<{ status: number; data: unknown }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = { status: 200, data };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
};

// Obtener una orden (mock)
const getOrder = async (
  orderID: number
): Promise<{ status: number; data: GameType[] | null }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = { status: 200, data: null };
      resp.status == 200 ? resolve(resp) : reject(resp);
    }, 2000);
  });
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
