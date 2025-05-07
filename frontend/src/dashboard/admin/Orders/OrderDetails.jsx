import React from 'react';
import {
  Box, Card, CardContent, Typography, Grid, Divider, List, ListItem, ListItemText, Fade, Chip, Button
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example data (replace with real fetch)
  const order = {
    id,
    customer: {
      name: 'Nimal Perera',
      email: 'nimal@example.com',
      address: '123 Main St, Colombo',
      phone: '0771234567',
    },
    products: [
      { name: 'Dog Food', qty: 2, price: 1500 },
      { name: 'Leash', qty: 1, price: 800 },
    ],
    subtotal: 3800,
    taxes: 200,
    total: 4000,
    payment: 'Cash on Delivery',
    delivery: 'Processing',
    timeline: [
      { label: 'Placed', date: '2024-06-10 14:23' },
      { label: 'Processing', date: '2024-06-10 15:00' },
    ],
  };

  return (
    <Fade in timeout={600}>
      <Box maxWidth={700} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} sx={{ background: 'linear-gradient(90deg,#ff9800,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Order Details - {order.id}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" fontWeight={600}>Customer Details</Typography>
                <Typography>Name: {order.customer.name}</Typography>
                <Typography>Email: {order.customer.email}</Typography>
                <Typography>Phone: {order.customer.phone}</Typography>
                <Typography>Address: {order.customer.address}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" fontWeight={600}>Order Info</Typography>
                <Typography>Payment: {order.payment}</Typography>
                <Typography>
                  Delivery Status: <Chip label={order.delivery} color="warning" />
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" fontWeight={600}>Products Ordered</Typography>
            <List>
              {order.products.map((p, idx) => (
                <ListItem key={idx} disableGutters>
                  <ListItemText
                    primary={`${p.name} x${p.qty}`}
                    secondary={`LKR ${p.price * p.qty}`}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="flex-end" gap={4}>
              <Typography>Subtotal: LKR {order.subtotal}</Typography>
              <Typography>Taxes: LKR {order.taxes}</Typography>
              <Typography fontWeight={700}>Total: LKR {order.total}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" fontWeight={600}>Order Timeline</Typography>
            <List>
              {order.timeline.map((t, idx) => (
                <ListItem key={idx} disableGutters>
                  <ListItemText primary={t.label} secondary={t.date} />
                </ListItem>
              ))}
            </List>
            <Box mt={2} display="flex" gap={2}>
              <Button variant="contained" sx={{ borderRadius: 3 }} onClick={() => navigate(-1)}>
                Back
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 3 }} onClick={() => navigate(`/dashboard/orders/update/${order.id}`)}>
                Update Status
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}