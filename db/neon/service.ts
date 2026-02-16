import { neon } from "@neondatabase/serverless";

export async function testConnection() {
  console.log("sda", process.env.ENV_TEST!);

  const sql = neon(process.env.DATABASE_URL!);
  const result = await sql`SELECT NOW();`;
  console.log("DB responde:", result);
}
