"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Grocery',
    description: '',
    image: '',
    stock: '',
    isNewArrival: false,
    isPopular: false,
    isGift: false,
    showInAll: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically send data to an API
    console.log("Submitting Product:", formData);
    alert("Product Created! (Mock)");
  };

  return (
    <div style={{maxWidth: '800px', margin: '0 auto'}}>
      <div className="admin-header">
        <h1 className="admin-title">Add New Product</h1>
        <Link href="/admin/products" className="btn" style={{backgroundColor: '#e0e0e0', color: '#333'}}>
          Cancel
        </Link>
      </div>

      <div className="admin-chart-container" style={{height: 'auto'}}>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          
          {/* Basic Info */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
            <div>
              <label style={{display:'block', marginBottom:'5px', fontWeight:'500'}}>Product Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="search-input" 
                style={{width: '100%', border: '1px solid #ccc', borderRadius:'4px', padding:'10px'}}
                required
              />
            </div>
            <div>
              <label style={{display:'block', marginBottom:'5px', fontWeight:'500'}}>Price (LKR)</label>
              <input 
                type="number" 
                name="price" 
                value={formData.price} 
                onChange={handleChange}
                className="search-input" 
                style={{width: '100%', border: '1px solid #ccc', borderRadius:'4px', padding:'10px'}}
                required
              />
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
             <div>
              <label style={{display:'block', marginBottom:'5px', fontWeight:'500'}}>Category</label>
              <select 
                name="category" 
                value={formData.category} 
                onChange={handleChange}
                style={{width: '100%', border: '1px solid #ccc', borderRadius:'4px', padding:'10px'}}
              >
                <option value="Grocery">Grocery</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Gifts">Gifts</option>
              </select>
            </div>
            <div>
              <label style={{display:'block', marginBottom:'5px', fontWeight:'500'}}>Stock Quantity</label>
              <input 
                type="number" 
                name="stock" 
                value={formData.stock} 
                onChange={handleChange}
                className="search-input" 
                style={{width: '100%', border: '1px solid #ccc', borderRadius:'4px', padding:'10px'}}
              />
            </div>
          </div>

          <div>
             <label style={{display:'block', marginBottom:'5px', fontWeight:'500'}}>Image URL</label>
             <input 
                type="text" 
                name="image" 
                value={formData.image} 
                onChange={handleChange}
                placeholder="/images/product-placeholder.jpg"
                className="search-input" 
                style={{width: '100%', border: '1px solid #ccc', borderRadius:'4px', padding:'10px'}}
              />
          </div>

           <div>
             <label style={{display:'block', marginBottom:'5px', fontWeight:'500'}}>Description</label>
             <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange}
                rows="4"
                style={{width: '100%', border: '1px solid #ccc', borderRadius:'4px', padding:'10px', fontFamily:'inherit'}}
              ></textarea>
          </div>

          {/* Visibility Sections form user request */}
          <div style={{background: '#f9f9f9', padding:'20px', borderRadius: '8px', border:'1px solid #eee'}}>
            <h3 style={{fontSize:'1.1rem', marginBottom:'15px', color:'var(--primary)'}}>Visibility Settings</h3>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'15px'}}>
              
              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer'}}>
                <input 
                  type="checkbox" 
                  name="showInAll" 
                  checked={formData.showInAll} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span>Show in "All Items"</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer'}}>
                <input 
                  type="checkbox" 
                  name="isNewArrival" 
                  checked={formData.isNewArrival} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span>New Arrival</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer'}}>
                <input 
                  type="checkbox" 
                  name="isPopular" 
                  checked={formData.isPopular} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span>Popular</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer'}}>
                <input 
                  type="checkbox" 
                  name="isGift" 
                  checked={formData.isGift} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span>Gifts & Offers</span>
              </label>

            </div>
          </div>

          <button 
            type="submit" 
            className="btn" 
            style={{backgroundColor: 'var(--primary)', color: 'white', alignSelf:'flex-start', padding:'12px 30px'}}
          >
            Create Product
          </button>

        </form>
      </div>
    </div>
  );
}
