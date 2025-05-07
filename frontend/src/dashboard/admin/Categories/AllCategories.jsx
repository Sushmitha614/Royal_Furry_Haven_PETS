import React from 'react';
import {
  Box, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Fade, Avatar
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Dog Food',
    description: 'Premium dog food for all breeds.',
    icon: 'https://placehold.co/40x40',
    productCount: 12,
  },
  {
    id: 2,
    name: 'Sri Lankan Handmade Pet Beds',
    description: 'Locally crafted, comfy beds for pets.',
    icon: 'https://placehold.co/40x40',
    productCount: 4,
  },
  // ... more categories ...
];

export default function AllCategories() {
  const navigate = useNavigate();

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
                  <TableCell>Icon</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Products</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((cat) => (
                  <TableRow key={cat.id} hover sx={{ transition: 'background 0.2s', '&:hover': { background: '#e3f2fd' } }}>
                    <TableCell>
                      <Avatar src={cat.icon} variant="rounded" />
                    </TableCell>
                    <TableCell>{cat.name}</TableCell>
                    <TableCell>{cat.description}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`products/${cat.id}`)}>
                        {cat.productCount}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => navigate(`edit/${cat.id}`)}>Edit</Button>
                      <Button size="small" onClick={() => navigate(`products/${cat.id}`)}>View Products</Button>
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