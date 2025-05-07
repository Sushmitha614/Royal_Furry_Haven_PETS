import React from 'react';
import {
  Box, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody, Fade, Button, Chip
} from '@mui/material';

const blockedUsers = [
  {
    id: 'USR1002',
    name: 'Nadeesha Silva',
    email: 'nadeesha@example.com',
    phone: '0719876543',
    registered: '2024-05-12',
    reason: 'Multiple failed logins',
    status: 'Blocked',
    role: 'User',
  },
  // ... more users
];

export default function BlockedUsers() {
  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#00bcd4,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Blocked Users
        </Typography>
        <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'auto' }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registered</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blockedUsers.map((user) => (
                  <TableRow key={user.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#e0f7fa' } }}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.registered}</TableCell>
                    <TableCell>{user.reason}</TableCell>
                    <TableCell>
                      <Chip label={user.status} color="error" size="small" />
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Button size="small" color="success">Unblock</Button>
                      <Button size="small" color="error">Delete</Button>
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