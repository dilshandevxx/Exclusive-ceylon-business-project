import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function PUT(request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { address, phone, name } = body;

    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id
      },
      data: {
        address: address,
        phone: phone,
        name: name
      }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ error: 'Error updating profile' }, { status: 500 });
  }
}

export async function GET(request) {
    const session = await getServerSession(authOptions);
  
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: session.user.id }
        });
        
        // Don't send password back even if hashed
        const { password, ...userProfile } = user;
        
        return NextResponse.json(userProfile);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching profile' }, { status: 500 });
    }
}
