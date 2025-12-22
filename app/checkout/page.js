"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Travel Backpack', price: 85.00, qty: 1, image: '/images/hero-3.jpg' },
    { id: 2, name: 'Noise Cancelling Headphones', price: 250.00, qty: 1, image: '/images/hero-5.jpg' }
  ]);

  const [formData, setFormData] = useState({
    firstName: 'Sandun',
    lastName: 'Traveler',
    email: 'sandun@example.com',
    phone: '+94 77 123 4567',
    address: '123 Galle Road',
    city: 'Colombo',
    zip: '00300',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! (Mock Action)');
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const total = subtotal; // Free shipping

  const updateQty = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + change);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container" style={{ padding: '6rem 2rem' }}>
      <h1 className="section-title">Checkout</h1>
      
      <div className="checkout-container">
        
        {/* Checkout Form */}
        <div className="checkout-form-section">
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--text-primary)' }}>Shipping Details</h2>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
             <p style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{formData.firstName} {formData.lastName}</p>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>{formData.email}</p>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>{formData.phone}</p>
             <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed #cbd5e1' }}>
               <p style={{ color: 'var(--text-primary)' }}>{formData.address}</p>
               <p style={{ color: 'var(--text-primary)' }}>{formData.city}, {formData.zip}</p>
             </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
             <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Payment Method</h3>
             <div style={{ 
               padding: '1rem', border: '1px solid var(--accent)', 
               backgroundColor: 'rgba(230, 126, 34, 0.05)', borderRadius: '8px',
               display: 'flex', alignItems: 'center', gap: '10px'
             }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                 <line x1="1" y1="10" x2="23" y2="10"></line>
               </svg>
               <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Cash on Delivery</span>
             </div>
          </div>

          <button onClick={handleSubmit} className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
            Confirm Order
          </button>
        </div>

        {/* Order Summary / Cart */}
        <div className="order-summary-section">
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--text-primary)' }}>Your Cart ({cartItems.length})</h2>
          
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#eee', borderRadius: '8px', overflow: 'hidden' }}>
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '2px 5px' }}>
                        <button onClick={() => updateQty(item.id, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 5px' }}>-</button>
                        <span style={{ fontSize: '0.8rem' }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 5px' }}>+</button>
                      </div>
                      <button onClick={() => removeItem(item.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#e74c3c', fontSize: '0.8rem' }}>Remove</button>
                    </div>
                  </div>
                </div>
                <span style={{ fontWeight: '600' }}>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '1.2rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
