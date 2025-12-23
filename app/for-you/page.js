import ItemGrid from '@/components/ItemGrid';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function ForYouPage() {
  const recommendedItems = await prisma.product.findMany({
    where: {
      OR: [
        { isPopular: true },
        { isNewArrival: true }
      ]
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <main>
      <div style={{backgroundColor: '#F3E5F5', padding: '50px 0', textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '10px'}}>Just For You</h1>
        <p style={{fontSize: '1.1rem', color: 'var(--text-secondary)'}}>Personalized picks based on your browsing history.</p>
      </div>
      
      <div className="container">
        <ItemGrid title="Recommended" items={recommendedItems} />
      </div>
    </main>
  );
}
