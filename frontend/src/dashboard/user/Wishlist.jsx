import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

export default function Wishlist() {
  const userId = localStorage.getItem('userId');
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8081/api/wishlist/${userId}`)
      .then(res => setWishlist(res.data))
      .finally(() => setLoading(false));
  }, [userId]);

  const handleRemove = (wishlistItemId) => {
    axios.delete(`http://localhost:8081/api/wishlist/${wishlistItemId}`)
      .then(() => setWishlist(wishlist => wishlist.filter(item => item.id !== wishlistItemId)));
  };

  const handleMoveToCart = (productId) => {
    axios.post(`http://localhost:8081/api/cart`, { userId, productId, quantity: 1 })
      .then(() => setWishlist(wishlist => wishlist.filter(item => item.productId !== productId)));
  };

  if (loading) return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2}>My Wishlist</Typography>
      {wishlist.length === 0 ? (
        <Typography>No items in your wishlist.</Typography>
      ) : (
        <Grid container spacing={3}>
          {wishlist.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={item.productImage}
                  alt={item.productName}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{item.productName}</Typography>
                  <Typography variant="subtitle1" color="primary">${item.price}</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 1, mr: 1 }} onClick={() => handleMoveToCart(item.productId)}>
                    Move to Cart
                  </Button>
                  <Button variant="outlined" color="error" sx={{ mt: 1 }} onClick={() => handleRemove(item.id)}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}