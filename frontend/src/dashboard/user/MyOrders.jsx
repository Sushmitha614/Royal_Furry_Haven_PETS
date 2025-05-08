import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress
} from '@mui/material';
import axios from 'axios';

export default function MyOrders() {
  const userId = localStorage.getItem('userId'); // Adjust as per your auth logic
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelId, setCancelId] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8081/api/orders/user/${userId}`)
      .then(res => setOrders(res.data))
      .finally(() => setLoading(false));
  }, [userId]);

  const handleCancel = (orderId) => {
    setCancelId(orderId);
    setConfirmOpen(true);
  };

  const confirmCancel = () => {
    axios.put(`http://localhost:8081/api/orders/cancel/${cancelId}`)
      .then(() => {
        setOrders(orders => orders.map(o => o.id === cancelId ? { ...o, status: 'Cancelled' } : o));
      })
      .finally(() => {
        setConfirmOpen(false);
        setCancelId(null);
      });
  };

  if (loading) return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2}>My Orders</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center">No orders found.</TableCell>
            </TableRow>
          ) : (
            orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <img src={order.productImage} alt={order.productName} width={48} height={48} style={{ borderRadius: 8, marginRight: 8 }} />
                    {order.productName}
                  </Box>
                </TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.total}</TableCell>
                <TableCell>
                  <Chip label={order.status} color={
                    order.status === 'Pending' ? 'warning' :
                    order.status === 'Confirmed' ? 'info' :
                    order.status === 'Shipped' ? 'primary' :
                    order.status === 'Cancelled' ? 'error' : 'default'
                  } />
                </TableCell>
                <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  {order.status === 'Pending' && (
                    <Button color="error" size="small" onClick={() => handleCancel(order.id)}>
                      Cancel
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Cancel Order?</DialogTitle>
        <DialogContent>Are you sure you want to cancel this order?</DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>No</Button>
          <Button color="error" onClick={confirmCancel}>Yes, Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}