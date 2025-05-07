import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import AllProducts from '../Products/AllProducts'; // Reuse your product table

export default function ViewCategoryProducts() {
  // You can filter products by category id if needed
  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#43e97b,#38f9d7)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Products in this Category
        </Typography>
        <AllProducts />
      </Box>
    </Fade>
  );
}