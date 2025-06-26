import React, { useState, useEffect } from 'react';
import {
  Box, Card, CardContent, Typography, TextField, Button, MenuItem, Switch, FormControlLabel, Fade, InputAdornment
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Remove the static categories array
// const categories = ['Food', 'Toys', 'Accessories', 'Grooming'];

export default function AddProduct() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]); // Add categories state
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(null);
  // Remove status if not in backend
  // const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  // Add useEffect to fetch categories
  useEffect(() => {
    axios.get('http://localhost:8081/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch categories:', error);
      });
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Add loading state
  const [loading, setLoading] = useState(false);
  
  // Update handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    if (image) {
      formData.append('image', image);
    }
  
    try {
      const response = await axios.post('http://localhost:8081/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      });
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Failed to save product:', error);
      alert(error.response?.data?.message || 'Failed to save product. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Update Save button
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
    {loading ? 'Saving...' : 'Save Product'}
  </Button>
  return (
    <Fade in timeout={600}>
      <Box maxWidth={600} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#2196f3,#9c27b0)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Add New Product
            </Typography>
            <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={handleSubmit}>
              <TextField label="Product Name" required fullWidth value={name} onChange={(e) => setName(e.target.value)} />
              <TextField
                select
                label="Category"
                required
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                ))}
              </TextField>
              <TextField label="Description" multiline rows={3} fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
              <TextField
                label="Price"
                type="number"
                required
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                }}
              />
              <TextField label="Stock Quantity" type="number" required fullWidth value={stock} onChange={(e) => setStock(e.target.value)} />
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
                Upload Image
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
              </Button>
              {image && <Typography variant="body2" color="text.secondary">{image.name}</Typography>}
              {/* Remove the FormControlLabel below to fix the error */}
              {/* <FormControlLabel
                // Remove status switch if not in backend
                // control={<Switch checked={status} onChange={() => setStatus(!status)} color="primary" />}
                // label={status ? 'Active' : 'Inactive'}
                sx={{ display: 'none' }}
              /> */}
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
                >
                  Save Product
                </Button>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 3, flex: 1 }}
                  onClick={() => navigate(-1)}
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
