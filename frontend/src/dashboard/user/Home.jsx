import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      axios.get(`http://localhost:8081/api/products?category=${categories[selectedTab].id}`)
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    }
  }, [categories, selectedTab]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Welcome to Your Dashboard!
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2 }}
      >
        {categories.map((cat) => (
          <Tab key={cat.id} label={cat.name} />
        ))}
      </Tabs>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ borderRadius: 4, boxShadow: 6, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' } }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.imageUrl}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                  <Typography variant="subtitle1" color="primary" fontWeight={600} mt={1}>${product.price}</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2, borderRadius: 3 }}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}