import { NextRequest, NextResponse } from "next/server";
import sql from "@/db/neon/db";
import GameType from "@/types/games";
import { NextApiRequest } from "next";

//mofificar para poder obtener el query
export async function GET(req: NextApiRequest) {
  
  
  try {
    const rows = await sql`SELECT * FROM games;`;
    return NextResponse.json({ status: 200, data: rows as GameType[] , req: [req.query]});
  } catch (err) {
    console.error("❌ Error en GET /products:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
