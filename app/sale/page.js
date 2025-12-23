import ItemGrid from '@/components/ItemGrid';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function SalePage() {
  const saleItems = await prisma.product.findMany({
    where: {
      isGift: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <main>
      <div style={{backgroundColor: '#FFE5B4', padding: '60px 0', textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{fontSize: '3rem', fontWeight: '800', color: '#D32F2F', marginBottom: '10px'}}>FLASH SALE</h1>
        <p style={{fontSize: '1.2rem', color: '#B71C1C'}}>Up to 50% OFF on selected items. Limited time only!</p>
      </div>
      
      <div className="container">
        <ItemGrid title="Hot Deals" items={saleItems} />
      </div>
    </main>
  );
}
