import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  const validation = schema.safeParse(body);
  // If invalid, return 400
  // postman post req http://localhost:3000/api/users
  if (!validation.success)
    return NextResponse.json(validation.error.errors), { status: 400 };
  // Else, return 201
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
