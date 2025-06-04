import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {
  Box, Card, CardContent, Typography, TextField, Button, Fade, CircularProgress
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8081/api';

export default function EditCategory() {
  const { id } = useParams();
  console.log('Category ID:', id); // Debug: Check if id is present
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (!isEditMode) {
      setLoading(false);
      return;
    }
    // Fetch category data by id
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/categories/${id}`);
        const category = res.data;
        setName(category.name);
        setDescription(category.description);
      } catch (err) {
        console.error('Fetch error:', err); // Debug: Log error details
        toast.error('Failed to fetch category');
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);

    try {
      if (isEditMode) {
        const response = await axios.put(`${API_BASE_URL}/categories/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        
        if (response.status === 200) {
          toast.success('Category updated successfully!', {
            style: {
              background: 'linear-gradient(90deg,#43e97b,#38f9d7)',
              color: '#fff',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            },
            duration: 3000,
            position: 'top-right',
          });
          setTimeout(() => {
            navigate('/admin/dashboard');  // Corrected navigation path
          }, 1000);
        }
      } else {
        await axios.post(`${API_BASE_URL}/categories`, formData);
        toast.success('Category added successfully!', {
          style: {
            background: 'linear-gradient(90deg,#43e97b,#38f9d7)',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
          duration: 3000,
          position: 'top-right',
        });
        setTimeout(() => {
          navigate('/admin/categories');  // Consistent navigation
        }, 1000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Operation failed', {
        style: {
          background: '#f44336',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
        duration: 3000,
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      <Fade in timeout={600}>
        <Box maxWidth={500} mx="auto">
          <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#43e97b,#38f9d7)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                {isEditMode ? 'Edit Category' : 'Add Category'}
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
                    {isEditMode ? 'Update Category' : 'Add Category'}
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: 3, flex: 1 }}
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Fade>
    </>
  );
}
