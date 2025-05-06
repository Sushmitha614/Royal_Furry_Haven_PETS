import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import ProductsList from './pages/admin/products/ProductsList';
import AddProduct from './pages/admin/products/AddProduct';
import EditProduct from './pages/admin/products/EditProduct';
import CategoriesList from './pages/admin/categories/CategoriesList';
import AddCategory from './pages/admin/categories/AddCategory';
import UsersList from './pages/admin/users/UsersList';
import EditUser from './pages/admin/users/EditUser';
import OrdersList from './pages/admin/orders/OrdersList';
import OrderDetail from './pages/admin/orders/OrderDetail';
import Analytics from './pages/admin/analytics/Analytics';
import ProfileView from './pages/user/profile/ProfileView';
import ProfileEdit from './pages/user/profile/ProfileEdit';
import OrderHistory from './pages/user/orders/OrderHistory';
import UserOrderDetail from './pages/user/orders/UserOrderDetail';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<ProductsList />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="categories" element={<CategoriesList />} />
          <Route path="categories/add" element={<AddCategory />} />
          <Route path="users" element={<UsersList />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="orders/:id" element={<OrderDetail />} />
          <Route path="analytics" element={<Analytics />} />
          <Route index element={<Navigate to="products" />} />
        </Route>
        {/* User routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="profile" element={<ProfileView />} />
          <Route path="profile/edit" element={<ProfileEdit />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="orders/:id" element={<UserOrderDetail />} />
          {/* Add more user pages here */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;