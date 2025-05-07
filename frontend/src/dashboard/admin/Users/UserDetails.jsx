import React from 'react';
import {
  Box, Card, CardContent, Typography, Grid, Divider, Fade, Chip, Button
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example data (replace with real fetch)
  const user = {
    id,
    name: 'Saman Perera',
    email: 'saman@example.com',
    phone: '0771234567',
    address: '123 Main St, Colombo',
    registered: '2024-05-10',
    status: 'Active',
    role: 'User',
    lastLogin: '2024-06-10 09:30',
    orders: 8,
    totalSpent: 24500,
    trusted: true,
  };

  return (
    <Fade in timeout={600}>
      <Box maxWidth={600} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} sx={{ background: 'linear-gradient(90deg,#00bcd4,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              User Details - {user.name}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" fontWeight={600}>Contact Info</Typography>
                <Typography>Name: {user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Phone: {user.phone}</Typography>
                <Typography>Address: {user.address}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" fontWeight={600}>Account Info</Typography>
                <Typography>Registered: {user.registered}</Typography>
                <Typography>Status: <Chip label={user.status} color={user.status === 'Active' ? 'success' : 'error'} size="small" /></Typography>
                <Typography>Role: {user.role}</Typography>
                <Typography>Last Login: {user.lastLogin}</Typography>
                {user.trusted && <Chip label="Trusted Buyer" color="primary" size="small" sx={{ mt: 1 }} />}
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" fontWeight={600}>Order Summary</Typography>
            <Box display="flex" gap={4} mt={1}>
              <Typography>Orders: {user.orders}</Typography>
              <Typography>Total Spent: LKR {user.totalSpent}</Typography>
            </Box>
            <Box mt={3} display="flex" gap={2}>
              <Button variant="contained" sx={{ borderRadius: 3 }} onClick={() => navigate(-1)}>
                Back
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 3 }} onClick={() => navigate(`/dashboard/users/edit/${user.id}`)}>
                Edit User
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}