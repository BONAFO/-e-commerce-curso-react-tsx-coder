"use client";

import { Box, Typography, Stack } from "@mui/material";
import { capitalize } from "@mui/material/utils";

import CardInputs from "./inputs/CardInputs";
import BasicInputs from "./inputs/BasicInputs";

interface CardFormProps {
  cardType: string;
}

export default function CardForm({ cardType }: CardFormProps) {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "#e9e9e9a7", textAlign: "center" }}
      >
        Tarjeta de {capitalize(cardType)}
      </Typography>

      <Stack spacing={2}>
        <CardInputs />
        <BasicInputs />
      </Stack>
    </Box>
  );
}
