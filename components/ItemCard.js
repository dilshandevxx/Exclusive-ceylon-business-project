"use client";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ItemCard({ item }) {
  const { addToCart } = useCart();

  // Use properties for flags instead of random values to avoid hydration errors
  const isHot = item.isHot;
  const isPopular = item.isPopular || item.category === 'popular';
  
  // Price formatting
  const priceVal = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
  const usPrice = (priceVal).toFixed(2);
  const sgPrice = (priceVal * 1.3).toFixed(2); 

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent navigating if wrapped in Link
    addToCart({
      id: item.id,
      name: item.name,
      price: priceVal,
      image: item.image
    });
    // Optional: Add toast or visual feedback here
    alert("Added to cart!");
  };

  return (
    <div className="item-card">
      {isHot && <div className="badge-hot" style={{
         position: 'absolute', top: '10px', left: '10px', 
         backgroundColor: '#ff4d4f', color: 'white', 
         padding: '4px 12px', borderRadius: '4px', 
         fontSize: '0.8rem', fontWeight: 'bold', zIndex: 5
      }}>HOT</div>}
      
      {isPopular && <div className="badge-popular" style={{
         position: 'absolute', top: '10px', right: '10px', // Right side to avoid collision if both exist
         backgroundColor: '#faad14', color: 'black', 
         padding: '4px 12px', borderRadius: '4px', 
         fontSize: '0.8rem', fontWeight: 'bold', zIndex: 5
      }}>Popular</div>}
      
      <div className="item-image-container">
        <Link href={`/items/${item.id}`} style={{display: 'block', height: '100%'}}>
             <img src={item.image} alt={item.name} className="item-image" />
        </Link>
        {/* Floating Add Button */}
        <button 
          onClick={handleAdd}
          className="card-add-btn"
          title="Add to Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
      
      <div className="item-details">
        <Link href={`/items/${item.id}`} style={{textDecoration:'none'}}>
          <h3 className="item-name">{item.name}</h3>
        </Link>
        <div className="item-price-row">
            <span className="item-price">US${usPrice}</span>
            <span className="price-secondary">(SG${sgPrice})</span>
        </div>
      </div>
    </div>
  );
}
