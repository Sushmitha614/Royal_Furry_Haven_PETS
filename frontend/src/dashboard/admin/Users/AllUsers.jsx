import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Fade, Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <Fade in timeout={600}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#00bcd4,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          All Users
        </Typography>
        <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'auto' }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell>User ID</TableCell> */}
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#e0f7fa' } }}>
                    {/* <TableCell>{user.id}</TableCell> */}
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
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
                      <Button size="small" color="error" onClick={() => handleDelete(user.id)}>Delete</Button>
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