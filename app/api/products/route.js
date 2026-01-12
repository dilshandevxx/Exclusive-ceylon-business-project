import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        image: body.image || '/images/product-placeholder.jpg',
        category: body.category,
        isNewArrival: body.isNewArrival || false,
        isPopular: body.isPopular || false,
        isHot: body.isHot || false,
        isGift: body.isGift || false,
        featured: body.featured !== undefined ? body.featured : false,
        showInAll: body.showInAll !== undefined ? body.showInAll : true,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const isGift = searchParams.get('isGift');
  const isPopular = searchParams.get('isPopular');
  const isNewArrival = searchParams.get('isNewArrival');
  const isHot = searchParams.get('isHot');
  const showInAll = searchParams.get('showInAll');

  const where = {};
  if (isGift === 'true') where.isGift = true;
  if (isPopular === 'true') where.isPopular = true;
  if (isNewArrival === 'true') where.isNewArrival = true;
  if (isHot === 'true') where.isHot = true;
  if (showInAll === 'true') where.showInAll = true;

  try {
    const products = await prisma.product.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(products);
  } catch (error) {
     console.error("Error fetching products:", error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}
