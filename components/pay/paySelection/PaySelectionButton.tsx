"use client";

import React from "react";
import { Button } from "@mui/material";
import { usePayInfo, useSetPayInfo } from "@/hooks/pay/PayInfo";
import  PayMethodType from "@/types/payMethods";

interface PaySelectionButtonProps {
  payMethodData: PayMethodType;
  setPayForm: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const PaySelectionButton: React.FC<PaySelectionButtonProps> = ({
  payMethodData,
  setPayForm,
}) => {
  const { payMethod } = usePayInfo();
  const { setPayMethod } = useSetPayInfo();

  return (
    <Button
      color="secondary"
      onClick={() => {
        setPayForm(payMethodData.compo);
        setPayMethod(payMethodData.id);
      }}
      variant={payMethod === "credito" ? "contained" : "outlined"}
    >
      {payMethodData.text}
    </Button>
  );
};

export default PaySelectionButton;
