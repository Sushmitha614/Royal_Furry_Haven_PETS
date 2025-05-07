import React from 'react';
import {
  Box, Card, CardContent, Typography, Avatar, Chip, Fade, Grid, Button
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  // Example product data (replace with real fetch)
  const product = {
    image: 'https://placehold.co/120x120',
    name: 'Royal Cat Food',
    category: 'Food',
    price: 1200,
    stock: 50,
    status: 'Active',
    description: 'A premium cat food for all breeds.',
    createdAt: '2024-06-01',
  };
  const navigate = useNavigate();

  return (
    <Fade in timeout={600}>
      <Box maxWidth={600} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={product.image} sx={{ width: 120, height: 120, boxShadow: 2 }} variant="rounded" />
              </Grid>
              <Grid item xs>
                <Typography variant="h5" fontWeight={700} sx={{ background: 'linear-gradient(90deg,#2196f3,#9c27b0)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  {product.name}
                </Typography>
                <Chip
                  label={product.status}
                  sx={{
                    background: product.status === 'Active'
                      ? 'linear-gradient(90deg,#43e97b,#38f9d7)'
                      : 'linear-gradient(90deg,#ff6a00,#ee0979)',
                    color: '#fff',
                    fontWeight: 600,
                    mt: 1,
                  }}
                />
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Category: {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Created: {product.createdAt}
                </Typography>
              </Grid>
            </Grid>
            <Box mt={3}>
              <Typography variant="subtitle1" fontWeight={600}>Description</Typography>
              <Typography variant="body1" color="text.secondary">{product.description}</Typography>
            </Box>
            <Box mt={2} display="flex" gap={3}>
              <Typography variant="h6" color="#2196f3">LKR {product.price}</Typography>
              <Typography variant="h6" color="#9c27b0">Stock: {product.stock}</Typography>
            </Box>
            <Box mt={3} display="flex" gap={2}>
              <Button variant="contained" sx={{ borderRadius: 3 }} onClick={() => navigate(-1)}>
                Back
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 3 }} onClick={() => navigate(`/dashboard/products/edit/${id}`)}>
                Edit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}