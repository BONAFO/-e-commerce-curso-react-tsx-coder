import { NextRequest, NextResponse } from "next/server";
import sql from "@/db/neon/db";
import { getOrder, saveOrder } from "@/middlewares/orders";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    //@ts-ignore
    return await saveOrder(body);
  } catch (err) {
    console.error("❌ Error en POST /orders:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderID = searchParams.get("id");
    return await getOrder(orderID as string);
  } catch (err) {
    console.error("❌ Error en GET /orders:", err);
    return NextResponse.json({ status: 500, data: null });
  }
}
