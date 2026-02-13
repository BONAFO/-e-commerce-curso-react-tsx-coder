"use client";

import React from "react";
import { usePayInfo, useSetPayInfo } from "./PayInfo";

export default function useCardInputHook () {
  const { payProcessor } = usePayInfo();
  const { setCardNumber, setPayProcessor } = useSetPayInfo();

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(value);

    const raw = value.replace(/\s/g, "");
    if (/^4/.test(raw)) setPayProcessor("visa");
    else if (/^5[1-5]/.test(raw)) setPayProcessor("mastercard");
    else if (/^3[47]/.test(raw)) setPayProcessor("amex");
    else setPayProcessor("");
  };

  const logos = {
    visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1200px-Old_Visa_Logo.svg.png",
    mastercard:
      "https://cdn.iconscout.com/icon/free/png-256/free-mastercard-logo-icon-svg-download-png-2944982.png",
    amex: "https://uridan.shop/wp-content/plugins/woo-stripe-payment/assets/img/cards/amex.svg",
  };

  const cvvLength = payProcessor === "amex" ? 4 : 3;

  return { handleCardChange, logos, cvvLength };
};