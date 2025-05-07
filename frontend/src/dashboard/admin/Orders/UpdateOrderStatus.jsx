import React, { useState } from 'react';
import {
  Box, Card, CardContent, Typography, MenuItem, Select, Button, Fade, TextField, FormControl, InputLabel, Switch, FormControlLabel
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered'];

export default function UpdateOrderStatus() {
  const { id } = useParams();
  const [status, setStatus] = useState('Processing');
  const [tracking, setTracking] = useState('');
  const [notify, setNotify] = useState(true);
  const navigate = useNavigate();

  return (
    <Fade in timeout={600}>
      <Box maxWidth={400} mx="auto">
        <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} mb={2} sx={{ background: 'linear-gradient(90deg,#ff9800,#8bc34a)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Update Order Status
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                label="Status"
                onChange={e => setStatus(e.target.value)}
              >
                {statuses.map(s => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Tracking Info (optional)"
              fullWidth
              value={tracking}
              onChange={e => setTracking(e.target.value)}
              sx={{ mb: 2 }}
            />
            <FormControlLabel
              control={<Switch checked={notify} onChange={() => setNotify(!notify)} />}
              label="Notify customer by email/SMS"
              sx={{ mb: 2 }}
            />
            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(90deg,#ff9800,#8bc34a)',
                  borderRadius: 3,
                  fontWeight: 600,
                  flex: 1,
                  boxShadow: 3,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg,#8bc34a,#ff9800)' },
                }}
                type="submit"
              >
                Update
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: 3, flex: 1 }}
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}