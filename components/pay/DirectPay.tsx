"use client";

import { Box, Typography, Stack } from "@mui/material";
import BasicInputs from "./inputs/BasicInputs";

export default function DirectPay() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "#e9e9e9a7", textAlign: "center" }}
      >
        Pago en Efectivo
      </Typography>

      <Stack spacing={2}>
        <BasicInputs />
      </Stack>
    </Box>
  );
}
