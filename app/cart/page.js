"use client";
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const { data: session } = useSession();
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (!session) {
    return (
      <div className="container" style={{padding: '100px 0', textAlign: 'center'}}>
        <h2>Please Sign In</h2>
        <p>You need to be logged in to view your cart.</p>
        <Link href="/auth/signin" className="btn btn-primary" style={{marginTop: '20px', display: 'inline-block'}}>
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{padding: '40px 20px'}}>
      
      {/* User Details Section */}
      <div style={{marginBottom: '40px', padding: '20px', backgroundColor: '#F9FAFB', borderRadius: '12px'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '10px'}}>
          Welcome, {session.user?.name || session.user?.email}!
        </h2>
        <p style={{color: '#666'}}>Manage your cart items below.</p>
      </div>

      <h1 style={{fontSize: '2rem', marginBottom: '30px', fontWeight: '800'}}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{textAlign: 'center', padding: '60px', backgroundColor: '#fff', borderRadius: '8px', border: '1px dashed #ccc'}}>
          <p style={{marginBottom: '20px', fontSize: '1.2rem'}}>Your cart is empty.</p>
          <Link href="/" className="btn btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px'}}>
          
          {/* Cart Items List */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {cartItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex', 
                gap: '20px', 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                alignItems: 'center'
              }}>
                <div style={{width: '100px', height: '100px', position: 'relative', flexShrink: 0}}>
                  <Image src={item.image} alt={item.name} fill style={{objectFit: 'cover', borderRadius: '8px'}} />
                </div>
                
                <div style={{flex: 1}}>
                  <h3 style={{fontWeight: '700', marginBottom: '5px'}}>{item.name}</h3>
                  <p style={{color: 'var(--primary)', fontWeight: '600'}}>${item.price}</p>
                </div>

                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px', background: '#f5f5f5', cursor:'pointer'}}
                  >-</button>
                  <span style={{fontWeight: '600'}}>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px', background: '#f5f5f5', cursor:'pointer'}}
                  >+</button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{color: '#d32f2f', background: 'none', border: 'none', cursor: 'pointer', padding:'10px'}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div style={{height: 'fit-content', padding: '30px', backgroundColor: '#FAFAF9', borderRadius: '12px', border: '1px solid #eee'}}>
            <h3 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px'}}>Order Summary</h3>
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div style={{height: '1px', backgroundColor: '#ddd', margin: '20px 0'}}></div>

            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '800'}}>
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <button className="btn btn-primary" style={{width: '100%', padding: '15px'}}>
              Checkout Now
            </button>
             <button 
                onClick={clearCart} 
                style={{width: '100%', marginTop: '10px', padding: '10px', background: 'none', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer'}}
             >
              Clear Cart
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
