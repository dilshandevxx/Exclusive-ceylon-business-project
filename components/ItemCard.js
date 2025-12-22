
import Link from 'next/link';

export default function ItemCard({ item }) {
  // Mock discount for visual similarity to the user's request
  const originalPrice = item.price.replace('$', '') * 1.2; 
  
  return (
    <div className="item-card">
      <div className="item-image-container">
        <img src={item.image} alt={item.name} className="item-image" />
        <a 
          href={item.marketplaceLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cart-icon-btn"
          aria-label="Buy on Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </a>
      </div>
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <div className="item-price-row">
            <span className="item-price">{item.price}</span>
            <span className="item-original-price">${originalPrice.toFixed(0)}</span>
            <span className="item-discount">-20%</span>
        </div>
        <div className="item-meta">
            <span className="item-sold">150+ sold</span>
        </div>
      </div>
    </div>
  );
}
