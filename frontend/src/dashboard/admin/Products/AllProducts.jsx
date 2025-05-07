import React from 'react';
import {
  Box, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Fade
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Remove the static products array
// const products = [ ... ];  // <-- DELETE THIS LINE

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/api/products') // Change 8081 to your backend port if needed
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add delete handler
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/api/products/${id}`)
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <Fade in timeout={600}>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight={700} sx={{ background: 'linear-gradient(90deg,#2196f3,#9c27b0)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            All Products
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              background: 'linear-gradient(90deg,#2196f3,#9c27b0)',
              borderRadius: 3,
              fontWeight: 600,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg,#9c27b0,#2196f3)' },
            }}
            onClick={() => navigate('add')}
          >
            Add Product
          </Button>
        </Box>
        <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'auto' }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Price (LKR)</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#f3e5f5' } }}>
                    <TableCell>
                      <Avatar src={product.image} variant="rounded" />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          background: product.status === 'Active'
                            ? 'linear-gradient(90deg,#43e97b,#38f9d7)'
                            : 'linear-gradient(90deg,#ff6a00,#ee0979)',
                          color: '#fff',
                          fontWeight: 600,
                          display: 'inline-block',
                        }}
                      >
                        {product.status}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`edit/${product.id}`)}>Edit</Button>
                      <Button size="small" onClick={() => navigate(`view/${product.id}`)}>View</Button>
                      <Button size="small" color="error" onClick={() => handleDelete(product.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}