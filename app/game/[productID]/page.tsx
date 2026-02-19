"use client";

import NavBar from "@/components/navBar/NavBar";
import ItemDetailContainer from "@/containers/ProductPage";
import { useParams } from "next/navigation";

export default function ProductPage() : React.ReactElement{
  const params = useParams();
  return (<>
  <NavBar/>
  <ItemDetailContainer params={params}/>
  </>);
}
