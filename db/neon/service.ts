import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  const result = await sql`SELECT NOW();`;
  return NextResponse.json({ dbTime: result[0].now });
}
