"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { routes } from "@/router/router";

export default function OrderNotFound(): React.ReactElement {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        width: "60%",
        marginLeft: "20%",
        marginTop: "50px",
        padding: 3,
        borderRadius: 2,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        ❌ Pedido no encontrado
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        No pudimos encontrar una orden con ese código. Por favor, revisa el
        número ingresado.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        href={routes.searchOrder}
        sx={{ fontSize: "18px" }}
      >
        Volver a buscar pedido
      </Button>
    </Box>
  );
}
