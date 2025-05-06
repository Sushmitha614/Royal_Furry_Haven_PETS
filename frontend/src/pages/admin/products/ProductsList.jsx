import React from 'react';
import DataTable from '../../../components/DataTable';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'price', headerName: 'Price (LKR)', width: 130 },
  { field: 'stock', headerName: 'Stock', width: 100 },
];

const rows = [
  { id: 1, name: 'Happy Paws Chicken Dog Food', category: 'Pet Food', price: 1200, stock: 50 },
  { id: 2, name: 'Ceylon Cat Litter', category: 'Pet Care', price: 950, stock: 30 },
  { id: 3, name: 'Ayurvedic Flea Shampoo', category: 'Grooming', price: 800, stock: 20 },
  { id: 4, name: 'Sri Lankan Coconut Rope Toy', category: 'Accessories', price: 450, stock: 100 },
  { id: 5, name: 'Herbal Pet Vitamins', category: 'Health', price: 1500, stock: 15 },
];

export default function ProductsList() {
  return (
    <DataTable
      title="Sri Lankan Pet Products"
      columns={columns}
      rows={rows}
    />
  );
}