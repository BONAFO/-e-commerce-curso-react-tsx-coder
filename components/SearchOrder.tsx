"use client";

import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Link from "next/link";
import { routes } from "@/router/router";

export function SearchOrder(): React.ReactElement {
  const [orderID, setOrderID] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOrderID(e.target.value);

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
        Buscar mi pedido
      </Typography>

      <TextField
        fullWidth
        value={orderID}
        placeholder="Ingrese su código de pedido"
        variant="outlined"
        onChange={handleChange}
        sx={{
          mb: 3,
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#fff" },
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          color="success"
          component={Link}
          href={routes.showOrder(orderID)}
          sx={{ fontSize: "18px" }}
        >
          Buscar
        </Button>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          href={routes.mainPage}
          sx={{ fontSize: "18px" }}
        >
          Volver a la tienda
        </Button>
      </Box>
    </Box>
  );
}
