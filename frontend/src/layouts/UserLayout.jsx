import React from 'react';
import UserSidebar from '../dashboard/user/UserSidebar';
import { Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <UserSidebar />
      <main style={{ flex: 1, padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}