import { NextResponse } from "next/server";
import sql from "@/db/neon/db";
import GameType from "@/types/games";

export async function GET() {
  try {
    const rows = await sql`SELECT * FROM games;`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en GET /products:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
