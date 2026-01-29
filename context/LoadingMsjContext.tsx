"use client";

import { createContext, useContext, ReactNode } from "react";
import MsjsContextType from "@/types/context/msjsContext"; // 👈 importamos la interfaz

// El contexto puede ser undefined si se usa fuera del provider
const MsjsContext = createContext<MsjsContextType | undefined>(undefined);

export const useMsjs = (): MsjsContextType => {
  const context = useContext(MsjsContext);
  if (!context) {
    throw new Error("useMsjs debe usarse dentro de MsjsProvider");
  }
  return context;
};

interface MsjsProviderProps {
  children: ReactNode;
}

export default function MsjsProvider({
  children,
}: MsjsProviderProps): React.ReactElement {
  const value: MsjsContextType = {
    loading: "Cargando productos...",
    loading_one: "Cargando producto...",
    no_games: "No tenemos juegos de este tipo... Por ahora...",
  };

  return <MsjsContext.Provider value={value}>{children}</MsjsContext.Provider>;
}
