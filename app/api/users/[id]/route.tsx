import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from db
  // If not found, return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
// Else return data
  return NextResponse.json({ id: 1, name: "Shay" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  // Validate the request body
  if (!body.name)
  // If invalid, return 400
return NextResponse.json({ error: "Name is required" }, { status: 400 });
// Fetch the user with the given id
if (params.id > 10)
// If doesn't exist, return 404
return NextResponse.json({ error: "User not found" }, { status: 404 });
// Update the user
// Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch user from db
  // If not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  // Delete user
  // Return 200
  return NextResponse.json({})
}