import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SalesReports from './SalesReports';
import ProductPerformance from './ProductPerformance';
import UserEngagement from './UserEngagement';
import RevenueSummary from './RevenueSummary';
import ExportReports from './ExportReports';

export default function Reports() {
  return (
    <Routes>
      <Route index element={<SalesReports />} />
      <Route path="products" element={<ProductPerformance />} />
      <Route path="users" element={<UserEngagement />} />
      <Route path="revenue" element={<RevenueSummary />} />
      <Route path="export" element={<ExportReports />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}