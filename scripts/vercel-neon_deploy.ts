import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import products from "./products.json" assert { type: "json" };



const sql = neon(process.env.DATABASE_URL!);




async function insertProducts() {
  try {
    for (const p of products) {
      await sql`
        INSERT INTO Games (name, img, price, description, stock, category)
        VALUES (${p.name}, ${p.img}, ${p.price}, ${p.description}, ${p.stock}, ${p.category})
        ON CONFLICT DO NOTHING;
      `;
      console.log(`✅ Insertado: ${p.name}`);
    }
  } catch (err) {
    console.error("❌ Error insertando productos:", err);
  }
}



async function deploy() {
  try {
    let resp;

    // Categories
    resp = await sql`CREATE TABLE IF NOT EXISTS Categories (
      id SERIAL PRIMARY KEY,
      name_es TEXT NOT NULL,
      normalized_es TEXT NOT NULL,
      name_en TEXT NOT NULL,
      normalized_en TEXT NOT NULL
    );`;
    console.log("Categories -> Table",resp);

    // Games
    resp = await sql`CREATE TABLE IF NOT EXISTS Games (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      img TEXT,
      price NUMERIC NOT NULL,
      description TEXT,
      category INTEGER[] NOT NULL,
      stock INTEGER NOT NULL
    );`;
    console.log("Games -> Table",resp);

    // Orders con products como INTEGER[][]
    // products INTEGER[][] -> {game_id, quantity}
    resp = await sql`CREATE TABLE IF NOT EXISTS Orders (
      id SERIAL PRIMARY KEY,
      address TEXT NOT NULL,
      cardNumber TEXT NOT NULL,
      dni TEXT NOT NULL,
      email TEXT NOT NULL,
      finalImport NUMERIC NOT NULL,
      fullName TEXT NOT NULL,
      payMethod TEXT NOT NULL,
      payProcessor TEXT NOT NULL,
      phone TEXT NOT NULL,
      products INTEGER[][] NOT NULL
    );`;
    console.log("Orders -> Table",resp);

    await insertProducts();

  } catch (err) {
    console.error("❌ Error creando tablas:", err);
  }
}

deploy();
