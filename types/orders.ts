import GameType from "./games";

export default interface OrderType {
  id: number | string;
  address: string;
  cardNumber: string;
  dni: string;
  email: string;
  finalImport: string | number;
  fullName: string;
  payMethod: string | number;
  payProcessor: string;
  phone: string;
  products: GameType[] | Object[];
}

