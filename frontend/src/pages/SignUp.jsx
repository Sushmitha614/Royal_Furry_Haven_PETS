import React, { useState } from 'react';
import { Typography, Box, Snackbar, Alert } from '@mui/material';

export default function SignUp() {
  console.log('SignUp component rendered'); // Debug: Check if component is rendered

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.email.trim() || !form.password.trim()) {
      setError('Email and password are required.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    setSuccess('Sign up successful! (Connect to backend for real registration)');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <Box sx={{ mb: 3 }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </Box>
        <button type="submit" style={{ width: '100%', padding: 10 }}>
          Sign Up
        </button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarSeverity === 'error' ? error : success}
        </Alert>
      </Snackbar>
    </>
  );
}
