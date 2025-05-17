import React, { useState, useEffect } from 'react';
import {
  Box, Card, CardContent, Typography, TextField, Button, MenuItem, Fade, InputAdornment
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const categories = ['Food', 'Toys', 'Accessories', 'Grooming'];

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    imageUrl: ''
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        alert('Failed to fetch product details');
        navigate('/admin/products');
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('stock', product.stock);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`http://localhost:8081/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      });
      navigate('/admin/products');
    } catch (error) {
      console.error('Failed to update product:', error);
      alert(error.response?.data?.message || 'Failed to update product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</Box>;
  }

  return (
    <Fade in timeout={600}>
      <Box maxWidth={600} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#2196f3,#9c27b0)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Edit Product
            </Typography>
            <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={handleSubmit}>
              <TextField 
                label="Product Name" 
                required 
                fullWidth 
                name="name"
                value={product.name} 
                onChange={handleChange} 
              />
              <TextField
                select
                label="Category"
                required
                fullWidth
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </TextField>
              <TextField 
                label="Description" 
                multiline 
                rows={3} 
                fullWidth 
                name="description"
                value={product.description} 
                onChange={handleChange} 
              />
              <TextField
                label="Price"
                type="number"
                required
                fullWidth
                name="price"
                value={product.price}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                }}
              />
              <TextField 
                label="Stock Quantity" 
                type="number" 
                required 
                fullWidth 
                name="stock"
                value={product.stock} 
                onChange={handleChange} 
              />
              <Button
                variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
                sx={{
                  borderRadius: 2,
                  borderColor: '#9c27b0',
                  color: '#9c27b0',
                  '&:hover': { borderColor: '#2196f3', color: '#2196f3' },
                }}
              >
                Upload New Image
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
              </Button>
              {image && <Typography variant="body2" color="text.secondary">{image.name}</Typography>}
              {product.imageUrl && !image && (
                <Typography variant="body2" color="text.secondary">Current image: {product.imageUrl}</Typography>
              )}
              <Box display="flex" gap={2} mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg,#2196f3,#9c27b0)',
                    borderRadius: 3,
                    fontWeight: 600,
                    flex: 1,
                    boxShadow: 3,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg,#9c27b0,#2196f3)' },
                  }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Updating...' : 'Update Product'}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 3, flex: 1 }}
                  onClick={() => navigate(-1)}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}