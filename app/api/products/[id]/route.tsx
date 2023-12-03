import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
    name: string;
    price: number;
  };
}

export function Get(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: number;
      name: string;
      price: number;
    };
  }
) {
  if (!params.id)
    return NextResponse.json({ error: "User not fount" }), { status: 404 };
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Bread", price: 3.5 },
  ]);
}
