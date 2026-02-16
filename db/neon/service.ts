import { sql } from "./db";

export async function testConnection() {
  const result = await sql`SELECT NOW();`;
  console.log("DB responde:", result);
}


