import React, { useState } from 'react';
import {
  Box, Card, CardContent, Typography, TextField, Button, MenuItem, Switch, FormControlLabel, Fade, InputAdornment
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';

const categories = ['Food', 'Toys', 'Accessories', 'Grooming'];

export default function AddProduct() {
  const [status, setStatus] = useState(true);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Fade in timeout={600}>
      <Box maxWidth={600} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#2196f3,#9c27b0)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Add New Product
            </Typography>
            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField label="Product Name" required fullWidth />
              <TextField
                select
                label="Category"
                required
                fullWidth
                defaultValue=""
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </TextField>
              <TextField label="Description" multiline rows={3} fullWidth />
              <TextField
                label="Price"
                type="number"
                required
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                }}
              />
              <TextField label="Stock Quantity" type="number" required fullWidth />
              <Button
                variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
                sx={{
                  borderRadius: 2,
                  borderColor: '#9c27b0',
                  color: '#9c27b0',
                  '&:hover': { borderColor: '#2196f3', color: '#2196f3' },
                }}
              >
                Upload Image
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
              </Button>
              {image && <Typography variant="body2" color="text.secondary">{image.name}</Typography>}
              <FormControlLabel
                control={<Switch checked={status} onChange={() => setStatus(!status)} color="primary" />}
                label={status ? 'Active' : 'Inactive'}
              />
              <Box display="flex" gap={2} mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg,#2196f3,#9c27b0)',
                    borderRadius: 3,
                    fontWeight: 600,
                    flex: 1,
                    boxShadow: 3,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg,#9c27b0,#2196f3)' },
                  }}
                  type="submit"
                >
                  Save Product
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