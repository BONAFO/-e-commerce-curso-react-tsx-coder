import { NextRequest, NextResponse } from "next/server";
import sql from "@/db/neon/db";
import GameType from "@/types/games";

//mofificar para poder obtener el query
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const rows = await sql`SELECT * FROM games;`;
    return NextResponse.json({ status: 200, data: rows as GameType[] , test : searchParams.get("id"), req: [req]});
  } catch (err) {
    console.error("❌ Error en GET /products:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
