import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Fade
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/api/orders/${id}`)
      .then(() => setOrders(orders.filter(order => order.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#ff9800,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          All Orders
        </Typography>
        <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'auto' }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#fffde7' } }}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`details/${order.id}`)}>View</Button>
                      <Button size="small" color="error" onClick={() => handleDelete(order.id)}>Delete</Button>
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