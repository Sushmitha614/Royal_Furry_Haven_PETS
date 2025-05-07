import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Fade
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AllCategories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/api/categories/${id}`)
      .then(() => setCategories(categories.filter(category => category.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <Fade in timeout={600}>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight={700} sx={{ background: 'linear-gradient(90deg,#43e97b,#38f9d7)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            All Categories
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              background: 'linear-gradient(90deg,#43e97b,#38f9d7)',
              borderRadius: 3,
              fontWeight: 600,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg,#38f9d7,#43e97b)' },
            }}
            onClick={() => navigate('add')}
          >
            Add Category
          </Button>
        </Box>
        <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'auto' }}>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#e0f7fa' } }}>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`edit/${category.id}`)}>Edit</Button>
                      <Button size="small" color="error" onClick={() => handleDelete(category.id)}>Delete</Button>
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