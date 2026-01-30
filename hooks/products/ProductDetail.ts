import { useCart } from "@/context/CartContext";
import GameType from "@/types/games";
import { useState } from "react";



export default function useProductDetailHook (product: GameType & { stock?: number }) {
  const { cart, setCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const inCart = cart.find((g: any) => g.id == product.id);

  const handleAddToCart = () => {
    const currentQty = inCart ? inCart.quantity : 0;
    const newQty = currentQty + quantity;

    if (product.stock && newQty > product.stock) {
      alert("No puedes agregar más unidades que el stock disponible.");
      return;
    }

    const entry = { ...product, quantity: newQty, tprice: product.price * newQty };

    if (inCart) {
      setCart(cart.map((g: any) => (g.id == product.id ? entry : g)));
    } else {
      setCart([...cart, entry]);
    }
  };

  return { cart, setCart, quantity, setQuantity, inCart, handleAddToCart };
};