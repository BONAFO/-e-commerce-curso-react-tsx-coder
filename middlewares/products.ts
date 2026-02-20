import { NextResponse } from "next/server";
import sql from "@/db/neon/db";
import GameType from "@/types/games";

export async function getProductByID(id: string) {
  try {
    const rows = await sql`SELECT * FROM Games WHERE id = ${id};`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getProductByID:", err);
    return NextResponse.json({ status: 500, data: [] });
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
    return NextResponse.json({ status: 500, data: [] });
  }
}

export async function getProducts() {
  try {
    const rows = await sql`SELECT * FROM Games;`;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getProducts:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}

export async function getProductsByCatID(categorieID: string | number) {
  try {
    const rows = await sql`
      SELECT * FROM Games WHERE ${categorieID} = ANY(category);
    `;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getProductsByCatID:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}


export async function getProductsByCatName(categorieName: string) {
  try {
    const category = await sql`
      SELECT * FROM Categories 
      WHERE normalized_es = ${categorieName} 
         OR normalized_en = ${categorieName};
    `;

    if (!category.length) {
      return NextResponse.json({ status: 404, data: [] });
    }

    const categorieID = category[0].id;

    const rows = await sql`
      SELECT * FROM Games WHERE category = ${categorieID};
    `;
    return NextResponse.json({ status: 200, data: rows as GameType[] });
  } catch (err) {
    console.error("❌ Error en getProductsByCatName:", err);
    return NextResponse.json({ status: 500, data: [] });
  }
}
