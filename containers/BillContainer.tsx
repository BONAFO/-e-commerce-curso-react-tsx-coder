"use client";

import React from "react";
import { BillCart } from "@/components/Bill";
import  BillEmptyCart  from "@/components/BillEmptyCart";
import { useCart } from "@/context/CartContext";

export default function BillContainer(): React.ReactElement {
  const { cart } = useCart();

  return cart.length === 0 ? <BillEmptyCart /> : <BillCart />;
}
