"use client";
import React, { useState } from 'react';
import ItemCard from '@/components/ItemCard';
import { items } from '@/data/items';

export default function ItemsPage() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter || (filter === 'gift/offer' && (item.category === 'gift' || item.category === 'offer')));

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'popular', label: 'Popular' },
    { id: 'gift/offer', label: 'Gifts & Offers' },
  ];

  return (
    <div className="container" style={{ padding: '6rem 2rem 4rem' }}>
      
      {/* Shop Header */}
      <div className="shop-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title">Shop Collection</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Browse our premium selection of travel gear. Filter by category to find exactly what you need for your next adventure.
        </p>
        
        {/* Filter Buttons */}
        <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`btn ${filter === cat.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ 
                borderRadius: '30px', 
                minWidth: '120px', 
                color: filter === cat.id ? 'white' : 'var(--text-primary)',
                borderColor: filter === cat.id ? 'var(--accent)' : '#EAECEE'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Items Grid */}
      <div className="items-grid">
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      
      {filteredItems.length === 0 && (
         <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>No items found in this category.</p>
      )}
    </div>
  );
}
