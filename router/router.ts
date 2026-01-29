export const routes = {
  mainPage: "/",
  mainPageCategories: "/categorias",
  mainPageCategorie: (id: string | number) => `/categorias/${id}`,
  productDetail: (productID: string | number) => `/game/${productID}`,
  productBill: "/products/bill",
  productPay: "/products/pay",
  contact: "/contact",
  newOrder: (orderID: string | number) => `/order/new/${orderID}`,
  showOrder: (orderID: string | number) => `/order/${orderID}`,
  searchOrder: "/order",
};
