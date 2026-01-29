import { useEffect, useState } from "react";
import service, { MODE } from "@/db/service";
import GameType from "@/types/games";

const { getProducts, getProductsByCatID } = service[MODE];

export default function ProductsByCategorieID({ isDepend = false, id }: { isDepend?: unknown; id?: number }) {
  const [products, setProducts] = useState<GameType[] | null>(null);
  const [spinner, setSpinner] = useState<boolean>(true);

  const handleError = (response: unknown) => { setSpinner(false); throw Error(String(response)); };
  const handleSuccess = (response: { status: number; data: GameType[] }) => {
    setSpinner(false);
    setProducts([...response.data]);
  };

  useEffect(() => {
    setSpinner(true);
    const functionToUse = !id ? getProducts : getProductsByCatID;

    functionToUse(id as number)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [typeof isDepend == "boolean" ? (isDepend == false ? undefined : id) : isDepend]);

  return { setProducts, products, spinner, setSpinner };
}
