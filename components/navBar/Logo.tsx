"use client";

import { Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Logo(): React.ReactElement {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mr: 2,
        textDecoration: "none", // 👈 evita subrayado del link
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: "#ccc",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        Games
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 300,
          color: "#00bcd4",
          letterSpacing: "1px",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        Hunters
      </Typography>
    </Box>
  );
}
