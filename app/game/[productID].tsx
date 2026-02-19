"use client";

import NavBar from "@/components/navBar/NavBar";
import ItemDetailContainer from "@/containers/ProductPage";
import { useQuery } from "@/router/router";

export default function ProductPage(): React.ReactElement {
  //@ts-ignore
  const params = useQuery();
  return (
    <>
      <NavBar />
      <ItemDetailContainer params={params} />
    </>
  );
}
