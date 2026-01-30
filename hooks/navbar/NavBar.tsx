"use client";

import { useState, useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import DvrIcon from "@mui/icons-material/Dvr";
import { routes } from "@/router/router";
import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

// Tipo para cada página del navbar
interface NavPage {
  txt: string;
  icon: React.ReactElement;
  path: string;
}

export const useNavBarHook = () => {
  const pages: NavPage[] = [
    {
      txt: "inicio",
      icon: <HomeIcon />,
      path: routes.mainPage,
    },
    {
      txt: "buscar pedido",
      icon: <DvrIcon />,
      path: routes.searchOrder,
    },
    {
      txt: "contacto",
      icon: <EmailIcon />,
      path: routes.contact,
    },
  ];

  const searchRef = useRef<HTMLDivElement | null>(null);
  const [showStickySearch, setShowStickySearch] = useState(false);

  const darkTheme: Theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickySearch(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (searchRef.current) {
      observer.observe(searchRef.current);
    }

    return () => {
      if (searchRef.current) observer.unobserve(searchRef.current);
    };
  }, []);

  return {
    pages,
    searchRef,
    darkTheme,
    showStickySearch,
    setShowStickySearch,
  };
};
