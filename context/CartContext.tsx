"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import CartContextType from "@/types/context/cartContext";
import CartType from "@/types/cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
};

// Props del provider
interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({
  children,
}: CartProviderProps): React.ReactElement {
  const [cart, setCart] = useState<CartType[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
