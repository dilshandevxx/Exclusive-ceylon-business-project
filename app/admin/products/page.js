import Image from 'next/image';
import Link from 'next/link';

export default function AdminProducts() {
  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Products</h1>
        <Link href="/admin/products/new" className="btn" style={{backgroundColor: 'var(--primary)', color: 'white'}}>
          + Add Product
        </Link>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div className="prod-thumb" style={{backgroundImage: "url('/images/hero-1.jpg')", backgroundSize:'cover'}}></div>
                  <span style={{fontWeight: '500'}}>Ceylon Tea - Premium</span>
                </div>
              </td>
              <td>Grocery</td>
              <td>LKR 1,500</td>
              <td>
                <div className="stock-bar-bg">
                   <div className="stock-bar-fill stock-good" style={{width: '80%'}}></div>
                </div>
                <span style={{fontSize:'0.75rem', color: '#666'}}>45 in stock</span>
              </td>
              <td><span className="status-badge status-completed">Active</span></td>
              <td>
                <span style={{marginRight: '10px', cursor:'pointer'}}>✏️</span>
                <span style={{cursor:'pointer'}}>🗑️</span>
              </td>
            </tr>
             <tr>
              <td>
                 <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div className="prod-thumb" style={{backgroundImage: "url('/images/hero-2.jpg')", backgroundSize:'cover'}}></div>
                  <span style={{fontWeight: '500'}}>Handwoven Basket</span>
                </div>
              </td>
              <td>Handicrafts</td>
              <td>LKR 3,200</td>
              <td>
                 <div className="stock-bar-bg">
                   <div className="stock-bar-fill stock-low" style={{width: '20%'}}></div>
                </div>
                <span style={{fontSize:'0.75rem', color: '#666'}}>12 in stock</span>
              </td>
              <td><span className="status-badge status-pending">Low Stock</span></td>
              <td>
                <span style={{marginRight: '10px', cursor:'pointer'}}>✏️</span>
                <span style={{cursor:'pointer'}}>🗑️</span>
              </td>
            </tr>
             <tr>
              <td>
                 <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div className="prod-thumb" style={{backgroundImage: "url('/images/hero-3.jpg')", backgroundSize:'cover'}}></div>
                  <span style={{fontWeight: '500'}}>Spices Gift Box</span>
                </div>
              </td>
              <td>Grocery</td>
              <td>LKR 2,800</td>
              <td>
                 <div className="stock-bar-bg">
                   <div className="stock-bar-fill stock-medium" style={{width: '50%'}}></div>
                </div>
                <span style={{fontSize:'0.75rem', color: '#666'}}>30 in stock</span>
              </td>
              <td><span className="status-badge status-completed">Active</span></td>
              <td>
                <span style={{marginRight: '10px', cursor:'pointer'}}>✏️</span>
                <span style={{cursor:'pointer'}}>🗑️</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
