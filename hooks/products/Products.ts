import { useEffect, useState } from "react";
import service, { MODE } from "@/db/service";
import { useMsjs } from "@/context/LoadingMsjContext";
import GameType from "@/types/games";

const { getProducts } = service[MODE];

export default function Products({ isDepend = false }: { isDepend?: unknown }) {
  const [products, setProducts] = useState<GameType[] | null>(null);
  const [waitMsj, setMsj] = useState(useMsjs().loading);

  const handleError = (response: unknown) => { throw Error(String(response)); };
  const handleSuccess = (response: { status: number; data: GameType[] }) => {
    setProducts([...response.data]);
  };

  useEffect(() => {
    getProducts()
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [typeof isDepend == "boolean" ? (isDepend == false ? undefined : products) : isDepend]);

  return { setProducts, products, waitMsj, setMsj };
}
