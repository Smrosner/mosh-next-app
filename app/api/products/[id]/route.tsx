import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

interface Props {
  params: {
    id: number;
    name: string;
    price: number;
  };
}

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
      name: string;
      price: number;
    };
  }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not fount" }), { status: 404 };

  return NextResponse.json(product);
}
