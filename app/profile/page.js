"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('details');
  const [userInfo, setUserInfo] = useState({
    firstName: 'Sandun',
    lastName: 'Traveler',
    email: 'sandun@example.com',
    phone: '+94 77 123 4567',
    address: '123 Galle Road',
    city: 'Colombo',
    zip: '00300'
  });

  const [orders, setOrders] = useState([
    { id: '#ORD-2023-001', date: '2023-11-15', status: 'Delivered', total: '$120.00', items: 'Vintage Leather Bag' },
    { id: '#ORD-2023-045', date: '2023-12-01', status: 'Processing', total: '$45.00', items: 'Travel Journal, Passport Holder' },
  ]);

  const handleInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile updated successfully! (Mock Action)');
  };

  return (
    <div className="container" style={{ padding: '6rem 2rem' }}>
      <h1 className="section-title">My Account</h1>

      <div className="profile-dashboard">
        {/* Sidebar / Tabs */}
        <div className="dashboard-sidebar">
          <div className="user-brief">
            <div className="user-avatar">
              {userInfo.firstName.charAt(0)}{userInfo.lastName.charAt(0)}
            </div>
            <div className="user-name-display">
              <h3>{userInfo.firstName} {userInfo.lastName}</h3>
              <p>{userInfo.email}</p>
            </div>
          </div>
          
          <nav className="dashboard-nav">
            <button 
              className={`dash-nav-item ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              My Details
            </button>
            <button 
              className={`dash-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              My Orders
            </button>
            <button className="dash-nav-item logout">
              Logout
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="dashboard-content">
          
          {/* Details Tab */}
          {activeTab === 'details' && (
            <div className="fade-in">
              <h2 className="dash-heading">Personal Information</h2>
              <form onSubmit={handleSave} className="profile-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" name="firstName" value={userInfo.firstName} 
                      onChange={handleInfoChange} className="form-input" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" name="lastName" value={userInfo.lastName} 
                      onChange={handleInfoChange} className="form-input" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" name="email" value={userInfo.email} 
                    onChange={handleInfoChange} className="form-input" 
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" name="phone" value={userInfo.phone} 
                    onChange={handleInfoChange} className="form-input" 
                  />
                </div>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.1rem' }}>Shipping Address</h3>
                <div className="form-group">
                  <label>Address</label>
                  <input 
                    type="text" name="address" value={userInfo.address} 
                    onChange={handleInfoChange} className="form-input" 
                  />
                </div>
                <div className="form-group-row">
                   <div className="form-group">
                    <label>City</label>
                    <input 
                      type="text" name="city" value={userInfo.city} 
                      onChange={handleInfoChange} className="form-input" 
                    />
                  </div>
                   <div className="form-group">
                    <label>Zip Code</label>
                    <input 
                      type="text" name="zip" value={userInfo.zip} 
                      onChange={handleInfoChange} className="form-input" 
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Save Changes</button>
              </form>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="fade-in">
              <h2 className="dash-heading">Order History</h2>
              <div className="orders-list">
                {orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <span className="order-id">{order.id}</span>
                      <span className={`order-status status-${order.status.toLowerCase()}`}>{order.status}</span>
                    </div>
                    <div className="order-body">
                      <p className="order-date">Date: {order.date}</p>
                      <p className="order-items">Items: {order.items}</p>
                      <p className="order-total">Total: <strong>{order.total}</strong></p>
                    </div>
                    <div className="order-actions">
                      <Link href={`/orders/${encodeURIComponent(order.id)}`} className="btn btn-outline btn-sm" style={{ display: 'inline-block', textDecoration: 'none' }}>
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>


    </div>
  );
}
