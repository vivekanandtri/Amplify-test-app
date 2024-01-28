import { NextResponse } from "next/server";

export async function GET(request:any) {
  return NextResponse.json([272207, 502557, 216351, 222222], { status: 200 });
}