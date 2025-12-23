export default function AdminDashboard() {
  const chartData = [
    { day: 'Mon', value: 45, label: '45k' },
    { day: 'Tue', value: 60, label: '60k' },
    { day: 'Wed', value: 35, label: '35k' },
    { day: 'Thu', value: 80, label: '80k' },
    { day: 'Fri', value: 55, label: '55k' },
    { day: 'Sat', value: 90, label: '90k' },
    { day: 'Sun', value: 70, label: '70k' },
  ];

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Dashboard</h1>
        <div>
          <span style={{color: 'var(--text-secondary)'}}>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

        <div style={{color: '#6b7280'}}>Welcome back, Admin</div>


      <div className="admin-dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon primary">💰</div>
          <div>
            <div className="stat-label">Total Sales</div>
            <div className="stat-value">LKR 1.2M</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon warning">📦</div>
          <div>
            <div className="stat-label">Total Orders</div>
            <div className="stat-value">1,245</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon success">🛍️</div>
          <div>
            <div className="stat-label">Products</div>
            <div className="stat-value">85</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon info">👥</div>
          <div>
            <div className="stat-label">Customers</div>
            <div className="stat-value">3.5k</div>
          </div>
        </div>
      </div>

      <div className="admin-chart-container">
         <h3 style={{fontSize:'1.1rem', marginBottom:'20px', color: '#1f2937'}}>Sales & Revenue Overview</h3>
         <div style={{width:'100%', height:'300px', backgroundColor:'#f9fafb', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', color:'#9ca3af'}}>
            [Sales Chart Placeholder]
         </div>
      </div>

      <div className="admin-table-container">
        <div style={{padding:'20px', borderBottom:'1px solid #e5e7eb'}}>
            <h3 style={{fontSize:'1.1rem', color: '#1f2937'}}>Recent Orders</h3>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-7741</td>
              <td>Sarah Perera</td>
              <td>Oct 24, 2023</td>
              <td>LKR 12,500</td>
              <td><span className="status-badge status-completed">Completed</span></td>
              <td>View</td>
            </tr>
            <tr>
              <td>#ORD-7742</td>
              <td>Kasun Jayasuriya</td>
              <td>Oct 24, 2023</td>
              <td>LKR 8,250</td>
              <td><span className="status-badge status-pending">Pending</span></td>
              <td>View</td>
            </tr>
            <tr>
              <td>#ORD-7743</td>
              <td>Amara Silva</td>
              <td>Oct 23, 2023</td>
              <td>LKR 25,000</td>
              <td><span className="status-badge status-cancelled">Cancelled</span></td>
              <td>View</td>
            </tr>
            <tr>
              <td>#ORD-7744</td>
              <td>Nimali Fernando</td>
              <td>Oct 23, 2023</td>
              <td>LKR 4,500</td>
              <td><span className="status-badge status-completed">Completed</span></td>
              <td>View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
