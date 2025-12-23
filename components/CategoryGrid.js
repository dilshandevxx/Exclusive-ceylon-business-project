import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Cakes', image: '/images/hero-1.jpg', slug: 'cakes' },
  { name: 'Flowers', image: '/images/hero-2.jpg', slug: 'flowers' },
  { name: 'Chocolates', image: '/images/hero-3.jpg', slug: 'chocolates' },
  { name: 'Clothing', image: '/images/hero-1.jpg', slug: 'clothing' },
  { name: 'Electronics', image: '/images/hero-2.jpg', slug: 'electronics' },
  { name: 'Fashion', image: '/images/hero-3.jpg', slug: 'fashion' },
  { name: 'Food & Restaurants', image: '/images/hero-1.jpg', slug: 'food' },
  { name: 'Fruits', image: '/images/hero-2.jpg', slug: 'fruits' },
  { name: 'Soft Toys', image: '/images/hero-3.jpg', slug: 'toys' },
  { name: 'Grocery & Hampers', image: '/images/hero-1.jpg', slug: 'grocery' },
  { name: 'Global Brands', image: '/images/hero-2.jpg', slug: 'global-brands' },
  { name: 'Home Appliances', image: '/images/hero-3.jpg', slug: 'home' },
  { name: 'Handicrafts', image: '/images/hero-1.jpg', slug: 'handicrafts' },
  { name: 'Wellness', image: '/images/hero-2.jpg', slug: 'wellness' },
];

export default function CategoryGrid() {
  return (
    <section className="category-section-kapruka">
      <div className="container">
        <div className="category-grid-kapruka">
          {categories.map((cat, index) => (
            <Link href={`/category/${cat.slug}`} key={index} className="category-item-kapruka">
              <div className="cat-img-wrapper">
                 {/* In a real app we'd use icons or specific product shots */}
                 <div className="cat-img-placeholder" style={{backgroundImage: `url('${cat.image}')`}}></div>
              </div>
              <span className="cat-name-kapruka">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
