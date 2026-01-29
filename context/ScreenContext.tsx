"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import ScreenContextType from "@/types/context/screenContext";

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const useScreen = (): ScreenContextType => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("useScreen debe usarse dentro de ScreenProvider");
  }
  return context;
};

interface ScreenProviderProps {
  children: ReactNode;
}

export default function ScreenProvider({
  children,
}: ScreenProviderProps): React.ReactElement {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // función para detectar si es mobile
    const checkMobile = () => {
      setIsMobile(window.innerHeight > window.innerWidth);
    };

    checkMobile(); // inicializa al montar
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
}
