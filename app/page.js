
import Hero from '@/components/Hero';
import ItemGrid from '@/components/ItemGrid';
import FeaturesSection from '@/components/FeaturesSection';
import CategoryRow from '@/components/CategoryRow';
import { items } from '@/data/items';

export default function Home() {
  const newArrivals = items.filter(item => item.category === 'new');
  const offers = items.filter(item => item.category === 'offer' || item.category === 'gift');
  const popular = items.filter(item => item.category === 'popular');

  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CategoryRow />
      
      <div id="items">
        {newArrivals.length > 0 && <ItemGrid title="Latest Arrivals" items={newArrivals} />}
        {offers.length > 0 && <ItemGrid title="Special Offers & Gifts" items={offers} />}
        {popular.length > 0 && <ItemGrid title="Travelers' Choice" items={popular} />}
      </div>
    </div>
  );
}
