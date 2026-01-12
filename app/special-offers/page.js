import ItemGrid from '@/components/ItemGrid';
import prisma from '@/lib/prisma';
// import { products } from '@/data/mockData';

export const dynamic = 'force-dynamic';

export default async function SpecialOffersPage() {
  // Fetch from DB
  const items = await prisma.product.findMany({
    where: { isGift: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main>
      <div style={{backgroundColor: '#FFEBEE', padding: '50px 0', textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: '800', color: '#C62828', marginBottom: '10px'}}>Special Offers & Gifts 🎁</h1>
        <p style={{fontSize: '1.1rem', color: '#B71C1C'}}>Curated gifts and exclusive deals just for you.</p>
      </div>
      
      <div className="container">
        <ItemGrid title="Exclusive Offers" items={items} />
      </div>
    </main>
  );
}
