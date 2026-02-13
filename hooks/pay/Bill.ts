"use client";

import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { usePay } from "@/context/PayContext";
import { payFormSelection } from "@/functions/payValidations";

import service, { MODE } from "@/db/service";

import { routes } from "@/router/router";
import { useRouter } from "next/navigation";
import { payMethods, usePayInfo } from "./PayInfo";

const { saveSell } = service[MODE];

export const useBillHook = () => {
  const { cart, setCart } = useCart();
  const [spinner, setSpinner] = useState(false);
  const { payMethod } = usePayInfo();
  const { payInfo } = usePay();
  const router = useRouter();

  const handleRemoveOne = (productID: string) => {
    setCart((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((item) => item.id === productID);
      if (index !== -1) {
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
      }
      return updated;
    });
  };

  const handleRemoveStack = (productID: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productID));
  };

  const handleSaveBill = async () => {
    const sell = {
      products: cart.map((pro) => ({ id: pro.id, quantity: pro.quantity })),
      finalImport: cart.reduce((to, item) => to + item.tprice, 0),
      ...payFormSelection(payInfo),
    };

    const newStock = cart.map((pro) => ({
      id: pro.id,
      stock: pro.stock - pro.quantity,
    }));

    setSpinner(true);
    const response = await saveSell(sell, newStock);
    window.location.href = routes.newOrder(response.data);
  };

  const handleEmptyCart = () => setCart([]);

  const total = cart.reduce((to, item) => to + item.tprice, 0);
  const method = payMethods.find((m) => m.id === payMethod);

  const handleCancelBIll = () => {
    const confirmCancel = window.confirm(
      "¿Seguro que deseas cancelar la compra?",
    );
    if (confirmCancel) {
      router.push(routes.mainPage);
    }
  };

  return {
    cart,
    setCart,
    handleRemoveOne,
    handleRemoveStack,
    handleEmptyCart,
    total,
    method,
    handleCancelBIll,
    spinner,
    setSpinner,
    handleSaveBill,
  };
};
