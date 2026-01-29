import { useEffect, useState } from "react";
import service, { MODE } from "@/db/service";
import GameType from "@/types/games";

const { getProducts, getProductsByCatID, getProductsByCatName } = service[MODE];

export default function RouterCategories({ isDepend = false, id }: { isDepend?: unknown; id?: number | string }) {
  const [products, setProducts] = useState<GameType[] | null>(null);
  const [spinner, setSpinner] = useState<boolean>(true);

  const handleError = (response: unknown) => { setSpinner(false); throw Error(String(response)); };
  const handleSuccess = (response: { status: number; data: GameType[] }) => {
    setSpinner(false);
    setProducts([...response.data]);
  };

  useEffect(() => {
    !id
      ? getProducts()
          .then((resp) => handleSuccess(resp))
          .catch((err) => handleError(err))
      : getProductsByCatID(id as number)
          .then((resp) => {
            resp.data.length > 0
              ? handleSuccess(resp)
              : getProductsByCatName(id as string)
                  .then((resp) => handleSuccess(resp))
                  .catch((err) => handleError(err));
          })
          .catch((err) => handleError(err));
  }, [typeof isDepend == "boolean" ? (isDepend == false ? undefined : id) : isDepend]);

  return { setProducts, products, spinner, setSpinner };
}
