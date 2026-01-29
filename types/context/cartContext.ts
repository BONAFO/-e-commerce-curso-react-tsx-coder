import {
  Dispatch,
  SetStateAction,
} from "react";
import CartType from "@/types/cart";



export default interface CartContextType {
  cart: CartType[];
  setCart: Dispatch<SetStateAction<CartType[]>>;
}
