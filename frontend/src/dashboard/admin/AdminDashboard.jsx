import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

// Example subnavs for each main nav section
const subNavs = [
  ['Overview', 'Stats'], // Dashboard
  ['All Products', 'Add Product'], // Products
  ['All Categories', 'Add Category'], // Categories
  ['All Orders', 'Pending Orders'], // Orders
  ['All Users', 'Add User'], // Users
  ['Sales Report', 'User Report'], // Reports
];

// Example content components for each subnav (replace with your actual components)
const ContentComponents = [
  [() => <div>Dashboard Overview</div>, () => <div>Dashboard Stats</div>],
  [() => <div>All Products</div>, () => <div>Add Product</div>],
  [() => <div>All Categories</div>, () => <div>Add Category</div>],
  [() => <div>All Orders</div>, () => <div>Pending Orders</div>],
  [() => <div>All Users</div>, () => <div>Add User</div>],
  [() => <div>Sales Report</div>, () => <div>User Report</div>],
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedNav, setSelectedNav] = useState(0);
  const [selectedSubNav, setSelectedSubNav] = useState(0);

  // When main nav changes, reset subnav selection
  const handleNavSelect = (idx) => {
    setSelectedNav(idx);
    setSelectedSubNav(0);
  };

  const SubNav = subNavs[selectedNav];
  const Content = ContentComponents[selectedNav][selectedSubNav];

  // Add this for debugging
  console.log('selectedNav:', selectedNav, 'SubNav:', SubNav);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <AdminSidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((o) => !o)}
        selectedIndex={selectedNav}
        onSelect={handleNavSelect}
      />
      <main style={{ flex: 1, background: '#f5f5f5', padding: 24 }}>
        {/* Subnav */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          {SubNav.map((label, idx) => (
            <button
              key={label}
              onClick={() => setSelectedSubNav(idx)}
              style={{
                padding: '8px 20px',
                borderRadius: 20,
                border: 'none',
                background: selectedSubNav === idx ? '#2196f3' : '#e0e0e0',
                color: selectedSubNav === idx ? '#fff' : '#333',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Main Content */}
        <div>
          <Content />
        </div>
      </main>
    </div>
  );
}