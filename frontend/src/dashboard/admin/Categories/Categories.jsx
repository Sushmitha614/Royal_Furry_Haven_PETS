import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllCategories from './AllCategories';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import ViewCategoryProducts from './ViewCategoryProducts';

export default function Categories() {
  return (
    <Routes>
      <Route index element={<AllCategories />} />
      <Route path="add" element={<AddCategory />} />
      <Route path="edit/:id" element={<EditCategory />} />
      <Route path="products/:id" element={<ViewCategoryProducts />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}