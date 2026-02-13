"use client";

import PayInfoType from "@/types/payInfo";
import React, { createContext, useContext, useState } from "react";

interface SetPayInfo {
  setPayProcessor: React.Dispatch<React.SetStateAction<string>>;
  setPayMethod: React.Dispatch<React.SetStateAction<number | string>>;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setCVV: React.Dispatch<React.SetStateAction<string>>;
  setDNI: React.Dispatch<React.SetStateAction<string>>;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

interface PayContextType {
  payInfo: PayInfoType;
  setPayInfo: SetPayInfo;
  clearPay: () => void; // 👈 función de reset
}

const PayContext = createContext<PayContextType | undefined>(undefined);

export const usePay = () => {
  const ctx = useContext(PayContext);
  if (!ctx) {
    throw new Error("usePay must be used within a PayProvider");
  }
  return ctx;
};

export default function PayProvider({ children }: { children: React.ReactNode }) {
  const [payProcessor, setPayProcessor] = useState<string>("");
  const [payMethod, setPayMethod] = useState<string | number>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [CVV, setCVV] = useState<string>("");
  const [DNI, setDNI] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // 👇 Reset exclusivo de este contexto
  const clearPay = () => {
    setPayProcessor("");
    setPayMethod("");
    setCardNumber("");
    setCVV("");
    setDNI("");
    setFullName("");
    setPhone("");
    setEmail("");
    setAddress("");
  };

  return (
    <PayContext.Provider
      value={{
        payInfo: {
          payProcessor,
          payMethod,
          cardNumber,
          CVV,
          DNI,
          fullName,
          phone,
          email,
          address,
        },
        setPayInfo: {
          setPayProcessor,
          setPayMethod,
          setCardNumber,
          setCVV,
          setDNI,
          setFullName,
          setPhone,
          setEmail,
          setAddress,
        },
        clearPay, // 👈 expuesto en el contexto
      }}
    >
      {children}
    </PayContext.Provider>
  );
}
