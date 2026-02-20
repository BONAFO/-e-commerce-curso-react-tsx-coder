import { NextResponse } from "next/server";
import sql from "@/db/neon/db";
import CategoryType from "@/types/categories";

export async function getCategoryByID(id: string) {
  try {
    const rows = await sql`SELECT * FROM Categories WHERE id = ${id};`;
    return NextResponse.json({ status: 200, data: rows as CategoryType[] });
  } catch (err) {
    console.error("❌ Error en getCategoryByID:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}

export async function getCategoryByName(name: string) {
  try {
    const rows = await sql`
      SELECT * FROM Categories 
      WHERE LOWER(name_es) LIKE ${"%" + name.toLowerCase() + "%"}
         OR LOWER(name_en) LIKE ${"%" + name.toLowerCase() + "%"}
         OR LOWER(normalized_es) LIKE ${"%" + name.toLowerCase() + "%"}
         OR LOWER(normalized_en) LIKE ${"%" + name.toLowerCase() + "%"};
    `;
    return NextResponse.json({ status: 200, data: rows as CategoryType[] });
  } catch (err) {
    console.error("❌ Error en getCategoryByName:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}


export async function getCategories() {
  try {
    const rows = await sql`SELECT * FROM Categories;`;
    return NextResponse.json({ status: 200, data: rows as CategoryType[] });
  } catch (err) {
    console.error("❌ Error en getCategories:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
