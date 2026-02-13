"use client";

import React from "react";

import { usePay } from "@/context/PayContext";
import {

  payValidationsForm,
} from "@/functions/payValidations";

import { routes } from "@/router/router";
import { useRouter } from "next/navigation";




export const usePaySubmit = () => {
  const { payInfo } = usePay();
  const router = useRouter();

  return {
    handleSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validator = payValidationsForm(payInfo);
      if (validator) {
        router.push(routes.productBill);
      } else {
        throw Error("Información en el form inválida");
      }
    },
  };
};