import ItemGrid from '@/components/ItemGrid';
import { products } from '@/data/mockData';

export const dynamic = 'force-dynamic';

export default function TravelersChoicePage() {
  // Filter for popular items
  const popularItems = products.filter(item => item.isPopular);

  return (
    <main>
      <div style={{backgroundColor: '#E0F7FA', padding: '50px 0', textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: '800', color: '#006064', marginBottom: '10px'}}>Traveler's Choice 🌟</h1>
        <p style={{fontSize: '1.1rem', color: '#00838F'}}>Top-rated and most loved by our community.</p>
      </div>
      
      <div className="container">
        <ItemGrid title="Popular Selections" items={popularItems} />
      </div>
    </main>
  );
}
