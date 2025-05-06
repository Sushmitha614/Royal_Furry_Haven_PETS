import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboardLayout from './dashboard/admin/AdminDashboardLayout';
import UserDashboardLayout from './dashboard/user/UserDashboardLayout';
import Dashboard from './dashboard/DashboardHome'; // or './dashboard' or './dashboard/DashboardLayout' depending on your setup
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard/*" element={<AdminDashboardLayout>{/* admin routes here */}</AdminDashboardLayout>} />
      <Route path="/user/dashboard/*" element={<UserDashboardLayout>{/* user routes here */}</UserDashboardLayout>} />
    </Routes>
  );
}

export default App;
