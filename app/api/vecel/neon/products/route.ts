import {
  getProductByID,
  getProducts,
  getProductsByCatID,
  getProductsByCatName,
  getProductsByName,
} from "@/middlewares/products";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("id")) {
    return await getProductByID(searchParams.get("id") as string);
  }

  if (searchParams.get("name")) {
    return await getProductsByName(searchParams.get("name") as string);
  }

  if (searchParams.get("catID")) {
    return await getProductsByCatID(searchParams.get("catID") as string);
  }

  if (searchParams.get("catName")) {
    return await getProductsByCatName(searchParams.get("catName") as string);
  }

  return await getProducts();
}
