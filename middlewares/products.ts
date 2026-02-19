import { NextRequest, NextResponse } from "next/server";
import sql from "@/db/neon/db";
import GameType from "@/types/games";

export async function getProductByID(id: string) {
  try {
    const rows = await sql`SELECT * FROM Games WHERE id = ${id};`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getProductByID:", err);
    return { status: 500, data: [] };
  }
}

export async function getProductsByName(name: string) {
  try {
    const rows = await sql`
      SELECT * FROM Games WHERE LOWER(name) LIKE ${"%" + name.toLowerCase() + "%"};
    `;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getProductsByName:", err);
    return { status: 500, data: [] };
  }
}

export async function getProducts() {
  try {
    const rows = await sql`SELECT * FROM games;`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getProductsByName:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
