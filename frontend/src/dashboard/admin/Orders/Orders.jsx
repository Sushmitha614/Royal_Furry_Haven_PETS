import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllOrders from './AllOrders';
import OrderDetails from './OrderDetails';
import UpdateOrderStatus from './UpdateOrderStatus';
import CancelledOrders from './CancelledOrders';

export default function Orders() {
  return (
    <Routes>
      <Route index element={<AllOrders />} />
      <Route path="details/:id" element={<OrderDetails />} />
      <Route path="update/:id" element={<UpdateOrderStatus />} />
      <Route path="cancelled" element={<CancelledOrders />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}