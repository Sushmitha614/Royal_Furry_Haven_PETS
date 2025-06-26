import React from 'react';
import {
  Box, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody, Fade, Button
} from '@mui/material';

const cancelledOrders = [
  {
    id: 'ORD1003',
    customer: 'Kamal Jayasuriya',
    date: '2024-06-08 09:00',
    total: 2500,
    reason: 'Customer cancelled',
    status: 'Refunded',
  },
  {
    id: 'ORD1004',
    customer: 'Dilani Fernando',
    date: '2024-06-07 16:30',
    total: 1800,
    reason: 'Product returned',
    status: 'Not Refunded',
  },
  // ... more orders
];

export default function CancelledOrders() {
  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#ff9800,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Cancelled / Returned Orders
        </Typography>
        <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'auto' }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date & Time</TableCell>
                  <TableCell>Total (LKR)</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cancelledOrders.map((order) => (
                  <TableRow key={order.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#fffde7' } }}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.reason}</TableCell>
                    <TableCell>
                      <Typography color={order.status === 'Refunded' ? 'green' : 'red'} fontWeight={600}>
                        {order.status}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button size="small">View</Button>
                      {order.status === 'Not Refunded' && (
                        <Button size="small" color="error">Issue Refund</Button>
                      )}
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