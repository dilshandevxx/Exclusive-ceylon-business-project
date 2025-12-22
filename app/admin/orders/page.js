export default function AdminOrders() {
  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Orders</h1>
        <button className="btn" style={{backgroundColor: 'white', color: 'var(--text-primary)', border: '1px solid #ccc'}}>
          Export CSV
        </button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-7742</td>
              <td>Oct 24, 2024</td>
              <td>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                   <div className="user-avatar-sm">ST</div>
                   <span>Sandun Traveler</span>
                </div>
              </td>
              <td><span style={{color: '#2ecc71', fontWeight: '600'}}>Paid</span></td>
              <td><span className="status-badge status-completed">Delivered</span></td>
              <td>LKR 4,500</td>
              <td><button style={{padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ddd', background: 'white'}}>View</button></td>
            </tr>
             <tr>
              <td>#ORD-7743</td>
              <td>Oct 24, 2024</td>
              <td>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                   <div className="user-avatar-sm" style={{backgroundColor: '#e67e22'}}>JD</div>
                   <span>John Doe</span>
                </div>
              </td>
              <td><span style={{color: '#f1c40f', fontWeight: '600'}}>Pending</span></td>
              <td><span className="status-badge status-pending">Processing</span></td>
              <td>LKR 12,200</td>
              <td><button style={{padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ddd', background: 'white'}}>View</button></td>
            </tr>
             <tr>
              <td>#ORD-7744</td>
              <td>Oct 23, 2024</td>
              <td>
                 <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                   <div className="user-avatar-sm" style={{backgroundColor: '#3498db'}}>SS</div>
                   <span>Sarah Smith</span>
                </div>
              </td>
              <td><span style={{color: '#2ecc71', fontWeight: '600'}}>Paid</span></td>
              <td><span className="status-badge status-completed">Shipped</span></td>
              <td>LKR 3,450</td>
              <td><button style={{padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ddd', background: 'white'}}>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
