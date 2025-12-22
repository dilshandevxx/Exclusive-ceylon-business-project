
import Link from 'next/link';

export default function ItemCard({ item }) {
  // Mock visually interesting flags
  const isBestSeller = Math.random() > 0.8; 
  const hasFreeGift = Math.random() > 0.9;
  
  // Price formatting
  const priceVal = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
  const usPrice = (priceVal).toFixed(2);
  const sgPrice = (priceVal * 1.3).toFixed(2); 

  return (
    <div className="item-card">
      {isBestSeller && <div className="badge-bestseller">Best Seller</div>}
      {hasFreeGift && <div className="badge-free">Free Gift</div>}
      
      <div className="item-image-container">
        <Link href={`/items/${item.id}`} style={{display: 'block', height: '100%'}}>
             <img src={item.image} alt={item.name} className="item-image" />
        </Link>
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
