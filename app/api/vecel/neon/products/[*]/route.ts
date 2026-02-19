import sql from "@/db/neon/db";
import GameType from "@/types/games";
import { NextResponse } from "next/server";

// Buscar producto por ID
async function getProductByID(
  id: string,
): Promise<{ status: number; data: GameType[] }> {
  try {
    const rows = await sql`SELECT * FROM Games WHERE id = ${id};`;
    return { status: 200, data: rows as GameType[] };
  } catch (err) {
    console.error("❌ Error en getProductByID:", err);
    return { status: 500, data: [] };
  }
}

// Buscar productos por nombre
async function getProductsByName(
  name: string,
): Promise<{ status: number; data: GameType[] }> {
  try {
    const rows = await sql`
      SELECT * FROM Games WHERE LOWER(name) LIKE ${"%" + name.toLowerCase() + "%"};
    `;
    return { status: 200, data: rows as GameType[] };
  } catch (err) {
    console.error("❌ Error en getProductsByName:", err);
    return { status: 500, data: [] };
  }
}

// Ruta principal
export async function GET(
  req: Request,
  { params }: { params: { id?: string; name?: string } },
) {
  if (params.id) {
    const resp = await getProductByID(params.id);
    return NextResponse.json(resp);
  } else if (params.name) {
    const resp = await getProductsByName(params.name);
    return NextResponse.json(resp);
  } else {
    return NextResponse.json({ status: 400, data: [] });
  }
}
