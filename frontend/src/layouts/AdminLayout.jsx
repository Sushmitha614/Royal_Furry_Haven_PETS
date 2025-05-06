import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../dashboard/admin/AdminSidebar';

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}