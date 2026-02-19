import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
) {
 console.log("req",req);
 
  // acá simplemente devolvemos el param recibido
  return NextResponse.json({
    status: 200,
    param: "",
  });
}
