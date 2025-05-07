import React, { useState } from 'react';
import {
  Box, Card, CardContent, Typography, TextField, Button, Fade, Avatar
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
  const [icon, setIcon] = useState(null);
  const navigate = useNavigate();

  const handleIconChange = (e) => {
    setIcon(e.target.files[0]);
  };

  return (
    <Fade in timeout={600}>
      <Box maxWidth={500} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#43e97b,#38f9d7)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Add New Category
            </Typography>
            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField label="Category Name" required fullWidth />
              <TextField label="Description" multiline rows={3} fullWidth />
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
              {icon && (
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={URL.createObjectURL(icon)} variant="rounded" />
                  <Typography variant="body2" color="text.secondary">{icon.name}</Typography>
                </Box>
              )}
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
                  Save Category
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
  );
}