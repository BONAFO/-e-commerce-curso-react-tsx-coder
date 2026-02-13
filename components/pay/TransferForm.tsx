"use client";
import { Box, Typography, Stack } from "@mui/material";
import BasicInputs from "./inputs/BasicInputs";

export default function TransferForm() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "#e9e9e9a7", textAlign: "center" }}
      >
        Transferencia bancaria
      </Typography>

      <Stack spacing={2}>
        <Box>
          <Typography variant="subtitle2" sx={{ color: "#e9e9e9a7" }}>
            Alias
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            mi.tienda.transferencia
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ color: "#e9e9e9a7" }}>
            CBU
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            1234567890123456789012
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ color: "#e9e9e9a7" }}>
            Correo Electrónico
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            payments@gameshunters.com
          </Typography>
        </Box>

        <BasicInputs />
      </Stack>
    </Box>
  );
}
