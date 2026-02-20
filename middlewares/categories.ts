import { NextResponse } from "next/server";
import sql from "@/db/neon/db";
import GameType from "@/types/games";

export async function getCategoryByID(id: string) {
  try {
    const rows = await sql`SELECT * FROM Games WHERE id = ${id};`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getCategoryByID:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}

export async function getCategoryByName(name: string) {
  try {
    const rows = await sql`
      SELECT * FROM Games WHERE LOWER(name) LIKE ${"%" + name.toLowerCase() + "%"};
    `;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getCategorysByName:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}

export async function getCategories() {
  try {
    const rows = await sql`SELECT * FROM Games;`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getCategorys:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
