import React from 'react';
import {
  Box, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Fade, TextField, MenuItem, Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const users = [
  {
    id: 'USR1001',
    name: 'Saman Perera',
    email: 'saman@example.com',
    phone: '0771234567',
    registered: '2024-05-10',
    status: 'Active',
    role: 'User',
  },
  {
    id: 'USR1002',
    name: 'Nadeesha Silva',
    email: 'nadeesha@example.com',
    phone: '0719876543',
    registered: '2024-05-12',
    status: 'Blocked',
    role: 'User',
  },
  // ... more users
];

export default function AllUsers() {
  const navigate = useNavigate();

  return (
    <Fade in timeout={600}>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight={700} sx={{ background: 'linear-gradient(90deg,#00bcd4,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            All Users
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 3,
              fontWeight: 600,
              borderColor: '#00bcd4',
              color: '#00bcd4',
              '&:hover': { borderColor: '#8bc34a', color: '#8bc34a' },
            }}
            onClick={() => navigate('blocked')}
          >
            View Blocked Users
          </Button>
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <TextField label="Search by Name/Email" size="small" />
          <TextField label="Status" select size="small" sx={{ minWidth: 120 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Blocked">Blocked</MenuItem>
          </TextField>
        </Box>
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
                  <TableCell>Status</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#e0f7fa' } }}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.registered}</TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        color={user.status === 'Active' ? 'success' : 'error'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`details/${user.id}`)}>View</Button>
                      <Button size="small" onClick={() => navigate(`edit/${user.id}`)}>Edit</Button>
                      {user.status === 'Active' ? (
                        <Button size="small" color="warning">Block</Button>
                      ) : (
                        <Button size="small" color="success">Unblock</Button>
                      )}
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