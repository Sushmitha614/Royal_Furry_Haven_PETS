import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {
  Box, Card, CardContent, Typography, TextField, Button, Fade, Avatar, CircularProgress
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate, useParams } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8081/api';

export default function EditCategory() {
  const { id } = useParams();
  console.log('Category ID:', id); // Debug: Check if id is present
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState(null);
  const [existingIconUrl, setExistingIconUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isEditMode = Boolean(id); // <-- Add this line

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
        setExistingIconUrl(category.iconUrl);
      } catch (err) {
        console.error('Fetch error:', err); // Debug: Log error details
        toast.error('Failed to fetch category');
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id, isEditMode]);

  const handleIconChange = (e) => {
    setIcon(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (icon) {
      formData.append('icon', icon);
    }

    try {
      if (isEditMode) {
        await axios.put(`${API_BASE_URL}/categories/${id}`, formData);
        toast.success('Category updated!');
        // Option 1: Refetch updated data and stay on page
        // setLoading(true);
        // await fetchCategory(); // You'd need to move fetchCategory outside useEffect
        // Option 2: Navigate away (current behavior)
        navigate(-1);
      } else {
        await axios.post(`${API_BASE_URL}/categories`, formData);
        toast.success('Category added!');
        navigate(-1);
      }
    } catch (err) {
      toast.error(isEditMode ? 'Update failed' : 'Add failed');
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
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    borderRadius: 2,
                    borderColor: '#43e97b',
                    color: '#43e97b',
                    '&:hover': { borderColor: '#38f9d7', color: '#38f9d7' },
                  }}
                >
                  Upload Icon/Image
                  <input type="file" hidden accept="image/*" onChange={handleIconChange} />
                </Button>
                {icon ? (
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={URL.createObjectURL(icon)} variant="rounded" />
                    <Typography variant="body2" color="text.secondary">{icon.name}</Typography>
                  </Box>
                ) : existingIconUrl ? (
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={existingIconUrl} variant="rounded" />
                    <Typography variant="body2" color="text.secondary">Current Icon</Typography>
                  </Box>
                ) : null}
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
