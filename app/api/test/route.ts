import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";


export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);
  const result = await sql`SELECT NOW();`;
  return NextResponse.json({ dbTime: result[0].now });
}
