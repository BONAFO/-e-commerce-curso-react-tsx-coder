import sql from "@/db/neon/db";
import GameType from "@/types/games";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { name: string } },
) {
  try {
    const rows = await sql`
      SELECT * FROM Games WHERE LOWER(name) LIKE ${"%" + params.name.toLowerCase() + "%"};
    `;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en GET /products/[name]:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
