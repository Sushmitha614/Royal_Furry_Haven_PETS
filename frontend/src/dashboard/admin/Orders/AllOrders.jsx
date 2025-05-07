import React from 'react';
import {
  Box, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Fade, TextField, MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const orders = [
  {
    id: 'ORD1001',
    customer: 'Nimal Perera',
    date: '2024-06-10 14:23',
    total: 4500,
    payment: 'Paid',
    delivery: 'Processing',
  },
  {
    id: 'ORD1002',
    customer: 'Sunethra Silva',
    date: '2024-06-09 10:15',
    total: 3200,
    payment: 'Pending',
    delivery: 'Pending',
  },
  // ... more orders
];

export default function AllOrders() {
  const navigate = useNavigate();

  return (
    <Fade in timeout={600}>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight={700} sx={{ background: 'linear-gradient(90deg,#ff9800,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            All Orders
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 3,
              fontWeight: 600,
              borderColor: '#ff9800',
              color: '#ff9800',
              '&:hover': { borderColor: '#8bc34a', color: '#8bc34a' },
            }}
            onClick={() => navigate('cancelled')}
          >
            View Cancelled/Returned
          </Button>
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <TextField label="Search by Customer" size="small" />
          <TextField label="Payment Status" select size="small" sx={{ minWidth: 150 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Awaiting Payment">Awaiting Payment</MenuItem>
          </TextField>
          <TextField label="Delivery Status" select size="small" sx={{ minWidth: 180 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </TextField>
        </Box>
        <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'auto' }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date & Time</TableCell>
                  <TableCell>Total (LKR)</TableCell>
                  <TableCell>Payment</TableCell>
                  <TableCell>Delivery</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#fffde7' } }}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <Typography color={order.payment === 'Paid' ? 'green' : 'orange'} fontWeight={600}>
                        {order.payment}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color={
                        order.delivery === 'Delivered' ? 'blue' :
                        order.delivery === 'Shipped' ? 'purple' :
                        order.delivery === 'Processing' ? 'orange' : 'grey'
                      } fontWeight={600}>
                        {order.delivery}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`details/${order.id}`)}>View</Button>
                      <Button size="small" onClick={() => navigate(`update/${order.id}`)}>Update</Button>
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