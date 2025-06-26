import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllUsers from './AllUsers';
import UserDetails from './UserDetails';
import EditUser from './EditUser';
import BlockedUsers from './BlockedUsers';

export default function Users() {
  return (
    <Routes>
      <Route index element={<AllUsers />} />
      <Route path="details/:id" element={<UserDetails />} />
      <Route path="edit/:id" element={<EditUser />} />
      <Route path="blocked" element={<BlockedUsers />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}