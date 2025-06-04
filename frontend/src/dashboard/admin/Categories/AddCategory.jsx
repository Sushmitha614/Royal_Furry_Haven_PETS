import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {
  Box, Card, CardContent, Typography, TextField, Button, Fade
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // Fetch categories (Read)
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:8081/api/categories');
      setCategories(res.data);
    } catch (err) {
      toast.error('Failed to fetch categories');
    }
  };

  // Create or Update category
  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryData = {
      name,
      description
    };

    try {
      if (editingId) {
        await axios.put(`http://localhost:8081/api/categories/${editingId}`, categoryData);
        toast.success('Category updated!');
      } else {
        await axios.post('http://localhost:8081/api/categories', categoryData);
        toast.success('Category added!');
      }
      resetForm();
      fetchCategories();
    } catch (err) {
      toast.error('Operation failed');
      console.error(err);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName('');
    setDescription('');
    setEditingId(null);
  };

  // Edit category (populate form)
  const handleEdit = (cat) => {
    setName(cat.name);
    setDescription(cat.description);
    setEditingId(cat._id);
  };

  // Delete category
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/categories/${id}`);
      toast.success('Category deleted!');
      fetchCategories();
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <Fade in timeout={600}>
        <Box maxWidth={500} mx="auto">
          <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#43e97b,#38f9d7)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                {editingId ? 'Edit Category' : 'Add New Category'}
              </Typography>
              <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={handleSubmit}>
                <TextField label="Category Name" required fullWidth value={name} onChange={e => setName(e.target.value)} />
                <TextField label="Description" multiline rows={3} fullWidth value={description} onChange={e => setDescription(e.target.value)} />
                <Box display="flex" gap={2} mt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(90deg,#43e97b,#38f9d7)',
                      borderRadius: 3,
                      fontWeight: 600,
                      flex: 1,
                      boxShadow: 3,
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg,#38f9d7,#43e97b)' },
                    }}
                    type="submit"
                  >
                    {editingId ? 'Update Category' : 'Save Category'}
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: 3, flex: 1 }}
                    onClick={() => {
                      resetForm();
                      navigate(-1);
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
              {/* Category List */}
              <Box mt={4}>
                <Typography variant="h6" mb={2}>Categories</Typography>
                {categories.map(cat => (
                  <Card key={cat._id} sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography fontWeight={600}>{cat.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{cat.description}</Typography>
                    </Box>
                    <Box>
                      <Button size="small" color="primary" onClick={() => handleEdit(cat)}>Edit</Button>
                      <Button size="small" color="error" onClick={() => handleDelete(cat._id)}>Delete</Button>
                    </Box>
                  </Card>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Fade>
    </>
  );
}
