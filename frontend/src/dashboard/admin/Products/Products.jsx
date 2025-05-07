import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllProducts from './AllProducts';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductDetails from './ProductDetails';

export default function Products() {
  return (
    <Routes>
      <Route index element={<AllProducts />} />
      <Route path="add" element={<AddProduct />} />
      <Route path="edit/:id" element={<EditProduct />} />
      <Route path="view/:id" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}