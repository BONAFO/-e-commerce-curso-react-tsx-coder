    "use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link"; // 👈 Next.js Link
import { routes } from "../router/router";

export default function BillEmptyCart(): React.ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#121212",
        color: "#fff",
        gap: 2,
      }}
    >
      <Typography variant="h4">Tu carrito está vacío 🛒</Typography>
      <br />
      <Button
        component={Link} // 👈 reemplazo NavLink por Link
        href={routes.mainPage}
        variant="contained"
        color="primary"
      >
        Volver a la tienda
      </Button>
    </Box>
  );
}
