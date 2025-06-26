import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MyOrders from './MyOrders';
import Profile from './Profile';

export default function UserDashboard() {
  return (
    <div>
      <nav>
        <Link to="orders">My Orders</Link> | <Link to="profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="orders" element={<MyOrders />} />
        <Route path="profile" element={<Profile />} />
        {/* Add more user routes here */}
      </Routes>
    </div>
  );
}