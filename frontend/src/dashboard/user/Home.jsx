import React, { useState, useEffect } from 'react';
import {
  Box, Tabs, Tab, Grid, Card, CardContent, CardMedia, Typography,
  Button, Skeleton, CircularProgress
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0); // 0 = All
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load categories + all products initially
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const categoriesRes = await axios.get('http://localhost:8081/api/categories');
        const productsRes = await axios.get('http://localhost:8081/api/products');
        setCategories(categoriesRes.data);
        setProducts(productsRes.data); // Show all initially
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Handle tab change
  const handleTabChange = async (event, newValue) => {
    setSelectedTab(newValue);
    setLoading(true);

    try {
      const productsRes = await axios.get('http://localhost:8081/api/products');

      if (newValue === 0) {
        setProducts(productsRes.data); // All products
      } else {
        const categoryName = categories[newValue - 1].name.split(' ')[0];
        const filtered = productsRes.data.filter(
          product => product.category && product.category.includes(categoryName)
        );
        setProducts(filtered);
      }
    } catch (err) {
      console.error('Error:', err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', p: 3, background: 'linear-gradient(145deg, #f6f8ff 0%, #ffffff 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          mb={3}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textAlign: 'center'
          }}
        >
          A Better Life Starts with the Right Products
        </Typography>
      </motion.div>

      <Box sx={{
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTabs-root': {
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: 800
        }
      }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" key="all" />
          {categories.map((cat, index) => (
            <Tab
              key={cat.id}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {cat.name}
                  {loading && selectedTab === index + 1 && (
                    <CircularProgress size={16} thickness={5} />
                  )}
                </Box>
              }
              sx={{
                '&.Mui-selected': {
                  color: '#2196F3',
                  fontWeight: 'bold'
                }
              }}
            />
          ))}
        </Tabs>
      </Box>

      <AnimatePresence mode="wait">
        <Grid container spacing={3}>
          {loading ? (
            [...Array(8)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton variant="text" height={32} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="60%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight={700} gutterBottom>{product.name}</Typography>
                      <Typography variant="body2" color="text.secondary" mb={2}>{product.description}</Typography>
                      <Typography variant="h6" color="primary" fontWeight={600} mb={2}>${product.price}</Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          borderRadius: 3,
                          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          py: 1
                        }}
                      >
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          )}
        </Grid>
      </AnimatePresence>
    </Box>
  );
}
