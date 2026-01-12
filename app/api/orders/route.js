import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET: Fetch orders for the logged-in user
export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: 'Error fetching orders' }, { status: 500 });
  }
}

// POST: Create a new order
export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { items, total, shippingAddress, paymentMethod } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items in order' }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        total: parseFloat(total),
        shippingAddress: shippingAddress || "Default Address",
        paymentMethod: paymentMethod || "Credit Card",
        status: "PROCESSING",
        items: {
          create: items.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            price: parseFloat(item.price)
          }))
        }
      },
      include: {
        items: true
      }
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
  }
}
