import ItemGrid from '@/components/ItemGrid';
import { products } from '@/data/mockData';

export const dynamic = 'force-dynamic';

export default function LatestArrivalsPage() {
  // Filter for new arrival items and sort by newest first
  const newArrivals = products
    .filter(item => item.isNewArrival)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <main>
      <div style={{backgroundColor: '#F3E5F5', padding: '50px 0', textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: '800', color: '#7B1FA2', marginBottom: '10px'}}>Latest Arrivals 🆕</h1>
        <p style={{fontSize: '1.1rem', color: '#8E24AA'}}>Check out the newest additions to our collection.</p>
      </div>
      
      <div className="container">
        <ItemGrid title="Fresh Just For You" items={newArrivals} />
      </div>
    </main>
  );
}
