import { useEffect, useState } from "react";
import service, { MODE } from "@/db/service";
import GameType from "@/types/games";

const { getProductsByName } = service[MODE];

export default function InputSearch({ isDepend = false, name = "" }: { isDepend?: unknown; name?: string }) {
  const [products, setProducts] = useState<GameType[] | null>(null);
  const [input, setInput] = useState<string>("");
  const [wait, setWait] = useState<string | null>(null);
  const [searching, setSearching] = useState<boolean>(false);

  const handleError = (response: unknown) => { throw Error(String(response)); };
  const handleSuccess = (response: { status: number; data: GameType[] }) => {
    setProducts([...response.data]);
  };

  useEffect(() => {
    getProductsByName(name)
      .then((resp) => handleSuccess(resp))
      .catch((err) => handleError(err));
  }, [typeof isDepend == "boolean" ? (isDepend == false ? undefined : products) : isDepend]);

  return { products, setProducts, input, setInput, wait, setWait, searching, setSearching };
}
