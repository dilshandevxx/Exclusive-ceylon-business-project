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

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <h3>Total Sales</h3>
            <div className="value">LKR 45,250</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <h3>Total Orders</h3>
            <div className="value">124</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>Customers</h3>
            <div className="value">89</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div className="stat-info">
            <h3>Pending</h3>
            <div className="value">12</div>
          </div>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px'}}>
        {/* Sales Chart */}
        <div className="admin-chart-container">
          <h3 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>Weekly Revenue</h3>
          <div className="chart-bars">
            {chartData.map((data, index) => (
              <div 
                key={index} 
                className="chart-bar" 
                style={{height: `${data.value}%`}}
              >
                <span className="chart-tooltip">LKR {data.label}</span>
                <span className="chart-label">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="activity-feed">
          <h3 style={{marginBottom: '1rem', color: 'var(--text-primary)'}}>Recent Activity</h3>
          
          <div className="activity-item">
            <div className="activity-icon">🛒</div>
            <div className="activity-details">
              <h4>New Order #7746</h4>
              <p>Sandun placed an order.</p>
            </div>
            <div className="activity-time">5m</div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">👤</div>
            <div className="activity-details">
              <h4>New Customer</h4>
              <p>John Doe registered.</p>
            </div>
            <div className="activity-time">2h</div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">📦</div>
            <div className="activity-details">
              <h4>Stock Alert</h4>
              <p>Handwoven Basket low stock.</p>
            </div>
            <div className="activity-time">4h</div>
          </div>

           <div className="activity-item">
            <div className="activity-icon">⭐</div>
            <div className="activity-details">
              <h4>New Review</h4>
              <p>Sarah reviewed Ceylon Tea.</p>
            </div>
            <div className="activity-time">1d</div>
          </div>
        </div>
      </div>
    </div>
  );
}
