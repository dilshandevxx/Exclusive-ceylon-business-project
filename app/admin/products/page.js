import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AdminProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Products ({products.length})</h1>
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    {/* Using a simple div for image to avoid Next/Image complexity if url is external/invalid */}
                    <div className="prod-thumb" style={{
                      backgroundImage: `url('${product.image || '/images/product-placeholder.jpg'}')`, 
                      backgroundSize:'cover',
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#f0f0f0'
                    }}></div>
                    <span style={{fontWeight: '500'}}>{product.name}</span>
                    {product.isNewArrival && <span style={{fontSize:'0.6rem', background:'var(--accent)', color:'white', padding:'2px 4px', borderRadius:'4px', marginLeft:'5px'}}>NEW</span>}
                  </div>
                </td>
                <td>{product.category}</td>
                <td>LKR {product.price.toLocaleString()}</td>
                <td>
                  {/* Mock stock logic since schema doesn't have stock yet, or use hardcoded if field missing */}
                  <div className="stock-bar-bg">
                     <div className="stock-bar-fill stock-good" style={{width: '100%'}}></div>
                  </div>
                  <span style={{fontSize:'0.75rem', color: '#666'}}>In Stock</span>
                </td>
                <td>
                    <span className={`status-badge ${product.showInAll ? 'status-completed' : 'status-pending'}`}>
                        {product.showInAll ? 'Active' : 'Hidden'}
                    </span>
                </td>
                <td>
                  <span style={{marginRight: '10px', cursor:'pointer'}} title="Edit (Coming Soon)">✏️</span>
                  <span style={{cursor:'pointer'}} title="Delete (Coming Soon)">🗑️</span>
                </td>
              </tr>
            ))}
            
            {products.length === 0 && (
                <tr>
                    <td colSpan="6" style={{textAlign: 'center', padding: '30px', color: '#888'}}>
                        No products found. Start by adding one!
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
