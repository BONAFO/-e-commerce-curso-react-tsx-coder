export default interface GameType {
  id: number | string;
  name: string;
  img: string;
  price: number;
  description: string;
  category: number[] | string;
  stock: number;
}
