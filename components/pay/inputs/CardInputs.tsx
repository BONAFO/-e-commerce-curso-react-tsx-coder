"use client";

import React from "react";
import { Box, TextField, Stack } from "@mui/material";
import handleNumeric from "@/functions/handleNumeric";
import useCardInputHook from "@/hooks/pay/CardInput";
import { usePayInfo, useSetPayInfo } from "@/hooks/pay/PayInfo";

export default function CardInputs() {
  const { payProcessor, cardNumber, CVV } = usePayInfo();
  const { setCVV } = useSetPayInfo();
  const { cvvLength, handleCardChange, logos } = useCardInputHook();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box
        sx={{
          width: 48,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {payProcessor && (
          //@ts-ignore
          <Box
            component="img"
            //@ts-ignore
            src={logos[payProcessor]}
            alt={payProcessor}
            sx={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        )}
      </Box>

      <TextField
        required
        label="Número de tarjeta"
        value={cardNumber}
        onChange={handleCardChange}
        placeholder="0000 0000 0000 0000"
        variant="outlined"
        fullWidth
        slotProps={{
          htmlInput: {
            maxLength: 19,
          },
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" },
          },
        }}
      />

      <TextField
        required
        value={CVV}
        label="CVV"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCVV(handleNumeric(e.currentTarget.value, 4));
        }}
        variant="outlined"
        sx={{
          width: 100,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" },
          },
        }}
        slotProps={{
          htmlInput: {
            maxLength: cvvLength,
          },
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
      />
    </Stack>
  );
}
