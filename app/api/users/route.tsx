import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Shay" },
    { id: 2, name: "Brian" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // If invalid, return 400
  // postman post req http://localhost:3000/api/users
  if (!body.name)
  return NextResponse.json({ error: "Name is required" }, { status: 400 });
// Else, return 201
return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
