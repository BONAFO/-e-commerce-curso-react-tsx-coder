"use client";

import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { routes } from "@/router/router";
import Link from "next/link";
import { usePayInfo } from "@/hooks/pay/PayInfo";

const PayButtons: React.FC = () => {
  const { payMethod } = usePayInfo();

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, textAlign: "center" }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="outlined"
          color="error"
          component={Link} 
          href={routes.mainPage} 
        >
          Volver a la tienda
        </Button>
        {payMethod && (
          <Button type="submit" variant="outlined" color="primary">
            Procesar pago
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default PayButtons;
