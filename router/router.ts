import { MODE } from "@/db/service";

export const useQuery = ["neon"];

// const isQueryMode = useQuery.includes(MODE);
const isQueryMode = useQuery.includes("neon");

export const routes = {
  mainPage: "/",
  mainPageCategories: "/categorias",
  mainPageCategorie: (id: string | number) =>
    `/categorias/${isQueryMode ? "?id=" : ""}${id}`,
  productDetail: (productID: string | number) =>
    `/game/${isQueryMode ? "?productID=" : ""}${productID}`,
  productBill: "/cart/bill",
  productPay: "/cart/pay",
  contact: "/contact",
  newOrder: (orderID: string | number) =>
    `/order/new/${isQueryMode ? "?orderID=" : ""}${orderID}`,
  showOrder: (orderID: string | number) =>
    `/order/${isQueryMode ? "?orderID=" : ""}${orderID}`,
  searchOrder: "/order",
};
