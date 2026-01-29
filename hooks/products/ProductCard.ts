import { useState } from "react";
import { useCart } from "@/context/CartContext";
import GameType from "@/types/games";

export default function useProductCardHook(
  game: GameType & { stock?: number },
) {
  const { cart, setCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const inCart = cart.find((g: any) => g.id == game.id);

  const handleAddToCart = () => {
    const currentQty = inCart ? inCart.quantity : 0;
    const newQty = currentQty + quantity;

    if (game.stock && newQty > game.stock) {
      alert("No puedes agregar más unidades que el stock disponible.");
      return;
    }

    const entry = { ...game, quantity: newQty, tprice: game.price * newQty };

    if (inCart) {
      setCart(cart.map((g: any) => (g.id == game.id ? entry : g)));
    } else {
      setCart([...cart, entry]);
    }
  };

  return { cart, setCart, quantity, setQuantity, inCart, handleAddToCart };
}
