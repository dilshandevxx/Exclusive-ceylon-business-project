"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart, updateQuantity, removeFromCart } = useCart();
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: session?.user?.name?.split(' ')[0] || '',
    lastName: session?.user?.name?.split(' ')[1] || '',
    email: session?.user?.email || '',
    phone: '',
    address: '',
    city: '',
    zip: '',
  });

  // Update form if session loads later
  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        firstName: prev.firstName || session.user.name?.split(' ')[0] || '',
        lastName: prev.lastName || session.user.name?.split(' ')[1] || '',
        email: prev.email || session.user.email || ''
      }));
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!session) {
      alert("Please sign in to place an order.");
      router.push('/auth/signin?callbackUrl=/checkout');
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          total: cartTotal,
          shippingAddress: `${formData.address}, ${formData.city}, ${formData.zip}`,
          paymentMethod: 'Cash on Delivery' // Hardcoded for now as per UI
        }),
      });

      if (res.ok) {
        clearCart();
        alert('Order placed successfully! Redirecting to profile...');
        router.push('/profile'); // Assuming a profile page exists or will exist
      } else {
        const errorData = await res.json();
        alert(`Failed to place order: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Checkout validation failed", error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 className="section-title">Your Cart is Empty</h1>
        <p style={{ marginBottom: '2rem' }}>Looks like you haven't added anything yet.</p>
        <Link href="/" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '6rem 2rem' }}>
      <h1 className="section-title">Checkout</h1>
      
      <div className="checkout-container">
        
        {/* Checkout Form */}
        <div className="checkout-form-section">
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--text-primary)' }}>Shipping Details</h2>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input 
                  type="text" name="firstName" placeholder="First Name" 
                  value={formData.firstName} onChange={handleChange} required 
                  className="form-input"
                />
                <input 
                  type="text" name="lastName" placeholder="Last Name" 
                  value={formData.lastName} onChange={handleChange} required 
                  className="form-input"
                />
             </div>
             <input 
                type="email" name="email" placeholder="Email Address" 
                value={formData.email} onChange={handleChange} required disabled 
                className="form-input" style={{ opacity: 0.7 }}
             />
             <input 
                type="tel" name="phone" placeholder="Phone Number" 
                value={formData.phone} onChange={handleChange} required 
                className="form-input"
             />
             <input 
                type="text" name="address" placeholder="Address" 
                value={formData.address} onChange={handleChange} required 
                className="form-input"
             />
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input 
                  type="text" name="city" placeholder="City" 
                  value={formData.city} onChange={handleChange} required 
                  className="form-input"
                />
                <input 
                  type="text" name="zip" placeholder="Zip Code" 
                  value={formData.zip} onChange={handleChange} required 
                  className="form-input"
                />
             </div>
          </form>

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

          <button 
            onClick={handleSubmit} 
            disabled={loading}
            className="btn btn-primary" 
            style={{ marginTop: '2rem', width: '100%' }}
          >
            {loading ? 'Processing...' : 'Confirm Order'}
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
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 5px' }}>-</button>
                        <span style={{ fontSize: '0.8rem' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 5px' }}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#e74c3c', fontSize: '0.8rem' }}>Remove</button>
                    </div>
                  </div>
                </div>
                <span style={{ fontWeight: '600' }}>LKR {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Subtotal</span>
              <span>LKR {cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '1.2rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>
              <span>Total</span>
              <span>LKR {cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
