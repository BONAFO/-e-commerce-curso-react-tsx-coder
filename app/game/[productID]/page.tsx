"use client";

import NavBar from "@/components/navBar/NavBar";
import ItemDetailContainer from "@/containers/ProductPage";

export default function ProductPage() : React.ReactElement{
  return (<>
  <NavBar/>
  <ItemDetailContainer />
  </>);
}
