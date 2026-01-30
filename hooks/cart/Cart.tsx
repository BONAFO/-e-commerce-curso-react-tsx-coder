"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartType from "@/types/cart";

export default function useCartHook() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { cart, setCart } = useCart();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const eliminarUnidad = (index: number) => {
    setCart((prev: CartType[]) => {
      const updated = [...prev];
      const item = updated[index];

      if (item.quantity > 1) {
        updated[index] = {
          ...item,
          quantity: item.quantity - 1,
          tprice: item.price * (item.quantity - 1),
        };
      } else {
        updated.splice(index, 1);
      }

      return updated;
    });
  };

  const eliminarStack = (index: number) => {
    setCart((prev: CartType[]) => prev.filter((_, i) => i !== index));
  };

  return {
    anchorEl,
    setAnchorEl,
    cart,
    setCart,
    handleOpen,
    handleClose,
    eliminarUnidad,
    eliminarStack,
  };
}
