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
    isHot: false,
    isGift: false,
    featured: true,
    showInAll: true,
    // Labels
    isBestSeller: false,
    isTrending: false,
    isGiftLabel: false
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        // Reset form or redirect
        alert("Product Created Successfully!");
        setFormData({
            name: '',
            price: '',
            category: 'Grocery',
            description: '',
            image: '',
            stock: '',
            isNewArrival: false,
            isPopular: false,
            isHot: false,
            isGift: false,
            featured: true,
            showInAll: true,
            isBestSeller: false,
            isTrending: false,
            isGiftLabel: false
        });
      } else {
        setStatus('error');
        alert("Failed to create product.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert("An error occurred.");
    }
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

          {/* Page Visibility Section */}
          <div style={{background: '#f9f9f9', padding:'20px', borderRadius: '8px', border:'1px solid #eee'}}>
            <h3 style={{fontSize:'1.1rem', marginBottom:'15px', color:'var(--primary)'}}>Page Visibility</h3>
            <p style={{fontSize:'0.9rem', color:'#666', marginBottom:'15px'}}>Select which pages this product should appear on:</p>
            
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'15px'}}>
              
              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="featured" 
                  checked={formData.featured} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>Show in Home Page</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="isPopular" 
                  checked={formData.isPopular} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>Show in Travelers' Choice Page</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="isGift" 
                  checked={formData.isGift} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>Show in Special Offers Page</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="isNewArrival" 
                  checked={formData.isNewArrival} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>Show in Latest Arrivals Page</span>
              </label>
            </div>
          </div>

          {/* Label As Section */}
          <div style={{background: '#f9f9f9', padding:'20px', borderRadius: '8px', border:'1px solid #eee'}}>
            <h3 style={{fontSize:'1.1rem', marginBottom:'15px', color:'var(--primary)'}}>Label As</h3>
            <p style={{fontSize:'0.9rem', color:'#666', marginBottom:'15px'}}>Add badges to highlight this product:</p>
            
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'15px'}}>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="isHot" 
                  checked={formData.isHot} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>HOT</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="isBestSeller" 
                  checked={formData.isBestSeller} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>BEST SELLER</span>
              </label>

              <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="isTrending" 
                  checked={formData.isTrending} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>TRENDING</span>
              </label>

               <label style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer', padding:'10px', background:'white', borderRadius:'6px', border:'1px solid #eee'}}>
                <input 
                  type="checkbox" 
                  name="isGiftLabel" 
                  checked={formData.isGiftLabel} 
                  onChange={handleChange}
                  style={{width:'18px', height:'18px', accentColor:'var(--primary)'}}
                />
                <span style={{fontWeight:'500'}}>GIFT IDEA</span>
              </label>

            </div>
          </div>

          <button 
            type="submit" 
            className="btn" 
            disabled={status === 'loading'}
            style={{backgroundColor: 'var(--primary)', color: 'white', alignSelf:'flex-start', padding:'12px 30px', opacity: status === 'loading' ? 0.7 : 1}}
          >
            {status === 'loading' ? 'Creating...' : 'Create Product'}
          </button>

        </form>
      </div>
    </div>
  );
}
