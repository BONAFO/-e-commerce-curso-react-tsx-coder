"use client";

import { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  useMediaQuery,
  capitalize,
} from "@mui/material";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import Link from "next/link";
import { useParams } from "next/navigation";

import CategoryType from "@/types/categories";
import { routes } from "@/router/router"; // 👈 ajustá tu import según tu estructura

interface SidebarFilterProps {
  categories: CategoryType[];
}

export default function SidebarFilter({ categories }: SidebarFilterProps): React.ReactElement {
  const isMobile = useMediaQuery("(max-width:600px)");
  const params = useParams();
  const id = params?.id as string | undefined;
  const [collapsed, setCollapsed] = useState(isMobile);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  const lang = "es";

const getName = (cat: CategoryType, lang: string): string => {
  return lang == "es" ? cat.name_es : cat.name_en;
};

const sortedCategories = [...categories].sort((a, b) =>
  getName(a, lang).localeCompare(getName(b, lang))
);

  // Reordenar para que "todos" vaya primero
  const orderedCategories = [
    sortedCategories.find((cat) => cat.normalized_es == "todos")!,
    ...sortedCategories.filter((cat) => cat.normalized_es !== "todos"),
  ];

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "80vh",
        width: collapsed ? 60 : 240,
        bgcolor: "#121212",
        color: "#fff",
        borderRight: "1px solid #333",
        transition: "width 0.3s ease",
        overflow: "hidden",
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: collapsed ? "none" : "block" }}
        >
          Categorías
        </Typography>

        <IconButton onClick={toggleSidebar} sx={{ color: "#fff" }}>
          {collapsed ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
        </IconButton>
      </Box>

      <Divider sx={{ mb: 1, display: collapsed ? "none" : "block" }} />

<List sx={{ overflowY: "auto", maxHeight: "calc(80vh - 60px)" }}>
  {orderedCategories.map((cat) => {
    const isTodos = cat.normalized_es === "todos";

    return (
      <ListItemButton
        key={cat.id}
        component={Link}
        href={isTodos ? "/categorias" : routes.mainPageCategorie(String(cat.id))}
        sx={{ justifyContent: collapsed ? "center" : "flex-start" }}
      >
        <ListItemText
          primary={capitalize(cat[`name_${lang}` as keyof CategoryType] as string)}
          sx={{
            display: collapsed ? "none" : "block",
            color:
              id == String(cat.id) || (id == undefined && cat.name_es == "todos")
                ? "#a5e7ffff"
                : "#ffffff",
          }}
        />
      </ListItemButton>
    );
  })}
</List>

    </Box>
  );
}
