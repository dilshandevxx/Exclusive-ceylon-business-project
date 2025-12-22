"use client";
import React from 'react';
import Link from 'next/link';

export default function OrderDetailsPage({ params }) {
  // Mock data lookup based on ID (in a real app, fetch from API)
  const { id } = React.use(params);
  
  const order = {
    id: decodeURIComponent(id),
    date: '2023-11-15',
    status: 'Delivered',
    items: [
      { name: 'Vintage Leather Bag', price: '$120.00', qty: 1, image: '/images/hero-3.jpg' },
      { name: 'Travel Journal', price: '$25.00', qty: 1, image: '/images/hero-1.jpg' }
    ],
    subtotal: '$145.00',
    shipping: 'Free',
    total: '$145.00',
    shippingAddress: {
      name: 'Sandun Traveler',
      address: '123 Galle Road, Colombo, 00300',
      phone: '+94 77 123 4567'
    },
    paymentMethod: 'Cash on Delivery'
  };

  return (
    <div className="container" style={{ padding: '6rem 2rem' }}>
      <div className="order-details-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <Link href="/profile" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Orders
            </Link>
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Order Details</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Order ID: <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{order.id}</span></p>
          </div>
          <div className={`order-status status-${order.status.toLowerCase()}`} style={{ fontSize: '1rem', padding: '10px 20px' }}>
            {order.status}
          </div>
        </div>

        {/* Content Grid */}
        <div className="order-content-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          
          {/* Left Col: Items */}
          <div className="order-items-section" style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>Items Purchased</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {order.items.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', background: '#eee' }}>
                       <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.name}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Qty: {item.qty}</p>
                    </div>
                  </div>
                  <p style={{ fontWeight: '600' }}>{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Summary */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Summary</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal</span>
                  <span>{order.subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping</span>
                  <span>{order.shipping}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed #eee' }}>
                  <span>Total</span>
                  <span>{order.total}</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
               <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Shipping Info</h2>
               <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                 <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{order.shippingAddress.name}</p>
                 <p>{order.shippingAddress.address}</p>
                 <p>{order.shippingAddress.phone}</p>
                 <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                   <span style={{ width: '10px', height: '10px', background: '#27ae60', borderRadius: '50%' }}></span>
                   {order.paymentMethod}
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
