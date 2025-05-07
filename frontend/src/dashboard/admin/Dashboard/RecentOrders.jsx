import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const orders = [
  { id: 1, name: 'Order #1001', status: 'Completed' },
  { id: 2, name: 'Order #1002', status: 'Pending' },
  { id: 3, name: 'Order #1003', status: 'Shipped' },
];

export default function RecentOrders() {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Orders
        </Typography>
        <List>
          {orders.map((order) => (
            <ListItem key={order.id} divider>
              <ListItemText
                primary={order.name}
                secondary={order.status}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
