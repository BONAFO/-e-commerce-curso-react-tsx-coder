import {
  getProductByID,
  getProducts,
  getProductsByName,
} from "@/middlewares/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    if (searchParams.get("id")) {
      return await getProductByID(searchParams.get("id") as string);
    } else if (searchParams.get("name")) {
      return await getProductsByName(searchParams.get("name") as string);
    } else {
      return await getProducts();
    }
  } catch (err) {
    console.error("❌ Error en GET /products:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
