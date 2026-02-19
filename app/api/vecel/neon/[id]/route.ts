import { NextResponse } from "next/server";
import sql from "@/db/neon/db";
import GameType from "@/types/games";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const rows = await sql`SELECT * FROM Games WHERE id = ${params.id};`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en GET /products/[id]:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
