import ItemGrid from '@/components/ItemGrid';
import prisma from '@/lib/prisma'; // Keep for now if needed, or better remove.
// Replacing with mock data
import { products } from '@/data/mockData';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturesSection from '@/components/FeaturesSection';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Mock data query
  const featuredItems = products
    .filter(item => item.featured)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 8);

  return (
    <div>
      <Hero />
      <CategoryGrid />
      
      {featuredItems.length > 0 && (
        <div style={{backgroundColor: '#fff', padding: '20px 0'}}>
           <ItemGrid title="Featured Products" items={featuredItems} />
        </div>
      )}
      
      <FeaturesSection />
    </div>
  );
}
