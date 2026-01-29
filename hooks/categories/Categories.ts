import { useEffect, useState } from "react";
import service, { MODE } from "@/db/service";
import CategoryType from "@/types/categories";

const { getCategories } = service[MODE];

interface UseCategoriesProps {
  isDepend?: unknown;
}

interface CategoriesResponse {
  status: number;
  data: CategoryType[];
}

export default function useCategories({ isDepend = false }: UseCategoriesProps) {
  const [categories, setCategories] = useState<CategoryType[] | null>(null);
  const [spinner, setSpinner] = useState<boolean>(true);

  const handleError = (response: unknown) => {
    setSpinner(false);
    throw Error(String(response));
  };

  const handleSuccess = (response: CategoriesResponse) => {
    setSpinner(false);
    setCategories([...response.data]);
  };

  useEffect(() => {
    setSpinner(true);
    getCategories()
      .then((resp: CategoriesResponse) => handleSuccess(resp))
      .catch((err: unknown) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend == false
        ? undefined
        : categories
      : isDepend,
  ]);

  return {
    setCategories,
    categories,
    spinner,
    setSpinner,
  };
}
