import { useEffect, useState } from "react";
import service, { MODE } from "@/db/service";
import GameType from "@/types/games";

const { getProductsByCatName } = service[MODE];

export default function ProductsByCategorieName({ isDepend = false, name }: { isDepend?: unknown; name: string }) {
  const [products, setProducts] = useState<GameType[] | null>(null);
  const [spinner, setSpinner] = useState<boolean>(true);

  const handleError = (response: unknown) => { setSpinner(false); throw Error(String(response)); };
  const handleSuccess = (response: { status: number; data: GameType[] }) => {
    setSpinner(false);
    setProducts([...response.data]);
  };

  useEffect(() => {
    setSpinner(true);
    getProductsByCatName(name)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [typeof isDepend == "boolean" ? (isDepend == false ? undefined : products) : isDepend]);

  return { setProducts, products, spinner, setSpinner };
}
