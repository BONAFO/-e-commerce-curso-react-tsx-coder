import "dotenv/config";
import { neon } from "@neondatabase/serverless";

async function deploy() {
  const sql = neon(process.env.DATABASE_URL!);
  try {
    let resp;
    resp = await sql`CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name_es TEXT NOT NULL,
      normalized_es TEXT NOT NULL,
      name_en TEXT NOT NULL,
      normalized_en TEXT NOT NULL
    );`;

    console.log(resp);

    resp = await sql`CREATE TABLE IF NOT EXISTS games (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      img TEXT,
      price NUMERIC NOT NULL,
      desc TEXT,
      category INTEGER[] NOT NULL,
      stock INTEGER NOT NULL
    );`;

    console.log(resp);

    resp = await sql`CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      address TEXT NOT NULL,
      cardNumber TEXT NOT NULL,
      dni TEXT NOT NULL,
      email TEXT NOT NULL,
      finalImport NUMERIC NOT NULL,
      fullName TEXT NOT NULL,
      payMethod TEXT NOT NULL,
      payProcessor TEXT NOT NULL,
      phone TEXT NOT NULL
    );`;

    console.log(resp);

    resp = await sql`CREATE TABLE IF NOT EXISTS order_products (
      order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
      game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
      quantity INTEGER NOT NULL,
      PRIMARY KEY (order_id, game_id)
    );`;

    console.log(resp);
  } catch (err) {
    console.error("❌ Error creando tablas:", err);
  }
}

deploy();
