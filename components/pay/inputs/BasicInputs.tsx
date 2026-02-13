"use client";

import React from "react";
import { TextField } from "@mui/material";
import handleNumeric from "@/functions/handleNumeric";
import handleOnlyText from "@/functions/handleOnlyText";
import { usePayInfo, useSetPayInfo } from "@/hooks/pay/PayInfo";

const BasicInputs: React.FC = () => {
  const { DNI, fullName, phone, email, address } = usePayInfo();
  const { setDNI, setFullName, setPhone, setEmail, setAddress } = useSetPayInfo();

  // helper para extraer el input real
  const getInputValue = (e: React.FormEvent<HTMLDivElement>): string => {
    const input = e.currentTarget.querySelector("input");
    return input ? input.value : "";
  };

  return (
    <>
      <TextField
        required
        label="DNI (8 dígitos)"
        name="dni"
        type="number"
        variant="outlined"
        value={DNI}
        onInput={(e: React.FormEvent<HTMLDivElement>) => {
          setDNI(handleNumeric(getInputValue(e), 8));
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
      />

      <TextField
        required
        label="Nombre completo"
        variant="outlined"
        value={fullName}
        onInput={(e: React.FormEvent<HTMLDivElement>) => {
          setFullName(handleOnlyText(getInputValue(e), 100));
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
      />

      <TextField
        required
        label="Teléfono"
        variant="outlined"
        type="number"
        value={phone}
        onInput={(e: React.FormEvent<HTMLDivElement>) => {
          setPhone(handleNumeric(getInputValue(e), 32));
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
      />

      <TextField
        required
        label="Correo electrónico"
        type="email"
        variant="outlined"
        value={email}
        onInput={(e: React.FormEvent<HTMLDivElement>) => {
          const val = getInputValue(e);
          setEmail(val.slice(0, Math.min(val.length, 100)));
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
      />

      <TextField
        label="Domicilio de facturación"
        variant="outlined"
        value={address}
        onInput={(e: React.FormEvent<HTMLDivElement>) => {
          const val = getInputValue(e);
          setAddress(val.slice(0, Math.min(val.length, 255)));
        }}
        InputLabelProps={{ style: { color: "#e9e9e9a7" } }}
        InputProps={{ style: { color: "#e9e9e9a7" } }}
        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "blue" } } }}
      />
    </>
  );
};

export default BasicInputs;
