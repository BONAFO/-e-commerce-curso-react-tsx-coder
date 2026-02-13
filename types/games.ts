export default interface GameType {
  id: number | string;
  name: string;
  img: string;
  price: number;
  desc: string;
  category: number[] | string;
  stock: number;
}
