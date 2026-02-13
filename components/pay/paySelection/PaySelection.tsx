"use client";

import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import PayButtons from "../PayButtons";
import PaySelectionButton from "./PaySelectionButton";
import PayMethodType from "@/types/payMethods";
import { payMethods } from "@/hooks/pay/PayInfo";
import { usePaySubmit } from "@/hooks/pay/PaySubmit";

const PaySelection: React.FC = () => {
  const { handleSubmit } = usePaySubmit();

  const [payForm, setPayForm] = useState<React.ReactNode>(null);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography sx={{ color: "#ffffff", textAlign: "center" }} variant="h5">
        Registrar pedido
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        {payMethods.map((pm: PayMethodType) => (
          <PaySelectionButton
            key={`pay-button-${pm.id}`}
            setPayForm={setPayForm}
            payMethodData={pm}
          />
        ))}
      </Stack>

      <form onSubmit={handleSubmit}>
        {payForm}
        <PayButtons />
      </form>
    </Box>
  );
};

export default PaySelection;
