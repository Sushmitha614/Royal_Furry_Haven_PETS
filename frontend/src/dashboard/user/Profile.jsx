import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

export default function Profile() {
  const userId = localStorage.getItem('userId');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    axios.get(`http://localhost:8081/api/users/${userId}`)
      .then(res => setUserData(res.data))
      .finally(() => setLoading(false));
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    setSaving(true);

    // Only send allowed fields
    const { fullName, email, phone, address } = userData;
    const payload = { fullName, email, phone, address };

    // Basic validation (customize as needed)
    if (!fullName || !email) {
      setSnackbar({ open: true, message: 'Full Name and Email are required.', severity: 'error' });
      setSaving(false);
      return;
    }

    axios.put(`http://localhost:8081/api/users/${userId}`, payload)
      .then(() => setSnackbar({ open: true, message: 'Profile updated!', severity: 'success' }))
      .catch(() => setSnackbar({ open: true, message: 'Update failed', severity: 'error' }))
      .finally(() => setSaving(false));
  };

  if (loading || !userData) return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;

  return (
    <Box maxWidth={500}>
      <Typography variant="h5" fontWeight={700} mb={2}>My Profile</Typography>
      <TextField
        label="Full Name"
        name="fullName"
        value={userData.fullName || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={userData.email || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        disabled
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={userData.phone || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="address"
        value={userData.address || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, borderRadius: 3 }}
        onClick={handleUpdate}
        disabled={saving}
      >
        {saving ? <CircularProgress size={24} /> : 'Update Profile'}
      </Button>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
}