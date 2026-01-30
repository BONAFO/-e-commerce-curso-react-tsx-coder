import { useEffect, useState } from "react";
import service, { MODE } from "@/db/service";
import GameType from "@/types/games";

const { getProductsByID } = service[MODE];

export default function ProductsByID({ isDepend = false, id }: { isDepend?: unknown; id: number | string }) {
  const [product, setProduct] = useState<GameType[] | null>(null);
  const [spinner, setSpinner] = useState<boolean>(true);

  const handleError = (response: unknown) => { setSpinner(false); throw Error(String(response)); };
  const handleSuccess = (response: { status: number; data: GameType[] }) => {
    setProduct([...response.data]);
    setSpinner(false);
  };

  useEffect(() => {
    setSpinner(true);
    getProductsByID(id)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [typeof isDepend == "boolean" ? (isDepend == false ? undefined : product) : isDepend]);

  return { setProduct, product, spinner, setSpinner };
}
