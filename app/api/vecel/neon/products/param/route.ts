import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { param: string } }
) {

  console.log(params);
  
  return NextResponse.json({
    status: 200,
    param: params.param,
  });
}
