"use client";

import React from "react";
import { useParams } from "next/navigation"; // 👈 en Next.js
import { SearchOrder } from "@/components/SearchOrder";
import ShowOrder from "@/components/ShowOrder";

export default function ShowOrderContainer(): React.ReactElement {
  const params = useParams();
  const orderID = params?.orderID as string | null;

  return (
    <>
      {orderID == null ? <SearchOrder /> : <ShowOrder />}
    </>
  );
}
