import GameType from "./games";

export  default interface CartType extends GameType {
  quantity: number; 
  tprice: number;   
}
